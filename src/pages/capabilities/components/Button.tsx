const Button = ({ title }:{title:string}) => {
    return (
        <div className=" border  px-1 pe-3 bg-[#1e3a8a] rounded-md flex items-center  gap-2 w-fit">
            <div className="h-3 aspect-square bg-white rounded-full shadow-inner shadow-blue-400" />
            <h1 className="text-white ">
                {title}
            </h1>
        </div>
    )
}
export default Button