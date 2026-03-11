import "../css/Projects.css";
import { FaGithub, FaYoutube, FaFilePdf } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">TEAM PROJECTS</h2>

      <div className="projects-container">
        {/* 1. 졸음 운전 방지 앱 (최신/팀장) */}
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">
              졸음운전 예측 및 알림·휴게소 자동 맵핑 앱{" "}
            </h3>
            <p className="project-period">2026.02 ~ 2026.03 (3 주)</p>
          </div>
          <div className="project-role">
            <strong>Role.</strong> 팀장 (기획/설계 총괄, AI 모델링, 프론트엔드
            개발)
          </div>
          <p className="project-desc">
            운전자 얼굴 키포인트 및 Bbox 데이터를 활용해 졸음 상태를 실시간으로
            감지하고, <br />
            경고 알림과 함께 인근 졸음쉼터 및 휴게소를 맵핑해 주는 온디바이스 AI
            모바일 앱 서비스입니다.
          </p>
          <ul className="project-tasks">
            <li>프로젝트 기획, 화면 설계 및 전체 아키텍처 총괄</li>
            <li>라벨링된 이미지 데이터 전처리 및 스케일링 수행</li>
            <li>
              <strong>YOLOv8, MLP, LSTM</strong> 등 다양한 기법의 모델 학습 및
              성능 평가를 진행하여 최적의 안면 인식 및 졸음 감지 AI 모델 선정
            </li>
            <li>
              선정된 최적화 모델을 바탕으로 네트워크 지연 없이 실시간 동작하는{" "}
              <strong>온디바이스(On-device) AI </strong> 기반의 앱
              프론트엔드(Flutter) UI/UX 구현
            </li>
          </ul>
          <div className="project-techs">
            <span>Flutter</span>
            <span>YOLOv8 / LSTM / MLP</span>
            <span>Python</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/yinaa2630/safe-driving"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn github-btn"
            >
              <FaGithub className="btn-icon" /> GitHub
            </a>
            <a
              href="https://youtube.com/shorts/meWJwr5vpWk?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaYoutube className="btn-icon" style={{ color: "#FF0000" }} />{" "}
              시연 영상
            </a>

            <a
              href="/safedriving.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              {/* 🔥 PDF 아이콘에 빨간색 지정 🔥 */}
              <FaFilePdf
                className="btn-icon"
                style={{ color: "#FF5722" }}
              />{" "}
              기획서 보기
            </a>
          </div>
        </div>

        {/* 2. 산불 범위 예측 웹사이트 */}
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">
              AI 기반 실시간 산불 발생 및 피해 범위 예측 웹
            </h3>
            <p className="project-period">2026.01 ~ 2026.02 (3 주)</p>
          </div>
          <div className="project-role">
            <strong>Role.</strong> 팀원 (백엔드 파이프라인 구축, AI 모델링, DBMS
            서버 구축)
          </div>
          <p className="project-desc">
            기상청 및 산림청의 실시간 공공데이터를 수집하여 AI 모델로 산불 발생
            위험도와 피해 범위를 예측하는 웹 서비스입니다.
          </p>
          <ul className="project-tasks">
            <li>
              <strong>Ubuntu Docker 환경에 Oracle DB</strong>를 설치하여
              안정적인 데이터베이스 서버 구축
            </li>
            <li>
              <strong>Spring Boot와 FastAPI</strong>를 연동하여 기상청 API
              데이터를 수신하고 AI 모델로 전달하는 백엔드 파이프라인 설계
            </li>
            <li>
              산불 정보, 날씨, 임상도, 지표피복 등{" "}
              <strong>
                비정형/미정제 공공데이터의 클렌징, 전처리 및 스케일링
              </strong>{" "}
              주도 (가장 치열하게 고민하고 성장한 파트)
            </li>
            <li>
              Random Forest, XGBoost, GRU, Transformer Encoder 등 다양한
              머신러닝/딥러닝 모델 학습 및 성능 비교
            </li>
          </ul>
          <div className="project-techs">
            <span>Spring Boot</span>
            <span>FastAPI</span>
            <span>Oracle</span>
            <span>Docker</span>
            <span>GRU/Transformer</span>
            <span>RF/XGBoost</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/hhj0230/wildfire-prediction-web"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn github-btn"
            >
              <FaGithub className="btn-icon" /> GitHub
            </a>
            <a
              href="https://youtu.be/nLr67XdTEfQ"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaYoutube className="btn-icon" style={{ color: "#FF0000" }} />{" "}
              예측 시연 영상
            </a>
            <a
              href="https://youtu.be/GELw6qMKt1I"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              {/* 챗봇 아이콘은 파란색으로 포인트 */}
              <FaYoutube
                className="btn-icon"
                style={{ color: "#FF0000" }}
              />{" "}
              챗봇 시연 영상
            </a>
            <a
              href="/bulsee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaFilePdf className="btn-icon" style={{ color: "#FF5722" }} />{" "}
              기획서 보기
            </a>
          </div>
        </div>

        {/* 3. ReCharge App (3차) */}
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">
              ReCharge - EV 충전소 안내 및 AI 여가 추천 앱
            </h3>
            <p className="project-period">2025.12 ~ 2025.12 (3.5 주)</p>
          </div>
          <div className="project-role">
            <strong>Role.</strong> 팀원 (프론트엔드/백엔드 개발, 화면 및 ERD
            설계)
          </div>
          <p className="project-desc">
            기존 웹 서비스를 모바일 앱으로 고도화한 프로젝트입니다.
            <br /> 전기차 충전 대기 시간 동안 주변 식당/카페 안내는 물론,
            영화/음악 추천 및 운세 기능을 제공하는 종합 플랫폼입니다.
          </p>
          <ul className="project-tasks">
            <li>서비스 요구사항에 맞춘 화면 설계 및 데이터베이스 ERD 모델링</li>
            <li>
              관리자 모드, 공지사항, 게시판, 신고 접수 기능의{" "}
              <strong>CRUD 백엔드(Spring Boot) API</strong> 개발
            </li>
            <li>
              <strong>React Native와 Android Studio 에뮬레이터</strong>를 활용한
              크로스 플랫폼 프론트엔드 뷰단 구현
            </li>
            <li>
              이전 2차 웹 프로젝트의 피드백을 수용하여 AI 영화 음악 추천 등 신규
              기능 추가, 관리자 모드 기능 확장
            </li>
          </ul>
          <div className="project-techs">
            <span>React Native</span>
            <span>Android Studio</span>
            <span>Spring Boot</span>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/sah9608/rechargeapp1219"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn github-btn"
            >
              <FaGithub className="btn-icon" /> GitHub
            </a>
            <a
              href="https://youtu.be/kvYI837Q2fY"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaYoutube className="btn-icon" style={{ color: "#FF0000" }} />{" "}
              시연 영상
            </a>

            <a
              href="/recharge.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaFilePdf className="btn-icon" style={{ color: "#FF5722" }} />{" "}
              기획서 보기
            </a>
          </div>
        </div>

        {/* 4. ReCharge Web (2차) */}
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">ReCharge - EV 충전소 안내 웹</h3>
            <p className="project-period">2025.11 ~ 2025.11 (3 주)</p>
          </div>
          <div className="project-role">
            <strong>Role.</strong> 팀원 (웹 프론트엔드 및 백엔드 개발)
          </div>
          <p className="project-desc">
            가까운 전기차 충전소 위치와 사용 가능 여부를 안내해 주는 ReCharge
            서비스의 초기 웹 버전입니다.
          </p>
          <ul className="project-tasks">
            <li>
              <strong>React</strong>를 활용한 웹 프론트엔드 컴포넌트 설계 및
              상태 관리
            </li>
            <li>
              <strong>Spring Boot</strong>를 이용한 안정적인 REST API 백엔드
              서버 구축
            </li>
            <li>
              초기 아키텍처 설계와 풀스택 개발 경험을 통해, 이후 모바일 앱(3차)
              고도화를 성공적으로 이끌어내는 기술적 토대 마련
            </li>
          </ul>
          <div className="project-techs">
            <span>React</span>
            <span>Spring Boot</span>
          </div>
          <div className="project-links">
            <a
              href="https://youtu.be/9vHqd8NvJDo"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaYoutube className="btn-icon" style={{ color: "#FF0000" }} />{" "}
              시연 영상
            </a>
            <a
              href="/recharge.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "1px solid #ddd",
              }}
            >
              <FaFilePdf className="btn-icon" style={{ color: "#FF5722" }} />{" "}
              기획서 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
