import React, {useEffect, useRef, useState} from "react";
import {Button, CloseButton, Dialog, Portal} from "@chakra-ui/react";
import HotelInformationForm from "@/components/ui/Hotel/HotelInformationForm";
import {FormProvider, useForm} from "react-hook-form";
import {IFormHotel} from "@/models/IFormHotel";
import useHotelForm from "@/lib/hooks/UseHotelForm";
import {IHotel} from "@/models/IHotel";

interface IProps
{
    children: React.ReactNode,
    hotel: IHotel,
    setHotel: (hotel: IHotel) => void,

}

export default function HotelEditModal({children, hotel, setHotel}: IProps)
{
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const {values, setValues, sendEdit, errors, mapFormToHotel, mapHotelToForm} = useHotelForm(hotel)

    useEffect(() => {
        if(isOpen)
        {
            mapHotelToForm(hotel)
        }
    }, [isOpen]);
    const handleConfirm = async () =>
    {
        setIsLoading(true)
        const response = await sendEdit()
        if(response) {
            setHotel(mapFormToHotel())
            setIsOpen(false)

        }

        setIsLoading(false)
    }

    return (
        <Dialog.Root size="lg" open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Modification des informations</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <HotelInformationForm
                                values={values}
                                setValues={setValues}
                                errors={errors}
                            />
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Annuler</Button>
                            </Dialog.ActionTrigger>
                            <Button colorPalette="red" loading={isLoading} onClick={handleConfirm}>Valider</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}