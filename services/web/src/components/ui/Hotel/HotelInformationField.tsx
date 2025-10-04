import {Text} from "@chakra-ui/react";
import React from "react";

interface IProps {
    label: string,
    children: React.ReactNode
}
export default function HotelInformationField({label, children}: IProps)
{
    return (
        <div>
            <Text mt={4} textStyle="sm" color="gray.500">{ label }</Text>
            {children}
        </div>
    )
}