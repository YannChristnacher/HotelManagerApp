import {useEffect, useState} from "react";
import {IFormHotel} from "@/models/IFormHotel";
import {IHotel} from "@/models/IHotel";
import DefaultHotel from "@/lib/DefaultHotel";
import ClientApi from "@/lib/api/ClientApi";
import {toaster} from "@/components/ui/toaster";

export default function useHotelForm(hotel: IHotel|null = null)
{
    const [values, setValues] = useState<IFormHotel>(DefaultHotel)
    const [errors, setErrors] = useState<any>()
    const [isLoading, setIsLoading] = useState<any>()

    useEffect(() => {
        mapHotelToForm(hotel)
    }, [hotel]);

    const mapHotelToForm = (hotel: IHotel|null) => {
        if(hotel)
        {
            setValues({...values,
                name: hotel.name == null ? "" : hotel.name,
                address1: hotel.address1 == null ? "" : hotel.address1,
                address2: values.address2 == null ? "" : hotel.address2,
                zipcode: hotel.zipcode == null ? "" : hotel.zipcode,
                city: hotel.city == null ? "" : hotel.city,
                country: hotel.country == null ? "" : hotel.country,
                lng: hotel.lng == null ? 0 : hotel.lng,
                lat: hotel.lat == null ? 0 : hotel.lng,
                description: hotel.description == null ? "" : hotel.description,
                max_capacity: hotel.max_capacity == null ? 0 : hotel.max_capacity,
                price_per_night: hotel.price_per_night == null ? 0 : hotel.price_per_night
            })
        }
    }
    const mapBodyPost = () => {
        return {
            name: values.name,
            address1: values.address1,
            address2: values.address2,
            zipcode: values.zipcode,
            city: values.city,
            country: values.country,
            lng: values.lng,
            lat: values.lat,
            description: values.description,
            max_capacity: values.max_capacity,
            price_per_night: values.price_per_night
        }
    }

    const mapFormToHotel = (): IHotel => {

        if(hotel){
            return {
                id: hotel.id,
                name: values.name,
                address1: values.address1,
                address2: values.address2 == null ? "" : values.address2,
                zipcode: values.zipcode,
                city: values.city,
                country: values.country,
                lng: values.lng,
                lat: values.lat,
                description: values.description,
                max_capacity: values.max_capacity,
                price_per_night: values.price_per_night,
                pictures: hotel.pictures,
                created_at: hotel.created_at
            }
        }
        return DefaultHotel

    }

    const sendEdit = async (): Promise<boolean> => {
        setErrors({})
        if(hotel)
        {
            const response = await ClientApi
                .hotelEndpoints()
                .update(hotel.id,  mapBodyPost())
                .catch((e) => {
                    if (e.status && e.status == 400 && e.response && e.response.data.data) {
                        setErrors(e.response.data.data)
                    }
                })

            if(response?.data.data )
            {
                toaster.create({
                    title: "Opération réussi !",
                    description: response.data.message,
                    type: "success"
                })
                return true;
            }


            return false;
        }

    }

    const sendCreate = () => {
        setErrors({})
        setIsLoading(true)
        ClientApi
            .hotelEndpoints()
            .create(mapBodyPost())
            .then((res) => {
                toaster.create({
                    title: "Opération réussi !",
                    description: res.data.message,
                    type: "success"
                })
                setIsLoading(false)
            })
            .catch((e) => {
                if (e.status && e.status == 400 && e.response && e.response.data.data) {
                    setErrors(e.response.data.data)
                }
                setIsLoading(false)
            })
            .finally(() => setIsLoading(false))
    }

    return {
        values,
        setValues,
        sendEdit,
        errors,
        mapFormToHotel,
        mapHotelToForm,
        isLoading,
        sendCreate
    }
}