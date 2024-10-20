import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

// Container for the maps and content
const MapsContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "20px", // spacing between the maps
  flexWrap: "wrap", // ensures responsiveness by wrapping on smaller screens
  marginTop: 20,
});

// Wrapper for each map and content
const MapItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "500px",  // Adjusted width for smaller maps
  height: "400px",  // Adjusted height for smaller maps
  "@media (max-width: 1200px)": { // Adjust width on smaller screens
    width: "100%",
    height: "350px",
  },
});

// Styled iframe map
const Maps = styled("iframe", {
  border: 0,
  referrerpolicy: "no-referrer-when-downgrade",
  width: "100%",  // Fill the parent div
  height: "100%",  // Fill the parent div
  loading: "lazy",
  allowfullscreen: "",
});

// Content to display above each map
const MapContent = styled("p", {
  fontSize: "1.8vh",
  marginBottom: "10px",
});

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>CHỈ ĐƯỜNG</Title>
      </Divider>
      <MapsContainer>
        {/* Map 1 */}
        <MapItem>
          <MapContent>Nhà trai: Thôn Phú Thứ, Thượng Trưng, Vĩnh Tường, Vĩnh Phúc</MapContent>
          <Maps src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1563.6750838136004!2d105.49217887141727!3d21.22918880609784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzQ0LjkiTiAxMDXCsDI5JzMyLjciRQ!5e0!3m2!1svi!2s!4v1728835959380!5m2!1svi!2s" />
        </MapItem>
        
        {/* Map 2 */}
        <MapItem>
          <MapContent>Nhà gái: Thôn Quảng Phúc, Yên Bài, Ba Vì, Hà Nội</MapContent>
          <Maps src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991349207!2d-74.25987568708508!3d40.69767006856001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5e62b34bd%3A0xf186eb33bb36c129!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1728835959380!5m2!1sen!2s" />
        </MapItem>
      </MapsContainer>
    </Wrapper>
  );
}
