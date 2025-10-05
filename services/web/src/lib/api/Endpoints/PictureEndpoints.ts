import ClientApi from "@/lib/api/ClientApi";
import {AxiosResponse} from "axios";
import {ISingleApiResponse} from "@/models/ISingleApiResponse";
import {IPicture} from "@/models/IPicture";
import {IUpdatePosition} from "@/models/IUpdatePosition";

export class PictureEndpoints
{
    private client: ClientApi;
    public constructor(client: ClientApi) {
        this.client = client
    }

    public async store(hotelId: number, form: FormData):  Promise<AxiosResponse<ISingleApiResponse<IPicture>>>
    {
       return await this.client
            .request()
            .post("hotels/" + hotelId +"/pictures", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
    }

    public async delete(hotelId: number, pictureId: number): Promise<AxiosResponse<ISingleApiResponse<boolean>>>
    {
        return await this.client
            .request()
            .delete("hotels/" + hotelId +"/pictures/" +pictureId)
    }

    public async updatePositions(hotelId: number, data: IUpdatePosition): Promise<AxiosResponse<ISingleApiResponse<boolean>>>
    {
        return await this.client
            .request()
            .put("hotels/" + hotelId +"/pictures/update-positions", data)
    }
}