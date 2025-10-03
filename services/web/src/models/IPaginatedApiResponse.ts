import {ISingleApiResponse} from "@/models/ISingleApiResponse";
import {IMetaResponse} from "@/models/IMetaResponse";
import {ILinkResponse} from "@/models/ILinkResponse";

export interface IPaginatedApiResponse<T> extends ISingleApiResponse<Array<T>>
{
    links: ILinkResponse,
    meta: IMetaResponse
}