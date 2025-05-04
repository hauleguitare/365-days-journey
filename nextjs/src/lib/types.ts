export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface Navigation {
    id: number;
    title: string;
    href: string;
    description: string;
    order?: number;
    parent?: Navigation | null;
}