import { useRef } from "react";
import { PaddingWrapper } from "@/components";
import TestinomialCard from "./TestinomialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testinomial = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
    };

    return (
        <PaddingWrapper>
            <div className="h-auto py-16">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold">What Our Clients Say About Us</h1>
                    <div className="w-16 sm:w-20 mx-auto mt-2 border-b-4 border-A-blue" />
                </div>

                {/* Testimonial Cards */}
                <div
                    className="mt-8 flex flex-col md:flex-row gap-6 md:gap-12 overflow-x-auto md:overflow-x-scroll hide-scrollbar"
                    ref={scrollRef}
                >
                    {[...Array(11)].map((_, index) => (
                        <TestinomialCard key={index} />
                    ))}
                </div>

                {/* Scroll Buttons */}
                <div className="hidden md:flex justify-end items-center gap-2 mt-4">
                    <button
                        onClick={scrollLeft}
                        className="hover:bg-A-blue/10 rounded-full p-2 shadow-md"
                    >
                        <ChevronLeft color="#053990" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="hover:bg-A-blue/10 rounded-full p-2 shadow-md"
                    >
                        <ChevronRight color="#053990" />
                    </button>
                </div>
            </div>
        </PaddingWrapper>
    );
};

export default Testinomial;
