import {useEffect, useState} from "react";
import DefaultHotel from "@/lib/DefaultHotel";
import ClientApi from "@/lib/api/ClientApi";
import {IHotel} from "@/models/IHotel";

export default function useHotelDetail(id: number)
{
    const [hotel, setHotel] = useState<IHotel>(DefaultHotel)
    const [isLoading, setIsLoading] = useState(true)

    const fetch = () => {
        setIsLoading(true)
        ClientApi
            .hotelEndpoints()
            .read(id)
            .then((r) => {
                setHotel(r.data.data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetch()
    }, []);

    return {
        hotel,
        setHotel,
        isLoading
    }
}