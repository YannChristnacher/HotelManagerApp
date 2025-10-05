import {IHotel} from "@/models/IHotel";
import {PhotoProvider, PhotoView} from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import {Flex, For, Grid, Image, Text} from "@chakra-ui/react";
import {IPicture} from "@/models/IPicture";
import React from "react";
interface IProps
{
    hotel: IHotel
}

export default function HotelGallery({hotel}: IProps)
{
    return (
        <PhotoProvider>
            <Grid templateColumns="repeat(3, 1fr)" gap="6">
                <For<IPicture>
                    each={hotel.pictures}
                >
                    {(item, index) => (
                        <PhotoView src={item.filepath} key={item.id}>
                            <Image height={"200px"} src={item.public_url}/>
                        </PhotoView> as React.ReactNode
                    )}
                </For>

            </Grid>
            {hotel.pictures.length == 0 ? <Flex mt={4} w={"100%"} justifyContent={"center"}><Text>Pas de photo enregistré</Text></Flex>: null}
        </PhotoProvider>
    );
}