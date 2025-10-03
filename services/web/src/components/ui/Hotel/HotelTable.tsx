import {IPreviewHotel} from "@/models/IPreviewHotel";
import {Table, ButtonGroup, IconButton, Flex, InputGroup, Input, NativeSelect, Image} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import {LuTrash2, LuChevronRight, LuSearch} from "react-icons/lu";
import HotelPagination from "@/components/ui/Hotel/HotelPagination";
import {ILinkResponse} from "@/models/ILinkResponse";
import {IMetaResponse} from "@/models/IMetaResponse";
import React, {useState} from "react";
import {IHotelFilter} from "@/models/IHotelFilter";
import {DefaultHotelFilter} from "@/lib/DefaultHotelFilter";
import HotelFilters from "@/components/ui/Hotel/HotelFilters";
import ConfirmBox from "@/components/ui/ConfirmBox";
import useDeleteHotel from "@/lib/hooks/UseDeleteHotel";

interface IProps {
    hotels: Array<IPreviewHotel>,
    links: ILinkResponse|null,
    meta: IMetaResponse|null,
    fetch: (link: string) => void,
    filters: IHotelFilter,
    setFilters:  (value: IHotelFilter) => void,
}
export default function HotelTable({hotels, links, meta, fetch}: IProps)
{
    const {deleteHotel} = useDeleteHotel()

    return (
        <div>


            <Table.Root size="sm">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Miniature</Table.ColumnHeader>
                        <Table.ColumnHeader>Nom</Table.ColumnHeader>
                        <Table.ColumnHeader>Description</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Capacité max</Table.ColumnHeader>
                        <Table.ColumnHeader >Actions</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {hotels.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell>
                                <Image height="150px" src={item.picture.filepath}/>
                            </Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell >{item.short_description}</Table.Cell>
                            <Table.Cell textAlign="end">{item.max_capacity}</Table.Cell>
                            <Table.Cell textAlign="end">
                                <ButtonGroup size="sm">

                                    <Tooltip content="Supprimer le logement">
                                        <ConfirmBox
                                            message={"Etes-vous sur de vouloir supprimer l'établisement " + item.name + " ?"}
                                            onYes={ async () =>  await deleteHotel(item.id)}>
                                                <IconButton colorPalette="red" variant="ghost">
                                                    <LuTrash2/>
                                                </IconButton>
                                        </ConfirmBox>
                                    </Tooltip>

                                    <Tooltip content="Voir le détail">
                                        <IconButton>
                                            <LuChevronRight />
                                        </IconButton>
                                    </Tooltip>
                                </ButtonGroup>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            <Flex justifyContent="end" mt="4">
                <HotelPagination
                    prev={links?.prev ?? null}
                    next={links?.next ?? null}
                    currentPage={meta?.current_page ?? 1}
                    total={meta?.last_page ?? 1}
                    fetchPage={(link) => fetch(link)}
                />
            </Flex>
        </div>

        )

}