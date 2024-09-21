import Nav from "../components/Nav";
import HeroBox from "../components/HeroBox";

const Hero = () => {
    return (
        <div className="min-h-[89vh] w-full flex flex-col items-center justify-start relative">
            <div className="relative z-50 flex flex-col items-start justify-start w-[90%] lg:w-[75%]">
                <Nav />
                <HeroBox />
            </div>
            <div className="hidden lg:absolute top-0 left-0 w-[100vw] h-[89vh] bg-tint z-20 lg:flex items-center justify-center">
                {/* div used for applying tint to hero image */}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-hero-mobile bg-center bg-cover z-0 bg-no-repeat md:bg-hero-desktop">
                {/* div used for applying hero background image */}
            </div>
        </div>
    );
}

export default Hero;