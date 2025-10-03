import {ISingleApiResponse} from "@/models/ISingleApiResponse";

export interface IPaginatedApiResponse<T> extends ISingleApiResponse<Array<T>>
{
    links: {
        first: string|null,
        last: string|null,
        next: string|null,
        prev: string|null,
    },
    meta: {
        current_page: number,
        per_page: number,
        total: number,
        last_page: number
    }
}