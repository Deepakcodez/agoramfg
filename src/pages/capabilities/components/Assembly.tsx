import Button from "./Button"

const Assembly = () => {
    return (
        <div className="grid grid-cols-12 ">
            <div className="col-span-6">
                <div className="h-[70%] aspect-square rounded-lg relative overflow-hidden group">
                    <div
                        style={{
                            backgroundImage: "url('https://image.pollinations.ai/prompt/cat%20in%20bathroom')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

            </div>
            <div className="col-span-6">
                <Button title='Assembly'/>
                <h1>
                    We, at Agora, maintain the highest quality assembly.

                    You can expect all of our enclosures to come fully assembled and ready to go.

                    We do all of the assembly necessary of non-electrical items to minimize work for you!

                    We work with the customer to facilitate final assembly. We manufacture (or if required source) and install items including folding shelves, door closures, "U" plates and ground bars.
                </h1>
            </div>
        </div>
    )
}
export default Assembly