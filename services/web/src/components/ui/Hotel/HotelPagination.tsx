
import {
    ButtonGroup,
    IconButton,
    Text
} from "@chakra-ui/react";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";
import useScrollTop from "@/lib/hooks/UseScrollTop";
const {scrollToTop} = useScrollTop()

interface IProps {
    prev: string|null,
    next: string|null,
    currentPage: number,
    total: number,
    fetchPage: (link: string) => void
}
export default function HotelPagination({prev, next, currentPage, total, fetchPage}: IProps) {

    const {scrollToTop} = useScrollTop()

    return (
        <ButtonGroup size="xs">
            <IconButton variant="ghost"
                onClick={() => {
                    if(prev) {
                        fetchPage(prev)
                        scrollToTop()
                    }
                }}
                isDisabled={!prev}
            >
                <HiChevronLeft />
            </IconButton>
            <Text textStyle="xs">{currentPage} / {total}</Text>
            <IconButton variant="ghost"
                onClick={() => {
                    if(next) {
                        fetchPage(next)
                        scrollToTop()
                    }
                }}
                isDisabled={!next}
            >
                <HiChevronRight />
            </IconButton>
        </ButtonGroup>
    )
}