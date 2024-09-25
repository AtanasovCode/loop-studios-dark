import Hero from "./sections/Hero";
import Info from "./sections/Info";
import PhotoGrid from "./sections/PhotoGrid";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-background text-text font-sans text=white overflow-x-hidden flex flex-col items-center justify-center">
      <Hero />
      <div className="flex flex-col items-center justify-center w-[90%] xs:w-[70%] sm:w-[60%] md:w-[55%] lg:w-[90%] xl:w-[73%]">
        <Info />
        <PhotoGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;