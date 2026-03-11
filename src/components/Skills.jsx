import "../css/Skills.css";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaRobot,
  FaNetworkWired,
  FaChartBar,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">SKILLS</h2>

      <div className="skills-detailed-container">
        {/* 🔥 새롭게 추가된 한눈에 보기 (배지 스타일) 🔥 */}
        <div className="tech-summary-box">
          <div className="tech-row">
            <div className="tech-category">
              <FaCode className="tech-icon" /> Language
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#f89820", color: "#fff" }}
              >
                Java
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#3776ab", color: "#fff" }}
              >
                Python
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#f7df1e", color: "#000" }}
              >
                JavaScript
              </span>
            </div>
          </div>

          <div className="tech-row">
            <div className="tech-category">
              <FaMobileAlt className="tech-icon" /> Front / Mobile
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#61dafb", color: "#000" }}
              >
                React
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#61dafb", color: "#000" }}
              >
                React Native
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#02569b", color: "#fff" }}
              >
                Flutter
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#e34f26", color: "#fff" }}
              >
                HTML/CSS
              </span>
            </div>
          </div>

          <div className="tech-row">
            <div className="tech-category">
              <FaServer className="tech-icon" /> Backend
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#6db33f", color: "#fff" }}
              >
                Spring Boot
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#009688", color: "#fff" }}
              >
                FastAPI
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#ea2845", color: "#fff" }}
              >
                NestJS
              </span>
            </div>
          </div>

          {/* 1. 핵심 무기: AI & Deep Learning */}
          <div className="tech-row">
            <div className="tech-category">
              <FaRobot className="tech-icon" /> AI Modeling
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#EE4C2C", color: "#fff" }}
              >
                PyTorch
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#00ffff", color: "#000" }}
              >
                YOLOv8
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#4b8bbe", color: "#fff" }}
              >
                GRU & Transformer
              </span>
            </div>
          </div>

          {/* 2. 서브 무기: 학습한 빅데이터 처리 환경 */}
          <div className="tech-row">
            <div className="tech-category">
              <FaNetworkWired className="tech-icon" /> Big Data Infra
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#ff9900", color: "#000" }}
              >
                Hadoop
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#e25a1c", color: "#fff" }}
              >
                Spark
              </span>
            </div>
          </div>

          {/* 3. 분석 및 시각화 */}
          <div className="tech-row">
            <div className="tech-category">
              <FaChartBar className="tech-icon" /> Analysis & BI
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#e97627", color: "#fff" }}
              >
                Tableau
              </span>
            </div>
          </div>

          <div className="tech-row">
            <div className="tech-category">
              <FaCloud className="tech-icon" /> DevOps / DB
            </div>
            <div className="tech-badges">
              <span
                className="badge"
                style={{ backgroundColor: "#2496ed", color: "#fff" }}
              >
                Docker
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#f50000", color: "#fff" }}
              >
                Oracle
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#47a248", color: "#fff" }}
              >
                MongoDB
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#6a47a2", color: "#fff" }}
              >
                PostgreSQL
              </span>
              <span
                className="badge"
                style={{ backgroundColor: "#fcca3f", color: "#000" }}
              >
                Linux
              </span>
            </div>
          </div>
        </div>

        <div className="skill-group">
          <h3 className="skill-group-title">[ AI & DATA ]</h3>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Deep Learning & Vision
            </h4>
            <ul className="skill-details">
              <li>
                <strong>PyTorch:</strong> 딥러닝 프레임워크를 활용한 모델
                아키텍처 커스텀 설계 및 하이퍼파라미터 최적화
              </li>
              <li>
                <strong>YOLOv8:</strong> 이미지 및 영상 데이터 기반 객체
                탐지(Object Detection) 모델 학습 및 적용
              </li>
              <li>
                <strong>GRU & Transformer:</strong> 시계열 데이터 분석 및 예측을
                위한 앙상블 모델링 구현
              </li>
              <li>
                <strong>ML (Random Forest, XGBoost):</strong> 정형 데이터 분류
                및 예측 모델 구현
              </li>
            </ul>
          </div>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Big Data & Visualization
            </h4>
            <ul className="skill-details">
              <li>
                <strong>Hadoop & Spark:</strong> 대규모 데이터 처리를 위한 분산
                아키텍처 이해 및 기초 환경 구축 학습
              </li>
              <li>
                <strong>Tableau:</strong> 가공된 데이터를 바탕으로 인사이트 도출
                및 대시보드 시각화
              </li>
            </ul>
          </div>
        </div>

        {/* [ BACKEND & DBMS ] */}
        <div className="skill-group">
          <h3 className="skill-group-title">[ BACKEND & DBMS ]</h3>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Frameworks
            </h4>
            <ul className="skill-details">
              <li>
                <strong>Spring Boot / Java:</strong> MVC 패턴 기반 안정적인
                RESTful API 설계 및 객체지향 프로그래밍
              </li>
              <li>
                <strong>FastAPI / Python:</strong> 비동기 처리 기반의 빠르고
                가벼운 AI 모델 서빙 API 구축
              </li>
              <li>
                <strong>NestJS:</strong> Node.js 기반의 체계적인 백엔드 아키텍처
                설계 및 개발
              </li>
            </ul>
          </div>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Database
            </h4>
            <ul className="skill-details">
              <li>
                <strong>PostgreSQL:</strong> 오픈소스 RDBMS를 활용한 관계형
                데이터 모델링 및 쿼리 최적화
              </li>
              <li>
                <strong>Oracle (18c/XE):</strong> RDBMS 데이터 모델링, 복잡한
                쿼리(SQL) 및 PL/SQL 작성, 트랜잭션 관리
              </li>
              <li>
                <strong>MongoDB:</strong> NoSQL 기반의 유연한 비정형
                데이터베이스 설계 및 활용
              </li>
            </ul>
          </div>
        </div>

        {/* [ FRONTEND & MOBILE ] */}
        <div className="skill-group">
          <h3 className="skill-group-title">[ FRONTEND & MOBILE ]</h3>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Web Frontend
            </h4>
            <ul className="skill-details">
              <li>
                <strong>React & JavaScript:</strong> 컴포넌트 기반 UI 설계, 상태
                관리 및 비동기 통신(Axios) 구현
              </li>
              <li>
                <strong>HTML / CSS:</strong> 웹 표준을 준수한 마크업 및 반응형
                레이아웃 스타일링
              </li>
            </ul>
          </div>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Mobile App
            </h4>
            <ul className="skill-details">
              <li>
                <strong>React Native:</strong> 기존 React 지식을 활용한 크로스
                플랫폼 모바일 앱 개발
              </li>
              <li>
                <strong>Flutter:</strong> 풍부한 UI 위젯을 활용한 네이티브
                수준의 앱 제작
              </li>
            </ul>
          </div>
        </div>

        {/* [ DEVOPS & TOOLS ] */}
        <div className="skill-group">
          <h3 className="skill-group-title">[ DEVOPS & TOOLS ]</h3>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> Infra & OS
            </h4>
            <ul className="skill-details">
              <li>
                <strong>Docker:</strong> 컨테이너 기반의 일관된 개발 및 배포
                환경 구축
              </li>
              <li>
                <strong>Linux / Ubuntu:</strong> CLI 환경에서의 서버 운영 및
                기본적인 리눅스 명령어 활용
              </li>
            </ul>
          </div>

          <div className="skill-item">
            <h4 className="skill-name">
              <FaCheckCircle className="skill-icon" /> IDE & Editor
            </h4>
            <ul className="skill-details">
              <li>
                <strong>Backend / AI:</strong> IntelliJ IDEA, Eclipse, Pycharm,
                Jupyter Notebook, Google Colab
              </li>
              <li>
                <strong>Frontend / Mobile:</strong> VS Code, Android Studio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
