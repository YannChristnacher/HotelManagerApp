import {Box, Flex, Skeleton, Text} from "@chakra-ui/react";
import React from "react";

export default function HotelInformationSkeleton()
{
    return (
        <Flex width={"100%"}>
            <Box width={"50%"}>
                <Skeleton height="200px" />
            </Box>
            <Box width={"50%"} pl={4}>
                <Skeleton height="200px" />
            </Box>

        </Flex>
    )
}