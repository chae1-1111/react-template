import axios, {AxiosHeaders, AxiosRequestConfig} from "axios";
import {CustomInstance} from "../types/axios";
import {getLocalStorage, setLocalStorage} from "./localStorage.ts";
import {LOCAL_STORAGE_KEYS} from "../constants/storageKeys.ts";

const API: CustomInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false,
    headers: {} as AxiosHeaders,
}) as CustomInstance;

API.interceptors.request.use((req) => {
    // TODO : 모든 API 요청 전 공통적으로 처리해야 하는 항목 추가 (ex. headers 세팅)
    const accessToken = getLocalStorage<string>(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    req.headers['Content-Type'] = 'application/json';
    if (accessToken) {
        req.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return req;
});

const MAX_RETRY_COUNT = 3;
const RETRY_DELAY = [500, 1000, 3000];
const retryCountMap = new Map();

API.interceptors.response.use(
    (response) => {
        // TODO : 모든 API 응답에 대해 공통적으로 처리해야 하는 항목 추가
        if (response.data["newAccessToken"]) {
            setLocalStorage<string>(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, response.data["newAccessToken"]);
        }
        retryCountMap.delete(response.config.url);
        return response.data;
    },
    async (error) => {
        // TODO : 공통 에러에 대한 처리 로직 추가
        const originalRequest: AxiosRequestConfig = error.config;

        // 재시도 로직
        const requestUrl = error.config?.url;
        if (requestUrl) {
            let retryCount = retryCountMap.get(requestUrl) || 0;
            if (retryCount < MAX_RETRY_COUNT) {
                retryCount += 1;
                retryCountMap.set(requestUrl, retryCount);
                await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY[retryCount - 1]));
                return API(originalRequest);
            } else {
                retryCountMap.delete(error.config.url);
            }
        }
        return Promise.reject(error);
    },
);

export default API;
