// src/lib/api.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const strapiApi = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        ...(API_TOKEN ? { 'Authorization': `Bearer ${API_TOKEN}` } : {}),
    },
});

type QueryParams = {
    sort?: string[];
    pagination?: {
        page?: number;
        pageSize?: number;
    };
    populate?: string | string[];
    [key: string]: any;
};

export async function fetchStrapi<T>(
    endpoint: string,
    queryParams?: QueryParams
): Promise<T> {
    try {
        const { data } = await strapiApi.get(endpoint, {
            params: queryParams,
        });
        return data;
    } catch (error) {
        console.error('Error fetching from Strapi:', error);
        throw error;
    }
}

// For uploads or other methods that might need different handling
export async function postStrapi<T>(
    endpoint: string,
    payload: any
): Promise<T> {
    try {
        const { data } = await strapiApi.post(endpoint, payload);
        return data;
    } catch (error) {
        console.error('Error posting to Strapi:', error);
        throw error;
    }
}

export function getStrapiURL(path = '') {
    return `${API_URL}${path}`;
}

export function getStrapiMedia(media: any) {
    if (!media) return null;
    const { url } = media.data.attributes;
    return url.startsWith('/') ? getStrapiURL(url) : url;
}