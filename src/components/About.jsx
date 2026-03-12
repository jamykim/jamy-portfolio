import "../css/About.css";
import { FaRunning } from "react-icons/fa";
import marathonImg from "../assets/marathon.jpg";

function About() {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">ABOUT ME</h2>

      <div className="about-content">
        {/* 왼쪽: 기본 정보 + 마라톤 사진 (빨간 박스 영역) */}
        <div
          className="about-info"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <h3>Jamy</h3>
            <p>
              <strong>Location.</strong> Seoul, South Korea
            </p>
            <p>
              <strong>Email.</strong>{" "}
              <a href="#contact" className="info-link">
                hhj0230@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub.</strong>{" "}
              <a href="#contact" className="info-link">
                github.com/jamykim
              </a>
            </p>
            <p>
              <strong>instagram.</strong>{" "}
              <a href="#contact" className="info-link">
                @h2uuzm11
              </a>
            </p>
            <p>
              <strong>Blog.</strong>{" "}
              <a
                href="https://blog.naver.com/gomskiss"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                https://blog.naver.com/gomskiss
              </a>
            </p>
          </div>

          {/* 🔥 사진 영역  🔥 */}
          <div
            style={{
              marginTop: "40px", // 위쪽 텍스트와의 간격
              position: "relative",
              borderRadius: "15px",
              overflow: "hidden",
              width: "100%",
              height: "280px", // 박스 높이 (원하는 대로 조절 가능)
              flexGrow: 1, // 남은 세로 공간을 자연스럽게 채움
            }}
          >
            {/* 팩트: About 박스 배경색(#222)과 위아래 경계선이 부드럽게 섞이는 그라데이션 오버레이 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, #222 0%, rgba(34,34,34,0) 25%, rgba(34,34,34,0) 75%, #222 100%), linear-gradient(to right, #222 0%, rgba(34,34,34,0) 25%, rgba(34,34,34,0) 75%, #222 100%)",
                zIndex: 1,
              }}
            />

            <img
              src={marathonImg}
              alt="마라톤 러닝"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // 가로세로 비율 무시하고 박스 꽉 채우기
                objectPosition: "center", // 사진 중앙 위주로 보여주기
                zIndex: 0,
              }}
            />
          </div>
        </div>

        {/* 오른쪽: 상세 소개 및 마인드셋 */}
        <div className="about-desc">
          {/* 1. 직무적 소개 */}
          <div className="desc-block">
            <p>데이터와 기술로 일상의 문제를 해결하는 개발자입니다.</p>
            <p>
              단순한 웹 개발을 넘어, <strong>산불 예측 시스템</strong>이나{" "}
              <strong>졸음운전 예측 및 알림 자동화시스템</strong> 같이 실생활에
              밀접하고 임팩트 있는 시스템을 구축하는 것에 큰 흥미를 느낍니다.
            </p>
            <p>
              최근에는 대용량 데이터 처리를 위한 <strong>Hadoop</strong>과{" "}
              <strong>LLM(거대 언어 모델)</strong>을 활용한 뉴스 기반 주식 테마
              추천 시스템 등, 다양한 기술적 도전을 통해 데이터 파이프라인과
              백엔드 역량을 꾸준히 넓혀가고 있습니다.
            </p>
          </div>

          {/* 2. 개인 성향 및 스토리 (러닝 스토리) */}
          <div
            className="mindset-block"
            style={{
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "1px dashed #444",
            }}
          >
            <h4
              style={{
                color: "#00ff00",
                fontSize: "1.3rem",
                marginBottom: "20px",
              }}
            >
              <FaRunning /> Mindset & Interests
            </h4>

            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#bbb",
                  marginBottom: "10px",
                }}
              >
                <strong
                  style={{
                    color: "#fff",
                    width: "60px",
                    display: "inline-block",
                  }}
                >
                  특기.
                </strong>
                긍정적인 마인드, 관심 분야에 대한 깊은 지식 탐구, 러닝
              </p>
              <p style={{ fontSize: "1.05rem", color: "#bbb", margin: 0 }}>
                <strong
                  style={{
                    color: "#fff",
                    width: "60px",
                    display: "inline-block",
                  }}
                >
                  취미.
                </strong>
                웨이트 트레이닝, 마라톤, 사색
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#2a2a2a",
                padding: "25px",
                borderRadius: "12px",
                borderLeft: "4px solid #00ff00",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#ddd",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                최근 제 일상에서 가장 큰 활력소는 <strong>'러닝'</strong>입니다.
                처음엔 단 1km를 달리는 것조차 벅찼지만, 매일 꾸준히 달리다 보니
                어느새 10km도 웃으며 즐겁게 뛸 수 있게 되었습니다. <br />
                <br />
                시작이 미약하더라도 묵묵히 계속하면 반드시 실력이 늘어난다는{" "}
                <strong>'성장에 대한 자신감'</strong>을 몸소 배웠습니다.
                달리기에서 얻은 성취감과 감사함, 그리고 긍정적인 에너지는
                개발자로서 마주하는 복잡하고 어려운 에러들을 끝까지 물고 늘어져
                해결해 내는 저만의 든든한 원동력이 되고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
