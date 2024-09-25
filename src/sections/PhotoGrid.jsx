import PhotoItem from "../components/PhotoItem";

const photos = [
    {
        mobile: 'bg-deep-earth-mobile',
        desktop: 'md:bg-deep-earth-desktop',
        title: 'Deep Earth',
    },
    {
        mobile: 'bg-night-arcade-mobile',
        desktop: 'md:bg-night-arcade-desktop',
        title: 'Night Arcade',
    },
    {
        mobile: 'bg-soccer-team-mobile',
        desktop: 'md:bg-soccer-team-desktop',
        title: 'Soccer Team VR',
    },
    {
        mobile: 'bg-the-grid-mobile',
        desktop: 'md:bg-the-grid-desktop',
        title: 'The Grid',
    },
    {
        mobile: 'bg-from-above-mobile',
        desktop: 'md:bg-from-above-desktop',
        title: 'From Above',
    },
    {
        mobile: 'bg-pocket-mobile',
        desktop: 'md:bg-pocket-desktop',
        title: 'Pocket Borealis',
    },
    {
        mobile: 'bg-curiosity-mobile',
        desktop: 'md:bg-curiosity-desktop',
        title: 'The Curiosity',
    },
    {
        mobile: 'bg-fisheye-mobile',
        desktop: 'md:bg-fisheye-desktop',
        title: 'Make it fisheye',
    }
];


const PhotoGrid = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-text mt-24 lg:mt-48 relative mb-10 lg:mb-0">
            <div className="flex items-center justify-between w-full mb-20">
                <div className="w-full text-left font-light text-[2.5rem] uppercase md:text-center lg:text-left lg:text-5xl">
                    Our Creations
                </div>
                <div className="absolute -bottom-[5%] left-[50%] -translate-x-[50%] flex items-center justify-center lg:relative lg:translate-x-0 lg:left-auto">
                    <input 
                        type="button"
                        value="See All"
                        className="px-8 py-2 text-center border-2 border-solid border-black tracking-[.2rem] bg-transparent text-md uppercase font-semibold"
                    />
                </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg:w-[100%] gap-8">
                {photos.map((photo, index) => (
                    <PhotoItem
                        key={index}
                        mobileImage={photo.mobile}
                        desktopImage={photo.desktop}
                        title={photo.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotoGrid;