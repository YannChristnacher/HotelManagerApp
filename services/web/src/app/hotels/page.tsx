"use client";


import {
    Box,
    Text,
    Skeleton, Table, Flex,
} from "@chakra-ui/react";
import React from "react";
import useHotelList from "@/lib/hooks/UseHotelList";
import HotelTable from "@/components/ui/Hotel/HotelTable";
import HotelFilters from "@/components/ui/Hotel/HotelFilters";
export default function page()
{
    const {hotels, loading, fetch, meta, links, search, setSearch, order, setOrder} = useHotelList()
    return (
        <div>
            <Box mb="14" background="white" borderRadius="md" px="4" py="8">
                <Text textStyle="3xl">Liste des hébergements</Text>
                <Text  color="gray.500" fontWeight="light"  textStyle="md">Vous trouverez sur cette cette page l'ensemble des établissements enregistrés.</Text>
            </Box>
            <Box mb="14" background="white" borderRadius="md" px="4" py="8">
                <Flex mb="4">
                    <HotelFilters
                        search={search}
                        setSearch={setSearch}
                        order={order}
                        setOrder={setOrder}
                    />
                </Flex>

                {loading ? (
                    // Skeleton pendant le chargement
                    Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} height="30px" mb="2" borderRadius="md" />
                    ))
                ) : hotels.length === 0 ? (
                    // Message si aucun résultat
                    <Text textAlign="center" mt={4} color="gray.500">
                        Aucun résultat trouvé
                    </Text>
                ) : (

                    // Listing des hôtels
                    <HotelTable
                        hotels={hotels ?? []}
                        links={links ?? null}
                        meta={meta ?? null}
                        fetch={(link) => fetch(link)}
                    />

                )}



            </Box>

        </div>


    )
}