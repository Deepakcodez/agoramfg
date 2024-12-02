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

}
const Capablitycontent: React.FC<CapabilitylayoutProps> = ({
    buttonText,
    image,
    cont1,
    cont2,
    cont3,
    cont4,
}) => {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-6">
                <div className="h-[70%] aspect-square rounded-lg relative overflow-hidden group">
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
            <div className="col-span-6">
                <Button title={buttonText} />
                <div className="my-8 flex flex-col gap-2">
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

                        <h1> {cont4}</h1>
                    }
                </div>
            </div>
        </div>
    )
}
export default Capablitycontent