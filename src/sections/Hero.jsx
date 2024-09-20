import Nav from "../components/Nav";

const Hero = () => {
    return (
        <div className="min-h-[100vh] w-full flex flex-col items-center justify-start overflow-x-hidden">
            <Nav />
            <div className="absolute top-0 left-0 w-full h-full bg-hero-mobile bg-center bg-contain z-0"></div>
        </div>
    );
}

export default Hero;