import React from 'react'
import attackImage from '../../assets/images/about/galshir-attack.gif'
import whyImage from '../../assets/images/about/why.gif'
import './style.scss'
function AboutPage() {
  return (
    <div>
        <section className="about-section">
          <h1 className="titleforSection">Bizim haqqımızda</h1>
        </section>

        <section className="py-72">
    <div className="wrapper">
      <div className="Mission flex j-between ">
        <div className="mission-text">
          <h2 className="mission-title">Bizim Missiyamız</h2>
          <p className="mission-description">Missiyamız “müştərilərə istədiklərini vermək və hər kəsdən daha tez çatdırmaqdır”. Bu cür sadə, qısa və sadə ifadə bu şirkətin niyə belə məhsuldar olduğunu göstərir. Yenilik etmək, rəhbərlik etmək, təkmilləşdirmək, qlobal müştərilərə ən yaxşı qiymətə məhsul və xidmətlər təqdim etmək. Dəb tendensiyalarını, bazar dəyişikliklərini və ən son texnologiyanı qabaqlamaq üçün brendinqimizlə fərq yaratmaq. Biznes tərəfdaşlarımız, müştərilərimiz və əməkdaşlarımız üçün həyat keyfiyyətini artırmaq. Moda mövsümlərə görə dəyişir. Bununla belə, missiyanız sarsılmaz olmalı və bütün maraqlı tərəfləri mükəmməllik və gəlirliliyə yönəltməyə yönəldilməlidir. Palto, gödəkçə,
           analıq, qış və ya yay geyimləri üzrə ixtisaslaşmağınızın fərqi yoxdur. Dizayner, büdcəyə uyğun və ya hamıya uyğun – hamısı satış və mənfəət gətirmək üçün nəzərdə tutulub.</p>
            
                <p className="quote">Yaradıcılıq sadəcə bəzi şeyləri birləşdirir. Yaradıcı insanlardan soruşanda ki, necə
                   bir şey etdilər, özlərini bir az günahkar hiss etdilər
                   çünki onlar həqiqətən bunu etmədilər, sadəcə bir şey gördülər.
                    Bir müddət sonra onlara aydın görünürdü.
                    <span>- Steve Job</span>
                  </p>
        </div>
        <div className="mission-image">
          <img src={attackImage} alt=""/>
        </div>
      </div>

      <div className="chooseUs flex j-between py-96 ">
        <div className="chooseUsimage" data-aos="fade-right">
          <img src={whyImage} alt=""/>
        </div>
       <div className="chooseUsText" data-aos="fade-left">
         <h1 className="mission-title">Niyə Bizi Seçin</h1>
         <p>
         Biz həmişə yeni olan istehsalçılar haqqında məlumatlarımızı yeniləyirik
          Fabriklər məhsulun əhatə dairəsi, keyfiyyəti ilə bağlı tərəfimizdən qiymətləndirilir
          Bu Malın yaradıldığı, istehsal gücü, şəraiti,
           fiskal imkanlar, texnologiya yönümlülük, insan gücü şərtləri,
            idarəetmə səmərəliliyi və keyfiyyət siyasəti. İlkin qiymətləndirməmizdən sonra
            bitdikdə, biz də satıcının təsdiqlənməsi və məlumat mübadiləsi barədə qərar qəbul edirik.
         </p>
         <ul>
           <li>Ayrılıb yaşayırlar</li>
           <li>Məhsulun keyfiyyətliyinin qarantiyası</li>
           <li>böyük dil seçimləri</li>
         </ul>
         <a href="#xsaxas" classNameName="btn-shop mt-30">SHOP NOW</a>
       </div>
     
      </div>
    </div>
  </section>
    </div>
  )
}

export default AboutPage