import './Footer.css'

const Footer = () => {
  return (
    <div id="footerWrap">
      <footer className="footer-section">
        <h2>DEXCOWIN</h2>
        <div className="footer-content">
          <ul className="footer-list">
            <li>회사소개</li>
            <li>문의하기</li>
            <li>개인정보처리방침</li>
            <li>무단이메일수집거부</li>
          </ul>
          <div className="footer-info">
            <ul className="footer-address">
                <li><span>한국본사</span> 서울시 금천구 가산디지털1로 25, 901-905호 (가산동,대룡테크노타운 17차) </li>
                <li><span>TEL</span> 02-3402-5500</li>
                <li><span>FAX</span> 02-3402- 5539</li>
                <li><span>EMAIL</span> info@dexcowin.com</li>
            </ul>
            <ul className="footer-social">
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">페이스북</a></li>
                <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">유튜브</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">링크드인</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">인스타그램</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>Copyright 2025 Dexcowin Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer