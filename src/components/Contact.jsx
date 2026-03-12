import "../css/Contact.css"; // 🔥 팩트: 대소문자 오류 방지를 위해 대문자 C로 수정
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">CONTACT ME</h2>

      <div className="contact-container">
        {/* 왼쪽: 마무리 인사 및 연락처 텍스트 */}
        <div className="contact-info-box">
          <h3>
            함께 성장하며 가치를 만들어갈 <br />
            <span className="highlight">개발자 Jamy</span>입니다.
          </h3>
          <p className="contact-desc">
            끊임없이 배우고 도전하는 것을 즐깁니다. <br />
            제 프로젝트나 경험에 대해 더 궁금하신 점이 있다면 <br />
            언제든지 편하게 연락해 주세요!
          </p>

          <div className="contact-links">
            {/* 메일 보내기 버튼 */}
            <a
              href="mailto:hhj0230@gmail.com"
              className="contact-btn email-btn"
            >
              <FaEnvelope className="btn-icon" /> 이메일 보내기
            </a>
            {/* 깃허브 버튼 */}
            <a
              href="https://github.com/jamykim"
              target="_blank"
              rel="noreferrer"
              className="contact-btn github-btn"
            >
              <FaGithub className="btn-icon" /> GitHub 방문
            </a>
          </div>
        </div>

        {/* 오른쪽: 인스타그램 QR 코드 영역 */}
        <div className="contact-qr-box">
          <div className="qr-wrapper">
            {/* 나중에 실제 QR코드 이미지 파일(qr.png)을 src 폴더에 넣고 경로를 바꿔주면 돼! */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://instagram.com/h2uuzm11"
              alt="Instagram QR"
              className="qr-image"
            />
          </div>
          <p
            className="qr-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <FaInstagram style={{ fontSize: "1.2rem", color: "#ccc" }} /> Scan
              for Instagram
            </span>
            <strong>@h2uuzm11</strong>
          </p>
          <a
            href="https://instagram.com/h2uuzm11"
            target="_blank"
            rel="noreferrer"
            className="insta-link"
          >
            인스타그램 바로가기 &rarr;
          </a>
        </div>
      </div>

      {/* 맨 밑 카피라이트 */}
      <footer className="footer-bottom">
        <p>© 2026 Jamy . All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
