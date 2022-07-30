import React, {useState} from 'react'
import './work.scss'
export default function Work() {
  const [currentSlide,setCurrentSlide] = useState(0)
  const sliderData = [
    {
      id: "1",
      name: "Samir Karimov",
      comment: " Rüstəmin bir çox insan tərəfindən diqqət çəkməyi bacaran enerjisi,bir çox kamilli insanların da düşündüyü kimi,özü belə bilmədən spritual güc ilə gerçəkləşir.Əgər elmini də spritual aləmin içinə daxil edəbilsə...)",
      img: "assets/SamirHoca.jpg",
      workplace: "Pragmatech Təhsil Mərkəzində Full Stack müəllimi"
    },
    {
      id: "2",
      name: "Elvin Azizbeyov",
      comment: "Tükənməz Enerjisi,Mükəmməl kombinasiyası,eyni zamanda problem analiz etməsi,onu riyaziyatda da digərlərindən 1 pillə öndə aparır.Necə ki bugünlərdə biz Müəllimlərin, gələcəkdədə Rüstəmin insanlarımıza   köməyi dəyəcəyinə əminəm",
      img: "assets/ElvinHoca.jfif",
      workplace: "Dosent, Hesablama riyaziyyatı kafedrası, Mexanika-riyaziyyat fakültəsi."
    },
    {
      id: '3',
      name: "Mamed Sahmaliyev",
      comment: "Qısa tanışlıq müddətində Rüstəm proqramlaşdırmaya olan hədsiz marağı və həvəsi ilə seçilmişdir. Bu sahədə olan bilikləri və marağı ilə Rüstəmin gələcəkdə yaxşı mütəxəssis kimi yetişməsinə və uğur qazanacağına inanıram.",
      img: "assets/Mammad-Shahmaliyev.jpg",
      workplace: "Milli Aviasiya Akademiyasi · Computer Sciences Master of Business Administration"
    },
    {
      id: '4',
      name: "Turana Binnataliyeva",
      comment: "Qısa bir müddət ərzində tanımağıma baxmayaraq mənim üçün ən qeyri-adi insanlardan biridir. İstədiyi məqsədə nail olmaq üçün hərşeyi etməyə hazırdır. Buna görə də gələcəkdə böyük uğurlar qazanacağını deyə bilərəm.",
      img:'', 
      workplace: "İmzalı dizayn şirkəti,İnteryer dizayner"
    }
  ]
  const handleClick = (way) =>{
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3)
    : setCurrentSlide(currentSlide<sliderData.length -1 ? currentSlide + 1 : 0);
  }
  return (
    <div className='works' id='works'>
       <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
         {sliderData.map((d)=>(
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.img} alt="" />
                    </div>
                    <h2>{d.name}</h2>
                    <p>{d.comment}</p>
                    <span>{d.workplace}</span>
                  </div>
              </div>
            </div>
          </div>
         ))}
       </div>
       <img src="assets/arrow.png" className='arrow left' alt=""  onClick={()=>handleClick("left")}/>
       <img src="assets/arrow.png" className='arrow right' alt=""  onClick={()=>handleClick()}/>
    </div>
  )
}   
