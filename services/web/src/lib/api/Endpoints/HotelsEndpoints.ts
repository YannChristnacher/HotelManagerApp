import ClientApi from "@/lib/api/ClientApi";
import {IPaginatedApiResponse} from "@/models/IPaginatedApiResponse";
import {IPreviewHotel} from "@/models/IPreviewHotel";
import {AxiosResponse} from "axios";
import {ISingleApiResponse} from "@/models/ISingleApiResponse";

export default class HotelsEndpoints
{
    private client: ClientApi;
    public constructor(client: ClientApi) {
        this.client = client
    }

    public async all(queryParameters: object, forceUrl: string|null): Promise<AxiosResponse<IPaginatedApiResponse<IPreviewHotel>>>
    {
        if(forceUrl)
        {
            return await this.client.request().get<IPaginatedApiResponse<IPreviewHotel>>(forceUrl) as Promise<AxiosResponse<IPaginatedApiResponse<IPreviewHotel>>>
        }
        return await this.client.request().get<IPaginatedApiResponse<IPreviewHotel>>("/hotels", {
            params: queryParameters
        }) as Promise<AxiosResponse<IPaginatedApiResponse<IPreviewHotel>>>
    }

    public async delete(id: number): Promise<AxiosResponse<ISingleApiResponse<boolean>>>
    {
        return await this.client.request().delete("/hotels/" + id)
    }
}

