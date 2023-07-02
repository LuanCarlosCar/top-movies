import facebook from "../../assets/imgs/facebook.svg";
import instagram from "../../assets/imgs/instagram.svg";
import twitter from "../../assets/imgs/twitter.svg";
import Kenai2 from "../../assets/imgs/Kenai2.svg";
import { FooterContainer, StyleImg } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <StyleImg src={Kenai2} alt="logo" />

      <div style={{ display: "flex", gap: "4.0625rem" }}>
        <StyleImg src={instagram} alt="instagram" />
        <StyleImg src={twitter} alt="twitter" />
        <StyleImg src={facebook} alt="facebook" />
      </div>
    </FooterContainer>
  );
}
