import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const HeaderMenu = [
        { name: 'Assembly', link: '/capabilities/assembly' },
        { name: 'Design', link: '/capabilities/design' },
        { name: 'Form', link: '/capabilities/form' },
        { name: 'Laser', link: '/capabilities/laser' },
        { name: 'Paint', link: '/capabilities/paint' },
        { name: 'Ship', link: '/capabilities/ship' },
        { name: 'Weld', link: '/capabilities/weld' },
    ];

    return (
        <div className="pt-[5rem] pb-5 w-full flex overflow-x-auto space-x-4 items-center">
            {HeaderMenu.map((item, index) => (
                <button
                    key={`HEADER_KEYS_${index}`}
                    className={`flex justify-center items-center h-full backdrop-blur-md border hover:bg-gray-50 border-gray-300 rounded-full px-6 py-2 transition-all duration-300 transform ${
                        location.pathname.includes(item.link)
                            ? ' shadow-md scale-105'
                            : 'scale-100'
                    }`}
                >
                    <Link to={item.link} className="text-sm font-medium text-white hover:text-black">
                        {item.name}
                    </Link>
                </button>
            ))}
        </div>
    );
};

export default Header;
