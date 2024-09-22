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
        <div className="w-full flex flex-col items-center justify-center text-white my-20">
            <div className="w-full text-left font-light text-[2.5rem] mb-16 uppercase md:text-center">
                Our Creations
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:w-[75%] lg:w-[80%] gap-8">
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