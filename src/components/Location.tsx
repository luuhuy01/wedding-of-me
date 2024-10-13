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

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

const Maps = styled("iframe", {
  styple: "border: 0",
  referrerpolicy: "no-referrer-when-downgrade",
  width: "600",
  height: "450",
  loading: "lazy",
  allowfullscreen: ""
})

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>CHỈ ĐƯỜNG</Title>
      </Divider>
      {/* <Image src="./assets/LocationMap.png" /> */}
      <Maps src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1563.6750838136004!2d105.49217887141727!3d21.22918880609784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzQ0LjkiTiAxMDXCsDI5JzMyLjciRQ!5e0!3m2!1svi!2s!4v1728835959380!5m2!1svi!2s" />
    </Wrapper>
  );
}
