"use client";

import {useState, useEffect, useRef} from "react";
import ClientApi from "@/lib/api/ClientApi";
import {IPaginatedApiResponse} from "@/models/IPaginatedApiResponse";
import {IPreviewHotel} from "@/models/IPreviewHotel";
import {IHotelFilter} from "@/models/IHotelFilter";
import {DefaultHotelFilter} from "@/lib/DefaultHotelFilter";
import {IMetaResponse} from "@/models/IMetaResponse";
import {ILinkResponse} from "@/models/ILinkResponse";

export default function useHotelList() {
    const isInitialMount = useRef(true);

    const [hotels, setHotels] = useState<Array<IPreviewHotel>>([]);
    const [meta, setMeta] = useState<IMetaResponse>()
    const [links, setLinks] = useState<ILinkResponse>()
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("")
    const [error, setError] = useState(null);

    const fetch = async (forceUrl: string|null) => {
        setLoading(true)
        try {
            const response = await ClientApi.hotelEndpoints().all(mapFilters(), forceUrl);
            setHotels(response.data.data);
            setMeta(response.data.meta)
            setLinks(response.data.links)
        } catch (err) {
            setError(err);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    const mapFilters = () =>
    {
       return {
            sort: order,
            "filter[search]": search,
        }

    }
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const delay = setTimeout(() => {
            fetch(null)
        }, 300);

        return () => clearTimeout(delay);
    }, [search]);

    useEffect(() => {
        fetch(null)
    }, [order]);


    return { hotels, loading, error, meta, links, fetch, order, setOrder, search, setSearch};
}