import React from "react"
import Button from "./Button";


interface CapabilitylayoutProps {
    image: string;
    buttonText: string;
    cont1: string;
    cont2?: string;
    cont3?: string;
    cont4?: string;
    cont5?: string;
    cont6?: string;
    cont4style?:string;

}
const Capablitycontent: React.FC<CapabilitylayoutProps> = ({
    buttonText,
    image,
    cont1,
    cont2,
    cont3,
    cont4,
    cont4style
}) => {
    return (
        <div className="grid grid-cols-12  py-14 ">
            <div className="md:col-span-6 col-span-12">
                <div className="md:h-[30vw] h-[70vw] mx-auto md:mx-0 aspect-square rounded-lg relative overflow-hidden group">
                    <div
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

            </div>
            <div className="md:col-span-6 col-span-12 pt-12 md:pt-0">
                <Button title={buttonText} />
                <div className="my-8 flex flex-col gap-1 font-normal text-sm md:text-base ">
                    {
                        cont1 &&
                        <h1>{cont1}</h1>
                    }
                    {
                        cont2 &&
                        <h1>{cont2}</h1>
                    }
                    {
                        cont3 &&
                        <h1>{cont3}</h1>
                    }
                    {
                        cont4 &&

                        <h1 className={cont4style}> {cont4}</h1>
                    }
                </div>
            </div>
        </div>
    )
}
export default Capablitycontent