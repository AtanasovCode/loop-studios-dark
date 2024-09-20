

const NavLink = ({
    text,
}) => {
    return (
        <div className="text-white uppercase cursor-pointer mb-6 text-xl text-left md:mb-0 md:text-center md:text-sm md:capitalize md:mx-4">
            {text}
        </div>
    );
}

export default NavLink;