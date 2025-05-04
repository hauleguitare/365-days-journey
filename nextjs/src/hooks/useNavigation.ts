// src/hooks/useNavigation.ts
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Navigation, StrapiResponse} from "@/lib/types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// Create API client with authorization header
const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        ...(API_TOKEN ? { 'Authorization': `Bearer ${API_TOKEN}` } : {})
    }
});




export function useNavigation() {
    return useQuery<StrapiResponse<Navigation[]>>({
        queryKey: ['navigation'],
        queryFn: async () => {
            try {
                const { data } = await axiosInstance.get<StrapiResponse<Navigation[]>>('/navigations', {
                    params: {
                        sort: ['order:asc'],
                        'pagination[pageSize]': 100,
                        populate: ['parent']
                    }
                });
                return data;
            } catch (error) {
                console.error('Error fetching navigation:', error);
                throw error;
            }
        }
    });
}