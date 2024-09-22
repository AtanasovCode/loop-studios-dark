

const PhotoItem = ({
    mobileImage,
    desktopImage,
    title,
}) => {
    return (
        <div className={`
            flex items-end justify-start relative rounded-md w-full text-white
            h-[20vh] md:h-[30vh] lg:h-[70vh] bg-cover bg-center p-4 bg-no-repeat
            lg:hover:cursor-pointer lg:hover:text-black
            ${mobileImage} ${desktopImage}
        `}>
            <div className="uppercase font-light text-3xl w-[50%] z-50 md:text-2xl md:w-[80%] lg:text-4xl">
                {title}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-tint-light z-0 hidden md:flex lg:hover:bg-hover-white lg:transition-all lg:duration-500"></div>
        </div>
    );
}

export default PhotoItem;