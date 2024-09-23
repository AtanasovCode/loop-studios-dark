

const NavLink = ({
    text,
}) => {

   const hoverState = `
        hover:before:content-[''] 
        hover:before:absolute hover:before:-bottom-4 hover:before:left-[50%] hover:before:-translate-x-[50%]
        hover:before:w-[70%] hover:before:h-[.1rem] hover:before:bg-white before:transition-all hover:duration-400
    `;

    return (
        <div className={`
            text-white uppercase cursor-pointer mb-6 text-xl text-left relative
            md:mb-0 md:text-center md:text-sm md:capitalize md:mx-4 ${hoverState}
        `}>
            {text}
        </div>
    );
}

export default NavLink;