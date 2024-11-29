import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    const HeaderMenu = [
        {
            name: 'Assmebly',
            link: '/capabilities/assembly'
        },
        {
            name: 'Design',
            link: '/capabilities/design'
        },
        {
            name: 'Form',
            link: '/capabilities/form'
        },
        {
            name: 'Laser',
            link: '/capabilities/laser'
        },
        {
            name: 'Paint',
            link: '/capabilities/paint'
        },
        {
            name: 'Ship',
            link: '/capabilities/ship'
        },
        {
            name: 'Weld',
            link: '/capabilities/weld'
        },
    ]
    return (
        <div className=" pt-[5rem] pb-5 w-full flex gap-3 items-center  overflow-x-scroll ">
            {
                HeaderMenu.map((item, index) => {
                    return (
                        <div key={`HEADER_KEYS_${index}`}
                            className={`flex justify-center items-center h-full border hover:bg-gray-50 border-gray-300 rounded-full  px-3 py-1 ${location.pathname.includes(item.link)? 'bg-gray-100 shadow-lg' : ''}`}  >
                            <Link to={item.link} className='text-sm'>{item.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Header