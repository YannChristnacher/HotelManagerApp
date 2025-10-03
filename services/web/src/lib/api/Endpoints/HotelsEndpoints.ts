import ClientApi from "@/lib/api/ClientApi";
import {IPaginatedApiResponse} from "@/models/IPaginatedApiResponse";
import {IPreviewHotel} from "@/models/IPreviewHotel";
import {AxiosResponse} from "axios";

export default class HotelsEndpoints
{
    private client: ClientApi;
    public constructor(client: ClientApi) {
        this.client = client
    }

    public async all(): Promise<AxiosResponse<IPaginatedApiResponse<IPreviewHotel>>>
    {
        return await this.client.request().get<IPaginatedApiResponse<IPreviewHotel>>("/hotels") as Promise<AxiosResponse<IPaginatedApiResponse<IPreviewHotel>>>
    }
}

