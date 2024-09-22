import Hero from "./sections/Hero";
import Info from "./sections/Info";
import PhotoGrid from "./sections/PhotoGrid";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-background font-sans text=white overflow-x-hidden flex flex-col items-center justify-center">
      <Hero />
      <div className="flex flex-col items-center justify-center w-[90%] xs:w-[70%] sm:w-[60%] md:w-[55%] lg:w-[90%] xl:w-[80%]">
        <Info />
        <PhotoGrid />
      </div>
    </div>
  );
}

export default App;