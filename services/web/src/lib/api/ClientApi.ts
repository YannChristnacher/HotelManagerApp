import axios, {AxiosInstance} from "axios"
import HotelsEndpoints from "@/lib/api/Endpoints/HotelsEndpoints";
import {toaster} from "@/components/ui/toaster";

class ClientApi
{
    private baseUrl: string ="http://localhost:8000/api/v1"
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
                    description: error.response.data.message,
                    type: "error"
                })
            }
        )

        return instance;
    }

    public hotelEndpoints(): HotelsEndpoints
    {
        return new HotelsEndpoints(this)
    }

}

export default new ClientApi();