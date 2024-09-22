

const PhotoItem = ({
    mobileImage,
    desktopImage,
    title,
}) => {
    return (
        <div className={`flex items-end justify-start relative rounded-md w-full h-[20vh] md:h-[70vh] lg:h-[70vh] bg-cover bg-center p-4 bg-no-repeat ${mobileImage} ${desktopImage}`}>
            <div className="uppercase text-white font-light text-3xl w-[50%] z-50 md:text-2xl md:w-[80%]">
                {title}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-tint z-0"></div>
        </div>
    );
}

export default PhotoItem;