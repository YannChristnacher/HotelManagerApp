"use client"

import {Box, Button, Flex, Text} from "@chakra-ui/react";

import React from "react";
import HotelInformationForm from "@/components/ui/Hotel/HotelInformationForm";
import useHotelForm from "@/lib/hooks/UseHotelForm";

export default function page()
{
    const {values, setValues, errors} = useHotelForm()
    return (
        <div>
            <Box mb="14" background="white" borderRadius="md" px="4" py="8">
                <Text textStyle="3xl">Création d'un nouvel hébergement</Text>
                <Text  color="gray.500" fontWeight="light"  textStyle="md">Vous pouvez sur cet écran créer un nouvel hébergement pour le rajouter à votre liste.</Text>
            </Box>


            <Box background="white" borderRadius="md" px="4" py="8" mt={"4"}>
                <HotelInformationForm
                    values={values}
                    setValues={setValues}
                    errors={errors}
                />

                <Flex mt={4} justifyContent={"end"}>
                    <Button>Sauvegarder</Button>
                </Flex>
            </Box>


        </div>
    )
}