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
            <li>페이스북</li>
            <li>유튜브</li>
            <li>링크드인</li>
            <li>인스타그램</li>
          </ul>
          </div>
          <div className="footer-bottom"></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer