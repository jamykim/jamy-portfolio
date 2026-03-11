import { TypeAnimation } from "react-type-animation";
import runImage from "../assets/run.jpg";
import "../css/Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* 1. 왼쪽 텍스트 영역 */}
      <div className="hero-text-wrap">
        <h1 className="hero-title">
          안녕하세요, <br />
          <TypeAnimation
            sequence={[
              "개발자 Jamy",
              1000,
              "데이터를 다루는 Jamy",
              1000,
              "AI를 활용한 자동화 개발 전문 Jamy",
              1000,
            ]}
            wrapper="span"
            speed={60}
            className="hero-type-text"
            repeat={Infinity}
          />
          <br />
          입니다.
        </h1>
      </div>

      {/* 2. 오른쪽 사진 영역 */}
      <div className="hero-img-wrap">
        <div className="hero-overlay"></div>
        <img src={runImage} alt="Jamy 프로필" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
