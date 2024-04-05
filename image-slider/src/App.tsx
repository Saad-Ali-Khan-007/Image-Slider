import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpeg";
import car3 from "./assets/car3.jpeg";
import car4 from "./assets/car4.jpeg";
import { ImageSlider } from "./ImageSlider";
const IMAGES = [car1, car2, car3, car4];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10/6",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  );
}

export default App;
