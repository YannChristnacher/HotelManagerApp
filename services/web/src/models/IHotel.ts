import {IPicture} from "@/models/IPicture";

export interface IHotel
{
    id: number,
    name: string,
    address1: string,
    address2: string|null,
    zipcode: string,
    city: string,
    country: string,
    lng: number,
    lat: number,
    description: string,
    max_capacity: number,
    price_per_night: number,
    created_at: string,
    pictures:Array<IPicture>
}