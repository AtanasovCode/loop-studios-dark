
const Info = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-28 text-black lg:flex-row lg:items-stretch">
            <div className="bg-vr-mobile bg-cover bg-center bg-no-repeat w-[100%] mb-8 rounded-md aspect-square lg:flex-1 lg:mb-0 lg:w-auto lg:bg-vr-desktop">
                {/* Image */}
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-1 lg:bg-background lg:justify-start lg:p-24 lg:translate-y-[35%] lg:rounded-md lg:-translate-x-[8%]">
                <div className="text-[2.5rem] leading-[44px] font-light uppercase mb-4 text-center lg:text-6xl">
                    The leader in interactive VR
                </div>
                <div className="text-center">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </div>
            </div>
        </div>
    );
}

export default Info;