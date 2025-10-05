import axios, {AxiosInstance} from "axios"
import HotelsEndpoints from "@/lib/api/Endpoints/HotelsEndpoints";
import {toaster} from "@/components/ui/toaster";
import {PictureEndpoints} from "@/lib/api/Endpoints/PictureEndpoints";

class ClientApi
{
    private baseUrl: string = process.env.NEXT_PUBLIC_API_URL
    private timeout: number = 10000

    public request(): AxiosInstance
    {
        const instance = axios.create({
            baseURL: this.baseUrl,
            timeout: this.timeout,
            headers: {
                "Content-Type": "application/json",
            },
        })

        instance.interceptors.response.use(
            (response) => {
                return response
            },
            (error) => {
                console.log(error)
                toaster.create({
                    title: "Oups",
                    //description: error.response.data.message,
                    type: "error"
                })
                return Promise.reject(error);
            }
        )

        return instance;
    }

    public hotelEndpoints(): HotelsEndpoints
    {
        return new HotelsEndpoints(this)
    }

    public pictureEndpoints(): PictureEndpoints
    {
        return new PictureEndpoints(this)
    }

}

export default new ClientApi();