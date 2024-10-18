import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Sidenavbar from "./components/Sidenavbar/Sidenavbar";
import CarouselBox from "./components/CarouselBox/CarouselBox";
import Chat from "./components/Chat/Chat";

export default function App() {
  return (
    <div className="App">
      <div className="headerBox">
        <Navbar />
      </div>

      <div className="sidenavCarousel">
        <div>
          <Sidenavbar />
        </div>
        <div>
          <CarouselBox />
        </div>
      </div>

      <div>
        <Chat />
      </div>
    </div>
  );
}
