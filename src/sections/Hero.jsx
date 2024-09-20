import Nav from "../components/Nav";
import HeroBox from "../components/HeroBox";

const Hero = () => {
    return (
        <div className="min-h-[90vh] w-full flex flex-col items-center justify-start relative">
            <div className="relative z-50 w-full flex flex-col items-start justify-start w-[80%]">
                <Nav />
                <HeroBox />
            </div>
            <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-tint z-20 flex items-center justify-center">
                {/* div used for applying tint to hero image */}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-hero-mobile bg-center bg-cover z-0 bg-no-repeat md:bg-hero-desktop">
                {/* div used for applying hero background image */}
            </div>
        </div>
    );
}

export default Hero;