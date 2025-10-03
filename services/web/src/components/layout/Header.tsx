import React from "react";
import AppName from "@/components/layout/AppName";
import MenuItem from "@/components/layout/MenuItem";
import {Box, Container, Flex, Spacer} from "@chakra-ui/react"

export default function Header()
{
    return (
        <Box background="white" height="100px">
            <Flex justify="center" height="100%">
                <Container maxW="6xl" height="100%">
                    <Flex height="100%">
                        <AppName/>
                        <Spacer/>
                        <MenuItem label="Mes logements"/>
                        <MenuItem label="Créer un logement"/>
                    </Flex>
                </Container>
            </Flex>
        </Box>
    )
}