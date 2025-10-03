import {NativeSelect, Input,Flex, InputGroup} from "@chakra-ui/react"
import {IHotelFilter} from "@/models/IHotelFilter";
import React, {useEffect, useState} from "react";
import {DefaultHotelFilter} from "@/lib/DefaultHotelFilter";
import {LuSearch} from "react-icons/lu";

interface IProps
{
    search: string,
    setSearch:  (value: string) => void,
    order: string,
    setOrder:  (value: string) => void,
}
export default function ({search, setSearch, order, setOrder} : IProps)
{


    return(
        <Flex mb="4" width="100%">
            <InputGroup startElement={<LuSearch />} >
                <Input
                    placeholder="Nom, ville ou pays"
                    value={search}
                    onChange={(e) => setSearch(e.target.value )}
                />
            </InputGroup>

            <NativeSelect.Root width="200px" ml="2">
                <NativeSelect.Field
                    placeholder="Trier par"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                >
                    <option value="price_per_night">Prix par nuit ↑</option>
                    <option value="-price_per_night">Prix par nuit ↓</option>
                    <option value="name">Nom ↑</option>
                    <option value="-name">Nom ↓</option>
                    <option value="city">Ville ↑</option>
                    <option value="-city">Ville ↓</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
        </Flex>
    )
}