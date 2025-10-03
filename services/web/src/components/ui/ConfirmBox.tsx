import React, {useState} from "react";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

interface IProps
{
    message: string,
    title?: string,
    onYes: () => boolean|Promise<boolean>,
    children: React.ReactNode;
}

export default function ConfirmBox({message, title = "Confirmer l'opération", onYes, children}: IProps)
{
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const handleConfirm = async () =>
    {
        setIsLoading(true)
        const result = await onYes();
        console.log(result)
        if (result) setIsOpen(false);
        setIsLoading(false)
    }
    return (
        <Dialog.Root role="alertdialog" open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{ title }</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                { message }
                            </p>
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