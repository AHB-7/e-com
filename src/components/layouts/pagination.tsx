import React from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import {
    PaginationButtons,
    PaginationContainer,
} from "../../styles/products/pagination";


const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    onNext,
    onPrevious,
    isLastPage,
}) => {
    return (
        <PaginationContainer>
            <PaginationButtons
                onClick={onPrevious}
                disabled={currentPage === 1}
                style={
                    currentPage === 1 ? { opacity: 0.5, cursor: "auto" } : {}
                }
                aria-disabled={currentPage === 1}
                aria-label="Previous Page"
            >
                <CiCircleChevLeft />
            </PaginationButtons>
            <span>Page {currentPage}</span>
            <PaginationButtons
                onClick={onNext}
                disabled={isLastPage}
                style={isLastPage ? { opacity: 0.5, cursor: "auto" } : {}}
                aria-disabled={isLastPage}
                aria-label="Next Page"
            >
                <CiCircleChevRight />
            </PaginationButtons>
        </PaginationContainer>
    );
};

export default Pagination;
