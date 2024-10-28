import { useRef } from "react";
import { PaddingWrapper } from "@/components";
import TestinomialCard from "./TestinomialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testinomial = () => {
    // Reference for the testimonial cards container
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to scroll left by 500px
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -500,  // Adjust the scroll amount as needed
                behavior: "smooth"
            });
        }
    };

    // Function to scroll right by 500px
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 500,  // Adjust the scroll amount as needed
                behavior: "smooth"
            });
        }
    };

    return (
        <PaddingWrapper>
            <div className="h-auto py-24">
                {/* Heading start */}
                <div className="flex flex-col items-center justify-center gap-1">
                    <h1 className="text-center text-2xl font-semibold">
                        What Our Clients Say About Us
                    </h1>
                    <div className="w-24 border-b-4 border-A-blue " />
                </div>
                {/* Heading end */}

                {/* Testimonial cards */}
                <div
                    className="mt-12 py-8 flex gap-12 overflow-x-scroll hide-scrollbar "
                    ref={scrollRef}
                >
                    {[...Array(11)].map((_, index) => (
                        <TestinomialCard key={index} />
                    ))}
                </div>
                {/* Testimonial cards end */}

                {/* Scroll buttons */}
                <div className="flex justify-end items-center gap-2">
                    <button
                        onClick={scrollLeft}
                        className="hover:bg-A-blue/10 rounded-full p-1 shadow-md"
                    >
                        <ChevronLeft color="#053990" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="hover:bg-A-blue/10 rounded-full p-1 shadow-md"
                    >
                        <ChevronRight color="#053990" />
                    </button>
                </div>
                {/* Scroll buttons end */}
            </div>
        </PaddingWrapper>
    );
};

export default Testinomial;
