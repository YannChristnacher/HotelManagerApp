import {IHotel} from "@/models/IHotel";
import HotelInformationField from "@/components/ui/Hotel/HotelInformationField";
import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";

interface IProps
{
    hotel: IHotel
}
export default function HotelInformationBlock({hotel}: IProps)
{
    return (
        <Flex width={"100%"}>
            <Box width={"50%"}>
                <HotelInformationField label={"Nom"}>
                    <Text textStyle="md">{ hotel.name }</Text>
                </HotelInformationField>

                <HotelInformationField label={"Adresse"}>
                    <Text textStyle="md">{ hotel.address1}</Text>
                    {hotel.address2 ?
                        <Text textStyle="md">{ hotel.address2}</Text> as React.ReactNode
                        :null
                    }
                    <Text textStyle="md">{ hotel.zipcode + " " +hotel.city}</Text>
                </HotelInformationField>

                <HotelInformationField label={"Ville"}>
                    <Text textStyle="md">{ hotel.city}</Text>
                </HotelInformationField>

                <HotelInformationField label={"Pays"}>
                    <Text textStyle="md">{ hotel.country}</Text>
                </HotelInformationField>

                <HotelInformationField label={"Position"}>
                    <Text textStyle="md">{ hotel.lat + " | " + hotel.lng}</Text>
                </HotelInformationField>

                <HotelInformationField label={"Capacité maximum d'hébergement"}>
                    <Text textStyle="md">{ hotel.max_capacity.toString() }</Text>
                </HotelInformationField>

                <HotelInformationField label={"Prix par nuit"}>
                    <Text textStyle="md">{ hotel.price_per_night.toString() + " €"}</Text>
                </HotelInformationField>

                <HotelInformationField label={"Date d'enregistrement"}>
                    <Text textStyle="md">{ hotel.created_at}</Text>
                </HotelInformationField>
            </Box>
            <Box width={"50%"}>
                <HotelInformationField label={"Description"}>
                    <Text textStyle="md">{ hotel.description }</Text>
                </HotelInformationField>
            </Box>

        </Flex>
    )
}