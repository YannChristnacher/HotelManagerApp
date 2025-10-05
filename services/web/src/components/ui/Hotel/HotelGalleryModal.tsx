import React, {useState} from "react";
import {Button, CloseButton, Dialog, Portal} from "@chakra-ui/react";
import HotelGalleryForm from "@/components/ui/Hotel/HotelGalleryForm";
import {IHotel} from "@/models/IHotel";

interface IProps {
    children: React.ReactNode,
    hotel: IHotel,
    setHotel: (hotel:IHotel) => void
}
export default function HotelGalleryModal({children, hotel, setHotel}: IProps)
{
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    return (
        <Dialog.Root size="lg" open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} scrollBehavior="inside">
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Modification des photos</Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body>
                            <HotelGalleryForm
                                hotel={hotel}
                                setHotel={setHotel}
                            />
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}