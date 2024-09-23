
const Info = () => {
    return (
        <div className="
            flex flex-col items-center justify-center mt-32 relative
            lg:w-full lg:flex-row lg:justify-start
        ">
            <div className={`
                w-full h-[40dvh] bg-center bg-no-repeat bg-cover
                bg-vr-mobile md:bg-vr-desktop mb-24 lg:mb-0
                lg:w-[80%] lg:h-auto lg:aspect-[16/9] lg:bg-contain lg:bg-left
            `}>
                {/* Image Container */}
            </div>
            <div className={`
                flex flex-col items-center justify-center mt-10 lg:mt-0
                lg:absolute lg:bg-background lg:w-[60%] lg:top-[40%] lg:-right-[10%]
                lg:p-20 lg:rounded-md
            `}>
                <div className="text-[2.5rem] leading-[44px] font-light uppercase mb-4 text-center lg:text-4xl xl:text-6xl">
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