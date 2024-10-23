import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="D:\13.change_data\4.project\1.invent\wedding-of-me\public\assets\GroovePaper.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="Quang Huy❤Tuyết Nhung Wedding" name="Title" />
        <meta
          content="10 giờ 00 phút, ngày mùng 10 tháng 11 năm 2024"
          name="Description"
        />
        <meta content="10 giờ 00 phút, ngày mùng 10 tháng 11 năm 2024" name="Keyword" />
        <meta property="og:title" content="Quang Huy❤Tuyết Nhung Wedding" />
        <meta
          property="og:description"
          content="10 giờ 00 phút, ngày mùng 10 tháng 11 năm 2024"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>Quang Huy❤Tuyết Nhung Wedding</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Gallery />
        <Location />
        {/* <CongratulatoryMoney data={JsonData} /> */}
        <Share data={JsonData} />
        <Footer>Developer Lưu Huy</Footer>
      </main>
    </>
  );
}
