import { animate, onScroll } from "animejs";
import reactLogo from "./assets/react.svg";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    animate(".logo", {
      x: "15rem",
      rotate: "1turn",
      autoplay: onScroll({
        container: ".scroll-container",
        sync: "play reverse",
        debug: true,
      }),
    });
  }, []);

  return (
    <div className="w-screen h-fit container flex flex-col">
      <div className="h-[120vh] w-full" />
      <img src={reactLogo} className="logo size-20" alt="React logo" />
      <div className="h-[30vh] w-full" />
    </div>
  );
}

export default App;
