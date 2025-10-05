import {IHotel} from "@/models/IHotel";
import {Badge, Box, FileUpload, Flex, For, Icon, IconButton, Image, Separator, Stack} from "@chakra-ui/react";
import React from "react";
import {IPicture} from "@/models/IPicture";
import {LuChevronDown, LuChevronUp, LuTrash2, LuUpload} from "react-icons/lu";
import {FileAcceptDetails, FileValidateDetails} from "@zag-js/file-upload";
import ConfirmBox from "@/components/ui/ConfirmBox";
import useGalleryForm from "@/lib/hooks/UseGalleryForm";

interface IProps {
    hotel: IHotel,
    setHotel: (hotel:IHotel) => void
}

export default function HotelGalleryForm({hotel, setHotel}: IProps)
{
    const { handlePosition, handleFileUpload, handleDelete, isLoading, handleFileReject, handleValidateFile } = useGalleryForm(hotel, setHotel)

    return (
        <Stack w={"100%"}>
            <Flex w={"100%"} justifyContent={"center"} mb={4}>
                <FileUpload.Root
                    disabled={isLoading}
                    w={"60%"}
                    ml={4}
                    alignItems="stretch"
                    onFileAccept = {(detail: FileAcceptDetails) => handleFileUpload(detail)}
                    onFileReject = { (details) => handleFileReject(details)}
                    validate={ (file: File, details: FileValidateDetails) => handleValidateFile(file, details)}
                    maxFiles={50}
                >
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone>
                        <Icon size="md" color="fg.muted">
                            <LuUpload />
                        </Icon>
                        <FileUpload.DropzoneContent>
                            <Box>Drag and drop files here</Box>
                            <Box color="fg.muted">.png, .jpg up to 5MB</Box>
                        </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                </FileUpload.Root>
            </Flex>
            <Box >
                <For<IPicture> each={hotel.pictures}>
                    {(item, index) => (
                        <Box mb={4} key={item.id}>
                            <Flex>
                                <Flex w={"100%"} justifyContent={"center"}>
                                    <Image src={item.public_url} width={"200px"}/>
                                </Flex>

                                <Flex alignItems={"center"} ml={"auto"}>
                                    <Stack >
                                        <IconButton disabled={index == 0 || isLoading} size={"xs"} onClick={(e) => handlePosition(index, -1)}>
                                            <LuChevronUp/>
                                        </IconButton>
                                        <IconButton disabled={index == hotel.pictures.length -1 || isLoading} size={"xs"} onClick={(e) => handlePosition(index, 1)}>
                                            <LuChevronDown/>
                                        </IconButton>
                                    </Stack>
                                </Flex>

                            </Flex>
                            <Flex>
                                <Badge mt={1} variant={"solid"}>{item.position } / {hotel.pictures.length}</Badge>
                                <ConfirmBox
                                    message={"Etes-vous sur de vouloir supprimer la photo ?"}
                                    onYes={ async () =>  await handleDelete(item.id)}>
                                    <IconButton disabled={isLoading} colorPalette="red" variant="ghost" size={"xs"} ml={"auto"}>
                                        <LuTrash2/>
                                    </IconButton>
                                </ConfirmBox>
                            </Flex>
                            <Separator mt={4}/>
                        </Box> as React.ReactNode

                    )}
                </For>
            </Box>


        </Stack>

    )
}