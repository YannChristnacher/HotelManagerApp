import {Box, Button, Center, Text} from "@chakra-ui/react";
import React from "react";
import {LuChevronRight} from "react-icons/lu";
import Link from "next/link";
export default function notFound()
{
    return(
        <Box mb="14" background="white" borderRadius="md" px="4" py="8">
            <Center>
                <Text textStyle="3xl">Oups, la page demandé n'existe pas</Text>
            </Center>

            <Center>
                <Button mt={4}>
                    <Link href="/hotels">Retourner à l'accueil</Link>
                     <LuChevronRight/>
                </Button>
            </Center>

        </Box>
    )
}