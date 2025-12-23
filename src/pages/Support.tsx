import './Support.css';

export const Support = () => {
  return (
    <div id='supportWrap'>
        <section className='support-section'>
            <h2>SUPPORT</h2>
            <div className='support-title'>
                <p>의료 서비스 경쟁력 향상과<br/>환자의 복지 개선에 이바지합니다.</p>
                <button className='support-btn'>전체보기
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.10913 16.4185L16.9648 8.56274L9.10913 0.707029" stroke="#E60012" strokeWidth="2"/>
                    <line x1="16.7617" y1="8.60864" x2="6.86769e-07" y2="8.60864" stroke="#E60012" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
            <ul className='support-news'>
                <li>
                    <div className='support-textbox'>
                        <p>News</p>
                        <p>병원 밖에서도 X-ray 가능, 현장에서 바로 촬영하고 진단</p>
                        <p>이번 규제 개선으로 요양 시설에서는 낙상․골절 등의 위급상황 발생 시, 엑스레이 촬영을 위해 구급차...</p>
                        <p className='support-time'>2025.09.12</p>
                    </div>
                </li>
                <li>
                    <div className='support-textbox'>
                        <p>News</p>
                        <p>초경량 X선 장비로 의료 사각지대 봉사 활동 수행</p>
                        <p>배터리 구동 및 저선량 방사선으로 작동하는 COCOON은 의료 서비스 제공과 직원 교육 모두를 지원하며...</p>
                         <p className='support-time'>2025.08.24</p>
                    </div>
                </li>
                <li>
                    <div className='support-textbox'>
                        <p>News</p>
                        <p>ICARST 2025에서 혁신적인 방사선 기술 선보여</p>
                        <p>기존 장비 대비 1/3 수준의 방사선량으로 고품질 영상 촬영을 제공합니다.<br/> &nbsp;</p>
                          <p className='support-time'>2025.07.19</p>
                    </div>
                </li>
                <li>
                    <div className='support-textbox'>
                        <p>News</p>
                        <p>덱스코윈, 2025 글로벌 선도기업으로 선정</p>
                        <p>휴대용 X선 장비 수출 선도기업으로서, 첨단 제품 개발과 글로벌 인증을 통해 성장해 나가겠습니다.</p>
                        <p className='support-time'>2025.07.04</p>
                    </div>
                </li>
            </ul>
            <div className='support-customer'>
                <button className='support-recruit'>
                    <p>인재채용</p>
                    <p>덱스코원의 미래를 함께 열어갈 인재를 모집합니다.</p>
                </button>
                <button className='support-ask'>
                    <p>온라인 문의</p>
                    <p>덱스코원읜 고객님의 물음에 언제든 준비되어 있습니다.</p>
                </button>
            </div>
        </section>
    </div>
  )
}
