import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Product.css';

interface ProductItem {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const productItems: ProductItem[] = [
  {
    id: 1,
    name: 'ADX6000FB',
    title: '고출력 포터블 엑스레이',
    description: '전신용 이동용으로 고출력 엑스레이가 필요하면서 현장성 및 활용도 극대화가 가능한 포터블 엑스레이 시스템입니다. 저선량으로 고품질 엑스레이 이미지를 제공하여 빠르고 편리하게 활용할 수 있습니다.',
    image: '/images/product-1.png'
  },
  {
    id: 2,
    name: 'PRODUCT 2',
    title: '고출력 포터블 엑스레이',
    description: '전신용 이동용으로 고출력 엑스레이가 필요하면서 현장성 및 활용도 극대화가 가능한 포터블 엑스레이 시스템입니다. 저선량으로 고품질 엑스레이 이미지를 제공하여 빠르고 편리하게 활용할 수 있습니다.',
    image: '/images/product-2.png'
  },
  {
    id: 3,
    name: 'PRODUCT 3',
    title: '고출력 포터블 엑스레이',
    description: '전신용 이동용으로 고출력 엑스레이가 필요하면서 현장성 및 활용도 극대화가 가능한 포터블 엑스레이 시스템입니다. 저선량으로 고품질 엑스레이 이미지를 제공하여 빠르고 편리하게 활용할 수 있습니다.',
    image: '/images/product-3.png'
  },
  {
    id: 4,
    name: 'PRODUCT 4',
    title: '고출력 포터블 엑스레이',
    description: '전신용 이동용으로 고출력 엑스레이가 필요하면서 현장성 및 활용도 극대화가 가능한 포터블 엑스레이 시스템입니다. 저선량으로 고품질 엑스레이 이미지를 제공하여 빠르고 편리하게 활용할 수 있습니다.',
    image: '/images/product-4.png'
  },
  {
    id: 5,
    name: 'PRODUCT 5',
    title: '고출력 포터블 엑스레이',
    description: '전신용 이동용으로 고출력 엑스레이가 필요하면서 현장성 및 활용도 극대화가 가능한 포터블 엑스레이 시스템입니다. 저선량으로 고품질 엑스레이 이미지를 제공하여 빠르고 편리하게 활용할 수 있습니다.',
    image: '/images/product-5.png'
  },
  {
    id: 6,
    name: 'PRODUCT 6',
    title: '고출력 포터블 엑스레이',
    description: '전신용 이동용으로 고출력 엑스레이가 필요하면서 현장성 및 활용도 극대화가 가능한 포터블 엑스레이 시스템입니다. 저선량으로 고품질 엑스레이 이미지를 제공하여 빠르고 편리하게 활용할 수 있습니다.',
    image: '/images/product-6.png'
  }
];

export const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div id="productWrap">
      <section className="product-section">
        <div className='product-bg'></div>
        
        <div className="product-left">
            <h2>PRODUCT</h2>
          <h3>DEXCOWIN</h3>
        </div>

        <div className="product-main">
            
          <div className="product-image-slider">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              speed={600}
              onSwiper={setSwiperInstance}
              onSlideChange={handleSlideChange}
              className="product-swiper"
            >
              {productItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="product-info">
            <div className="product-badge">X-ray System</div>
            <h3>{productItems[activeIndex].name}</h3>
            <h4>{productItems[activeIndex].title}</h4>
            <p>{productItems[activeIndex].description}</p>
            <div className="product-navigation">
              <button className="nav-button prev" onClick={() => swiperInstance?.slidePrev()}>&#8249;</button>
              <button className="nav-button next" onClick={() => swiperInstance?.slideNext()}>&#8250;</button>
            </div>
          </div>
          
        </div>

        <div className="product-thumbnails">
          {productItems.map((item, index) => (
            <div
              key={item.id}
              className={`thumbnail-item ${activeIndex === index ? 'active' : ''}`}
            >
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
