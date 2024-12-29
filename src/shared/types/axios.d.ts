import {AxiosInstance, AxiosRequestConfig} from "axios";

export interface CustomInstance extends AxiosInstance {
    get<T = unknown, D = unknown>(
        url: string,
        config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    post<T = unknown, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    put<T = unknown, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    patch<T = unknown, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    delete<T = unknown, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<T>;
    option<T = unknown, D = unknown>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>,
    ): Promise<T>;
}
