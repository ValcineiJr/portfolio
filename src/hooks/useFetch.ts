import useSWR from 'swr';
import api from '@/services/api';

export function useFetch<Data = any, Error = any>(url: string, params?: any) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url: string) => {
      const response = await api.get(url, { params });

      return response.data;
    },
  );

  return { data, error, mutate };
}
