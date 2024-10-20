import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

// Full-screen container for the gallery
const FullScreenGallery = styled("div", {
  width: "100vw",  // Full viewport width
  maxWidth: "100%",  // Ensure it doesn't exceed the screen
  margin: "0 auto",  // Center the gallery
});

const images = [
  {
    original: "./assets/SML03155.jpg",
    thumbnail: "./assets/SML03155.jpg",
  },
  {
    original: "./assets/SML02966.jpg",
    thumbnail: "./assets/SML02966.jpg",
  },
  {
    original: "./assets/SML03198.jpg",
    thumbnail: "./assets/SML03198.jpg",
  },
  {
    original: "./assets/SML03286.jpg",
    thumbnail: "./assets/SML03286.jpg",
  },
  {
    original: "./assets/SML03462.jpg",
    thumbnail: "./assets/SML03462.jpg",
  },
  {
    original: "./assets/SML03506.jpg",
    thumbnail: "./assets/SML03506.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>NHỮNG KHOẢNG KHẮC ĐẸP CỦA CHÚNG TÔI</Title>
      </Divider>
      <FullScreenGallery>
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}         // Hide navigation arrows
          autoPlay={true}         // Enable automatic slide transition
          slideInterval={3000}    // Adjust transition interval in milliseconds (e.g., 3000 = 3 seconds)
          items={images}
        />
      </FullScreenGallery>
    </Wrapper>
  );
}
