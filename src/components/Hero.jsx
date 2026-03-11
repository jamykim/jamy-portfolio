import { TypeAnimation } from "react-type-animation";
import runImage from "../assets/run.jpg";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        backgroundColor: "#111",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        overflow: "hidden", // 화면 밖으로 삐져나가는 요소 차단
      }}
    >
      {/* 1. 왼쪽 텍스트 영역 */}
      <div style={{ flex: 1, paddingLeft: "8vw" }}>
        {" "}
        {/* 팩트: 전체 패딩 대신 텍스트 왼쪽에만 여백 부여 */}
        <h1 style={{ fontSize: "3rem", margin: 0, lineHeight: "1.4" }}>
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
            style={{ color: "#00ff00", display: "inline-block" }}
            repeat={Infinity}
          />
          <br />
          입니다.
        </h1>
      </div>

      {/* 2. 오른쪽 사진 영역 (화면 꽉 채우기 + 페이드 효과) */}
      <div
        style={{
          flex: 1,
          height: "100%", // 부모 높이에 꽉 맞춤
          position: "relative", // 오버레이 덮기를 위한 기준점
        }}
      >
        {/* 🔥 팩트: 배경과 자연스럽게 이어지도록 그라데이션 필터 적용 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // 왼쪽은 #111 색상으로 덮고, 오른쪽으로 갈수록 투명해지다가 끝부분은 살짝 어둡게 처리
            background:
              "linear-gradient(to right, #111 0%, rgba(17, 17, 17, 0) 40%, rgba(0, 0, 0, 0.3) 100%)",
            zIndex: 1,
          }}
        ></div>

        <img
          src={runImage}
          alt="Jamy 프로필"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // 팩트: 비율을 무시하고 박스 전체를 꽉 채움 (비율에 따라 일부가 잘릴 수 있음)
            objectPosition: "center", // 사진의 중앙을 포커스로 잡음
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
