import { Box, Grid, Separator, Text} from "@chakra-ui/react"
import React from "react";
import PreviewHotelCard from "@/components/ui/PreviewHotelCard/PreviewHotelCard";

export default function Home() {
  return (
      <div>
          <Box mb="14">
              <Text textStyle="3xl">Liste des hébergements</Text>
              <Text color="gray.500" fontWeight="light"  textStyle="md">Vous trouverez sur cette cette page l'ensemble des établissements enregistrés.</Text>
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap="6">
              <PreviewHotelCard/>
              <PreviewHotelCard/>
              <PreviewHotelCard/>
          </Grid>
      </div>

  );
}
