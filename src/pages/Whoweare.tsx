import './Whoweare.css'

export const Whoweare = () => {
  return (
    <div id='whoweareWrap'>
        <img className='whoweare-bg' src='images/whoweare-card.png' alt='이미지'></img>
      <section className='whoweare-section'>
        <div className='whoweare-header'>
          <h2>WHO WE ARE</h2>
          <h3>덱스코윈의 기술이 더 건강한 삶, 더 안전한 세상을 만들어 갑니다.</h3>
        </div>

        <div className='whoweare-content'>
          <div className='center-text'>
            <h1>FOR A SAFER WORLD</h1>
            <p className='subtitle'>WITH ADVANCED X-RAY SOLUTION</p>
            <p className='description'>
              의료, 군경찰, 치과, 수의과, 방사(NCI), 방산 제작, 군 방어장 등 다양한 현장과 세팅의 차별<br/>
              정밀보건 정밀보건 등 다양 상황에서 엑스레이 솔루션을 제공합니다.
            </p>
            <button className='whoweare-btn'>더 알아보기</button>
          </div>
        </div>
      </section>
    </div>
  )
}
