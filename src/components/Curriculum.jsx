import "../css/Curriculum.css";

function Curriculum() {
  return (
    <section id="curriculum" className="section curriculum-section">
      <h2 className="section-title">CURRICULUM</h2>

      <div className="timeline-container">
        {/* 1. 현재 진행 중인 K-디지털 트레이닝 (가장 최신) */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2025. 12. 31 ~ 2026. 03. 06</span>
            <h3 className="timeline-title">
              심화·심층 데이터 분석을 통한 서비스 솔루션 개발자 과정
            </h3>
            <h4 className="timeline-org">
              휴먼 서울 IT교육센터 K-디지털 트레이닝 (빅데이터 분석)
            </h4>
            <div className="timeline-tags">
              <span># K-Digital</span>
              <span># 349시간</span>
              <span># 빅데이터</span>
            </div>
            <p className="timeline-desc">
              이전 풀스택 과정에서 배운 웹/앱 개발 지식을 바탕으로, <br />
              대용량 데이터를 심층적으로 분석하고 실제 서비스 솔루션에 적용하는
              심화 프로젝트를 수행 중입니다.
            </p>
          </div>
        </div>

        {/* 2. 풀스택 개발자 과정 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2025. 07. 07 ~ 2025. 12. 30</span>
            <h3 className="timeline-title">
              Java, Spring 기반 스마트웹 & 콘텐츠 풀스택 개발자 과정
            </h3>
            <h4 className="timeline-org">
              휴먼 천안 IT교육센터 (국가기간전략산업직종훈련)
            </h4>
            <div className="timeline-tags">
              <span># UI/UX 엔지니어링</span>
              <span># 950시간</span>
              <span># Full-Stack</span>
            </div>
            <ul className="curriculum-tasks">
              <li>
                웹 기반 콘텐츠 서비스 기획, 분석, 설계 및 전체
                생명주기(구현~배포) 경험
              </li>
              <li>
                <strong>Frontend:</strong> HTML5, CSS, JavaScript, jQuery,
                React.js를 활용한 반응형 UI/UX 구현
              </li>
              <li>
                <strong>Backend:</strong> Java, JSP, Spring Framework 및 Oracle
                SQL을 활용한 견고한 웹 서버 구축
              </li>
              <li>
                <strong>Mobile:</strong> Android 플랫폼을 활용한 스마트 기기
                맞춤형 문화 앱 구현 및 배포
              </li>
            </ul>
          </div>
        </div>

        {/* 3. 데이터 라벨링 입문 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2022. 10. 05 ~ 2022. 10. 18</span>
            <h3 className="timeline-title">데이터 라벨링 입문 과정</h3>
            <h4 className="timeline-org">
              크라우드웍스 원격평생교육원 (플랫폼 특화훈련)
            </h4>
            <div className="timeline-tags">
              <span># 인공지능 모델링</span>
              <span># 10시간</span>
              <span># AI 기초</span>
            </div>
            <p className="timeline-desc">
              인공지능 모델링의 기초가 되는 데이터 라벨링 개념을 습득하며, AI 및
              데이터 분야로의 진입을 다진 첫걸음이 된 교육입니다.
            </p>
          </div>
        </div>
        {/* 4. 전문학사 취득 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <span className="timeline-date">2025. 08 ~ 2025. 12</span>
            <h3 className="timeline-title">전문학사 취득</h3>
            <h4 className="timeline-org">학점은행제 (국가평생교육진흥원)</h4>
            <div className="timeline-tags">
              <span># 학점은행제</span>
              <span># 전문학사</span>
            </div>
            <p className="timeline-desc">
              학점은행제도를 통해 전문학사 학위를 취득하며 자기 주도적인 학습
              능력과 성실함을 길렀습니다.
            </p>
          </div>
        </div>

        {/* 5. 고등학교 졸업 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">청주고등학교 졸업</h3>
            <h4 className="timeline-org">충청북도 청주시</h4>
            <div className="timeline-tags">
              <span># 청주고</span>
              <span># 졸업</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
