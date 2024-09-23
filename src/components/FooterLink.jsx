

const FooterLink = ({ text }) => {

    const hoverState = `
    hover:before:content-[''] 
    hover:before:absolute hover:before:-bottom-2 hover:before:left-[50%] hover:before:-translate-x-[50%]
    hover:before:w-[70%] hover:before:h-[.1rem] hover:before:bg-white before:transition-all hover:duration-400
`;

    return (
        <div className={`my-2 text-white text-center md:my-0 md:mx-2 lg:relative ${hoverState} hover:cursor-pointer`}>
            {text}
        </div>
    );
}

export default FooterLink