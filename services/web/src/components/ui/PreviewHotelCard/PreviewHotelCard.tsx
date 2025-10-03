"use client"

import styles from "@/css/previesHotelCard.module.css";
import {Box, Grid, GridItem, Image, Text} from "@chakra-ui/react";

export default function PreviewHotelCard()
{
    const onShowDetail = () => {
        alert('dsfdf');
    }
    return (
        <Box rounded="md" shadow="5px 5px 15px 5px rgba(0,0,0,0.06)"  width="100%" >

            <Image
                width="100%"
                height="200px"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Grid templateColumns="repeat(3, 1fr)" gap="6">
                <GridItem colSpan={2}>
                    <Box padding="4">
                        <Text textStyle="2xl">Le palace</Text>
                        <Text fontWeight="light" textStyle="sm">36 rue de la plage</Text>
                        <Text fontWeight="light" textStyle="sm">Cedex 5</Text>
                        <Text fontWeight="light" textStyle="sm">Sait-Bernards</Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <div className={styles.previewHotelCardButton} onClick={onShowDetail}>
                        <Text fontWeight="light" textStyle="sm">Voir le détail du logement</Text>
                    </div>
                </GridItem>
            </Grid>
        </Box>

    )
}