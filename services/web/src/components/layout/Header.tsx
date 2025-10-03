import React from "react";
import styles from "@/css/layout.module.scss"
import AppName from "@/components/layout/AppName";
import MenuItem from "@/components/layout/MenuItem";
import { Container, Flex, Spacer } from "@chakra-ui/react"

export default function Header()
{
    return (
        <div className={styles.header}>
            <Flex justify="center" className="h-100">
                <Container maxW="6xl" className="h-100">
                    <Flex className="h-100">
                        <AppName/>
                        <Spacer/>
                        <MenuItem label="Mes logements"/>
                        <MenuItem label="Créer un logement"/>
                    </Flex>
                </Container>
            </Flex>

        </div>
    )
}