import ClientApi from "@/lib/api/ClientApi";
import {toaster} from "@/components/ui/toaster";

export default function useDeleteHotel()
{
    const deleteHotel = async (id: number): Promise<boolean> => {

        const response = await ClientApi
            .hotelEndpoints()
            .delete(id);

        if(response.data.data)
        {
            toaster.create({
                title: "Opération réussi !",
                description: response.data.message,
                type: "success"
            })
            return true;
        }
        return false;
    }

    return {
        deleteHotel
    }
}