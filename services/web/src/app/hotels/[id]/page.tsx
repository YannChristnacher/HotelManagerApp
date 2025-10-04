"use client";

import useHotelDetail from "@/lib/hooks/UseHotelDetail";
import React, {use} from "react";
import {Box, Button, Flex, IconButton, Separator, Skeleton, Text} from "@chakra-ui/react";
import HotelInformationField from "@/components/ui/Hotel/HotelInformationField";
import { LuPen } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";
import HotelInformationBlock from "@/components/ui/Hotel/HotelInformationBlock";
import HotelGallery from "@/components/ui/Hotel/HotelGallery";
import HotelEditModal from "@/components/ui/Hotel/HotelEditModal";
import HotelInformationSkeleton from "@/components/ui/Hotel/HotelInformationSkeleton";

interface IProps {
    id: Promise<{ id: string }>
}
export default function page({params}: IProps)
{
    const { id } = use(params)
    const {hotel, setHotel, isLoading} = useHotelDetail(id)
    return (
        <div>
            <Box mb="14" background="white" borderRadius="md" px="4" py="8">
                <Button mb={4} variant="solid">
                    <LuChevronLeft /> Retour
                </Button>
                {isLoading ? <Skeleton height="5" /> : <Text textStyle="3xl">Détail de l'herbergement : { hotel.name }</Text> }
                <Text  color="gray.500" fontWeight="light"  textStyle="md">Vous pouvez sur cet écran voir toutes les données de l'établissement et les modifiés</Text>
            </Box>



            <Box background="white" borderRadius="md" px="4" py="8" mt={"4"}>
                <Flex width={"100%"}>
                    <Text textStyle="2xl">Informations</Text>
                    <Box marginStart="auto">
                        <HotelEditModal hotel={hotel} setHotel={setHotel}>
                            <IconButton disable={isLoading}>
                                <LuPen />
                            </IconButton>
                        </HotelEditModal>
                    </Box>
                </Flex>

                <Separator mt={4} mb={4}/>
                {isLoading ?
                    <HotelInformationSkeleton/>
                    :<HotelInformationBlock hotel={hotel}/>
                }

            </Box>

            <Box background="white" borderRadius="md" px="4" py="8">
                <Flex width={"100%"}>
                    <Text textStyle="2xl">Photos</Text>
                    <Box marginStart="auto">
                        <IconButton  disable={isLoading}>
                            <LuPen />
                        </IconButton>
                    </Box>
                </Flex>

                <Separator mt={4} mb={4}/>

                <HotelGallery hotel={hotel}/>
            </Box>
        </div>
    )
}