import { useQuery, QueryKey } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

const useFetchData = (queryKey: QueryKey, endpoint: string) => {
    return useQuery([queryKey], async () => {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    });
};

export default useFetchData;