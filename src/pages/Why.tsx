import './Why.css'
export const Why = () => {
  return (
    <div id='whyWrap'>
      <section className='why-section'>
        <div className='why-title'>
        <h2>WHY DEXCOWIN</h2>
        <p>끊임없느 연구와 성과를 바탕으로<br/>새로운 기준을 만들어 나갑니다.</p>
        <button className='learn-more-btn'>더 알아보기</button>
        </div>

        <div className='why-content'>
        <ul>
          <li>
            <p>1</p>
            <p>퍼스트 무버</p>
            <p>배터리 탈착식 치과용 엑스레이의 시작<br/>혁신을 선도하는 포터블 엑스레이<br/>전문기업</p>
            <div><img src='/images/why-1.png' alt='why-1'/></div>
          </li>

           <li>
            <p>30</p>
            <p>R&D 투자</p>
            <p>기업부설 연구소를 운영하고 있고<br/>매출의 30% 이상 R&D에 투자</p>
            <div><img src='/images/why-2.png' alt='why-2'/></div>
          </li>

           <li>
            <p>300+</p>
            <p>글로벌 파트너</p>
            <p>85개국, 300여개 이상의 글로벌<br/>파트너망을 구축하여 저세계로 수출</p>
            <div><img className='why-3' src='/images/why-3.png' alt='why-3'/></div>
          </li>

           <li>
            <p>50+</p>
            <p>인증 및 특허</p>
            <p>FDA, CE를 비롯한 다수의 글로벌<br/>인증으로 안정성과 기술 우수성 입증</p>
            <div><img src='/images/why-4.png' alt='why-4'/></div>
          </li>
        </ul>
        </div>
      </section>
    </div>
  )
}
