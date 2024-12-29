import API from "../../../shared/utils/axios.ts";

export const fetchInitialCount = async (): Promise<number> => {
    const response = await API.get<{number: number;}>('/api/initialCount');
    return response.number;
}
