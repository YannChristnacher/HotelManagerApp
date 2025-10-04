export interface IFormHotel
{
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
}