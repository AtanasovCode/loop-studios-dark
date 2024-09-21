import Hero from "./sections/Hero";
import Info from "./sections/Info";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-background font-sans text=white overflow-x-hidden">
      <Hero />
      <div className="flex flex-col items-center justify-center w-[90%]">
        <Info />
      </div>
    </div>
  );
}

export default App;