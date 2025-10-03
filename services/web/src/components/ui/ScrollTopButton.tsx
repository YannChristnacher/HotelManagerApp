"use client";
import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { HiArrowUp } from "react-icons/hi";
import useScrollTop from "@/lib/hooks/UseScrollTop";

export default function ScrollTopButton() {
    const [show, setShow] = useState(false);
    const {scrollToTop} = useScrollTop()

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300); // afficher après 300px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    if (!show) return null;

    return (
        <IconButton
            aria-label="Retour en haut"
            position="fixed"
            bottom="4"
            right="4"
            size="lg"
            colorScheme="teal"
            onClick={scrollToTop}
            zIndex={1000}
        >
            <HiArrowUp />
        </IconButton>
    );
}