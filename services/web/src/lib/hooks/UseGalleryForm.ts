import {FileUpload} from "@chakra-ui/react";
import {FileAcceptDetails, FileError, FileRejectDetails, FileValidateDetails} from "@zag-js/file-upload";
import React, {useState} from "react";
import {toaster} from "@/components/ui/toaster";
import ClientApi from "@/lib/api/ClientApi";
import {IHotel} from "@/models/IHotel";

export default function useGalleryForm(hotel: IHotel, setHotel: (hotel:IHotel) => void)
{
    const [isLoading, setIsLoading] = useState(false)

    const handlePosition = async (index:number, direction: 1|-1) => {

        setIsLoading(true)

        const newItems = [...hotel.pictures];
        const targetElement = newItems[index + direction]

        if(targetElement)
        {
            newItems[index].position +=  direction
            newItems[index + direction].position -=  direction
        }
        const updated = newItems.sort((a, b) => a.position - b.position);

        const postData= {
            pictures: [
                {
                    id: newItems[index].id,
                    position: newItems[index].position,
                },
                {
                    id: newItems[index + direction].id,
                    position: newItems[index + direction].position,
                }
            ]
        }

        ClientApi
            .pictureEndpoints()
            .updatePositions(hotel.id, postData)
            .then(res => {
                setHotel({...hotel, pictures:updated});
                setIsLoading(false)
            })
            .catch(() => setIsLoading(false))


    }

    const handleFileUpload = async (detail: FileUpload) => {

        setIsLoading(true)
        if(detail && detail.files[0]){
            const position =  hotel.pictures.length
            const formData = new FormData() as FormData;
            formData.append("picture", detail.files[0]);
            formData.append("position", position.toString());

           ClientApi
               .pictureEndpoints()
               .store(hotel.id, formData)
               .then((res) => {
                   const newItems = [...hotel.pictures];
                   newItems.push(res.data.data)
                   setHotel({...hotel, pictures:newItems});

                   toaster.create({
                       title: "Opération réussi !",
                       description: res.data.message,
                       type: "success"
                   })
                   setIsLoading(false)
               })
               .finally(() => setIsLoading(false))
        }
        setIsLoading(false)

    }

    const handleDelete = async (id: number): void =>
    {
        setIsLoading(true)
        ClientApi
            .pictureEndpoints()
            .delete(hotel.id, id)
            .then(res => {
                toaster.create({
                    title: "Opération réussi !",
                    description: res.data.message,
                    type: "success"
                })

                const items = hotel.pictures
                const filtered = items.filter((i) => i.id !== id)
                setHotel({...hotel, pictures: filtered})

                setIsLoading(false)
            })
            .finally(() => setIsLoading(false))
    }

    const handleFileReject = (details: FileRejectDetails) => {

        toaster.create({
            title: "Oups !",
            description: "Le document uploader n'est pas une image ou elle est trop grosse",
            type: "error"
        })
        console.log(details)
    }

    const handleValidateFile = (file: File, details: FileValidateDetails):FileError[] | null => {
        // Types autorisés
        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

        if (!allowedTypes.includes(file.type)) {
            return ["FILE_INVALID_TYPE"];
        }

        // Taille max : 5 Mo
        const maxSize = 5 * 1024 * 1024; // en octets
        if (file.size > maxSize) {
            return ["FILE_TOO_LARGE"];
        }
        return null;
    }

    return {
        handlePosition,
        handleFileUpload,
        handleDelete,
        handleFileReject,
        handleValidateFile,
        isLoading
    }
}