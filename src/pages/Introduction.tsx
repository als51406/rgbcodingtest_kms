import './Introduction.css'
const Introduction = () => {
  return (
    <div id="introductionWrap">
            <section className='introduction-section'>
                <h2>company</h2>
                <div className='intro'>
                    <div className='intro-main'>
                        <p>포터블 엑스레이<br/>혁신의 리더, 덱스코윈</p>
                        <p>㈜덱스코윈은 포터블 엑스레이 분야를 선도하는 기업으로, 의료· 수의 · 산업 등 다양한 영역에서 활용 가능한 첨단장비와 솔루션을 개발, 제공하고 있습니다. 끊임없는 연구 개발을 통해 혁신적인 포터블 엑스레이 기술과 솔루션을 창출하여 인류복지와 삶의 질 향상에 기여하고 있습니다.</p>
                        <button className='intro-btn'> 회사소개 자세히 보기</button>
                    </div>
                
                    <ul className='intro-sub'>
                        <li>
                            <div className='intro-png-1'></div>
                            <p>포터블 엑스레이 전문 기업</p>
                            <p>산업용 및 의료용 진단장비를 위한 저선량, <br/>고해상도 엑스레이 솔루션 및 시스템</p>
                        </li>
                        <li>
                            <div className='intro-png-2'></div>
                            <p>시장 선도 기업</p>
                            <p>2004년에 설립 이후 포터블 엑스레이 장치의 <br/>선도 기업으로서 꾸준히 성장하고 있습니다.</p>
                        </li>
                        <li>
                            <div className='intro-png-3'></div>
                            <p>R&D 선도 기업</p>
                            <p>끊임없는 연구 개발을 통해 다양한 엑스레이 장비<br/> 및 관련 제품을 개발합니다.</p>
                        </li>
                    </ul>
                </div>
            </section>
    </div>
  )
}

export default Introduction