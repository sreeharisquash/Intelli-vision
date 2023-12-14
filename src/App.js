import { useEffect, useState } from "react";
import "./App.css";
import Router from "./routes/Router";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

    return (
      <div className="app-container">
        <Router />
        {backToTopButton && (
          <button
            className="goto-top"
            style={{
              position: "fixed",
              zIndex: "500",
              bottom: "50px",
              right: "50px",
              fontSize: "40px",
            }}
            onClick={scrollUp}
          >
            ^
          </button>
        )}
      </div>
    );
  }

  return <BackToTopButton />;
}

export default App;
