import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

export const Home = () => {
  return (
    <div id="homeWrap">

       <section className="swiper-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                speed={600}
                style={{ height: '900px' }}
            >
                <SwiperSlide>
                    <div className='slide1'>
                        <p>SUPERIOR QUALITY, LOW RADIATION EXPOSURE</p>
                        <p>LEADING THE NEXT<br/>X-ray solution</p>
                        <p>보다 건강한 삶, 보다 안전한 세상을 위한 끊임없는<br/>혁신을 만들어 나갑니다.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide2'>
                        <h3>슬라이드 2</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide3'>
                        <p>SUPERIOR QUALITY, LOW RADIATION EXPOSURE</p>
                        <p>LEADING THE NEXT<br/>X-ray solution</p>
                        <p>보다 건강한 삶, 보다 안전한 세상을 위한 끊임없는<br/>혁신을 만들어 나갑니다.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
       </section>
    </div>
  )
}
