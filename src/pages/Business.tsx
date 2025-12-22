import './Business.css'

import { useState } from 'react';

interface BusinessItem {
  id: number;
  title: string;
  image: string;
}

const businessItems: BusinessItem[] = [
  {
    id: 1,
    title: 'MEDICAL / DENTAL',
    image: '/images/business-1.png'
  },
  {
    id: 2,
    title: 'NURSING HOMES',
    image: '/images/business-2.png'
  },
  {
    id: 3,
    title: 'VETERINARY',
    image: '/images/business-3.png'
  },
  {
    id: 4,
    title: 'SECURITY/NDT/MILITARY',
    image: '/images/business-4.png'
  },
  {
    id: 5,
    title: 'EMERGENCY/LEGAL',
    image: '/images/business-5.png'
  }
];

export const Business = () => {
  const [selectedImage, setSelectedImage] = useState<string>(businessItems[0].image);
  const [selectedId, setSelectedId] = useState<number>(businessItems[0].id);

  const handleItemClick = (image: string, id: number) => {
    setSelectedImage(image);
    setSelectedId(id);
  };

  return (
    <div id="businessWrap">

         <section className="business-section">
            <div className="business-img" style={{backgroundImage: `url(${selectedImage})` }}></div>
            <div className="business-text">
                <h2>BUSINESS</h2>
                <p>다양한 환경에 알맞은<br/>최적의 진단솔루션</p>
                <p>㈜덱스코윈은 흉부를 비롯한 인체 전반 및 동물, 일반<br/>산업 등 엑스레이가 필요한 모든 영역에서 최적의 진단<br/>솔루션을 제공합니다.</p>
                <ul>
                    {businessItems.map((item) => (
                      <li 
                        key={item.id}
                        onClick={() => handleItemClick(item.image, item.id)}
                        className={selectedId === item.id ? 'active' : ''}
                      >
                        {item.title}
                      </li>
                    ))}
                </ul>
            </div>
         </section>


    </div>
  )
}
