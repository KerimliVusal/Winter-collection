import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import anime from 'animejs/lib/anime.es.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import './style.scss'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper'
import { gsap } from 'gsap'
import { useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { useState } from 'react'
import ProductBox from '../../components/ProductBox/ProductBox'
import MenImage from '../../assets/images/s1.png'
import MenImage2 from '../../assets/images/b1.png'
import clothes from '../../assets/images/s1-1.png'
import tshirt from '../../assets/images/b2.png'
import leftTrousers from '../../assets/images/b1-2.png'
import capson from '../../assets/images/b2-3.png'
import trouser from '../../assets/images/b2-1.png'
import Footer from '../../components/Footer/Footer'
import CategoriesBanner from '../../components/CategoriesBanner/CategoriesBanner'
function Home() {
  AOS.init()
  const SlideImg = useRef()
  const alldata = useSelector((state) => state.data.data)
  useEffect(() => {
    gsap.from('.slider-item img', { x: 400, opacity: 0, duration: 1 })
    sliderAnime()
  }, [alldata.HeaderSliders])

  const [toggleFilterModal, SetTogglefilterModal] = useState(false)
  const [toggleSearchInp, SetToggleSearchInp] = useState(false)
  const [ProductCount, SetProductCount] = useState(8)
  const [ActiveCategory, SetActiveCategory] = useState(0)
  const categories = [
    { name: 'Bütün Məhsullar', data: '' },
    { name: 'Qadın', data: 'Women' },
    { name: 'Kişi', data: 'Men' },
    { name: 'Çanta', data: 'Bag' },
    { name: 'Ayaqqabılar', data: 'Shoes' },
    { name: 'Saatlar', data: 'Watches' },
  ]
  let duration = 0

  const sliderAnime = () => {
    anime({
      targets: '.Slider-title',
      rotate: [{ value: -45 }, { value: 0 }],
      translateY: [{ value: -100 }, { value: 0 }],
      translateX: [{ value: -50 }, { value: 0 }],
      opacity: [{ value: 0 }, { value: 1 }],
      duration: 1500,
      loop: 1,
    })
    anime({
      targets: '.Slider-heading',
      translateX: [{ value: 100 }, { value: 0 }],
      opacity: [{ value: 0 }, { value: 1 }],
      duration: 2000,
      loop: 1,
    })

    anime({
      targets: '.Head_section .btn-shop',

      translateY: [{ value: 200 }, { value: 0 }],

      translateX: [{ value: -100 }, { value: 0 }],

      rotate: [
        { value: 0, delay: 100 },
        { value: 360, duration: 1600 },
      ],
      opacity: [{ value: 0 }, { value: 1 }],
      duration: 1000,
    })
  }

  return (
    <div>
      <Swiper
        onSlideChange={() => sliderAnime()}
        className="mySwiper Head_section"
        effect={'fade'}
        centeredSlides="true"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
      >
        {alldata.HeaderSliders?.map((slide) => (
          <SwiperSlide key={slide.id} className="slider-item">
            <div className="wrapper  slider-text">
              <h2 className="Slider-title one">{slide.STitle}</h2>
              <h1 className="Slider-heading">{slide.Sheading}</h1>
              <a href="#dcd" className="btn-shop">
                SHOP NOW
              </a>
            </div>
            <img
              ref={SlideImg}
              src={`https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/${slide.ImgSrc}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="productSection py-96">
        <div className="wrapper">
          <CategoriesBanner />
          <div className="products-overview py-72">
            <h1 className="sectionTitle">MƏHSUL ÜZRƏ</h1>
            <div className="flex j-between">
              <ul className="flex overview-links">
                {categories.map((category, index) => (
                  <li
                    onClick={() => SetActiveCategory(index)}
                    className={index == ActiveCategory ? 'hov-active' : ''}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
              <ul className="overview-buttons flex">
                <li
                  id="filterbtn"
                  className={toggleFilterModal ? 'triangle' : ''}
                  onClick={() => {
                    SetTogglefilterModal(!toggleFilterModal)
                    SetToggleSearchInp(false)
                  }}
                >
                  <i
                    className={
                      toggleFilterModal ? 'fas fa-times' : 'fas fa-filter'
                    }
                  ></i>
                  Filter
                </li>
                <li
                  id="searchbtn"
                  className={toggleSearchInp ? 'triangle' : ''}
                  onClick={() => {
                    SetToggleSearchInp(!toggleSearchInp)
                    SetTogglefilterModal(false)
                  }}
                >
                  <i
                    className={
                      toggleSearchInp ? 'fas fa-times' : 'fas fa-search'
                    }
                  ></i>
                  Axtarış
                </li>
              </ul>
            </div>
            <div
              className={
                toggleFilterModal ? 'filter-modal show' : 'filter-modal'
              }
            >
              <ul className="flex j-between">
                <li className="f-modal-column">
                  <h3>Sort By</h3>
                  <ul className="sub-filters">
                    <li className="activeSort">
                      <a href="#dfsg">Default</a>
                    </li>
                    <li>
                      <a href="#dwwea"> Popularity </a>
                    </li>
                    <li>
                      <a href="#dwwea"> Average rating </a>
                    </li>
                    <li>
                      <a href="#dwwea"> Newness </a>
                    </li>
                    <li>
                      <a href="#dwwea"> Price:Low to High </a>
                    </li>
                    <li>
                      <a href="#dwwea"> Price:High to Low </a>
                    </li>
                  </ul>
                </li>

                <li className="f-modal-column">
                  <h3>Price</h3>
                  <ul className="sub-filters">
                    <li>
                      <a href="#dwwea">All</a>
                    </li>
                    <li>
                      <a href="#dwwea">$0.00 - $50.00</a>
                    </li>
                    <li className="activePrice">
                      <a href="#jv">$50.00 - $100.00</a>
                    </li>
                    <li>
                      <a href="#dwwea">$100.00 - $150.00</a>
                    </li>
                    <li>
                      <a href="#dwwea">$150.00 - $200.00</a>
                    </li>
                    <li>
                      <a href="#dwwea">$200.00+</a>
                    </li>
                  </ul>
                </li>

                <li className="f-modal-column">
                  <h3>Color</h3>
                  <ul className="sub-filters">
                    <li className="colors">
                      <div></div>
                      <a href="#dfsf">Black</a>
                    </li>
                    <li className="colors">
                      <div></div>
                      <a href="#dfsf">Blue</a>
                    </li>
                    <li className="colors">
                      <div></div>
                      <a href="#dfsf">Grey</a>
                    </li>
                    <li className="colors activeColor">
                      <div></div>
                      <a href="#dfsf">Green</a>
                    </li>
                    <li className="colors">
                      <div></div>
                      <a href="#dfsf">Red</a>
                    </li>
                    <li className="colors">
                      <div></div>
                      <a href="#dfsf">White</a>
                    </li>
                  </ul>
                </li>
                <li className="f-modal-column">
                  <h3>Tags</h3>
                  <ul className="tags flex">
                    <li className="activeTag">
                      <a href="#jhv">Fashion</a>
                    </li>
                    <li>
                      <a href="#wefre">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#wefre">Denim</a>
                    </li>
                    <li>
                      <a href="#wefre">Streetstyle</a>
                    </li>
                    <li>
                      <a href="#wefre">Crafts</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className={
                toggleSearchInp ? 'filter-search show' : 'filter-search'
              }
            >
              <input
                type="search"
                name=""
                placeholder="Search"
                id="searchInput"
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="products flex">
              {alldata.products
                ?.filter(
                  (product) =>
                    product.Category ==
                    (categories[ActiveCategory].data || product.Category),
                )
                ?.slice(0, ProductCount)
                .map((product, index) => {
                  duration > 4 ? (duration = 0) : ++duration

                  return (
                    <ProductBox
                      product={product}
                      key={product.id}
                      index={index}
                      duration={duration}
                    />
                  )
                })}
              <button
                className={
                  ProductCount >
                  alldata.products?.filter(
                    (product) =>
                      product.Category ==
                      (categories[ActiveCategory].data || product.Category),
                  )?.length
                    ? 'hidden'
                    : 'loadBtn'
                }
                onClick={() => SetProductCount(ProductCount + 4)}
              >
                Load more
              </button>
            </div>
          </div>
        </div>

        <div className="product-modal">
          <div className="product-modal-inner flex"></div>
        </div>
      </section>

      <section className="bestProduct-area">
        <div className="wrapper">
          <div className="bestArea">
            <img
              className="bestArea-Mainimg"
              data-aos="fade-right"
              data-aos-delay="300"
              src={MenImage}
              alt=""
            />
            <img className="bestArea-img" src={clothes} alt="" />
            <div className="Best-area-text">
              <h1>Ən Yaxşı Məhsulu Mağazamızdan Tapın</h1>
              <p>Dəbin vəziyyətini yaratmaqda maraqlı olan dizaynerlər.</p>
              <a className="btn-shop mt-20" href="category.html?Category=Men">
                İNDİ AL
              </a>
            </div>
          </div>

          <div className="bestCollection py-96 mt-30 flex j-between">
            <div className="bestCollection-text" data-aos="fade-right">
              <h1>Bu Ayın Ən Yaxşı Kolleksiyası</h1>
              <p>Moda yaratmaqda maraqlı olan dizaynerlər.</p>
              <a href="category.html?Category=Men" className="btn-shop mt-20">
                İNDİ AL
              </a>
              <img src={leftTrousers} alt="" />
            </div>
            <img
              data-aos="zoom-out-right"
              data-aos-delay="250"
              src={MenImage2}
              alt=""
            />
            <ul className="bestCollectionList py-72" data-aos="fade-left">
              <li>
                <span>Kişi Qış köynəyi</span>
                <img src={tshirt} alt="" />
              </li>
              <li>
                <span>Kişi Qış şalvarı</span>
                <img src={trouser} alt="" />
              </li>
              <li>
                <span>Kişi Qış Gödəkçəsi</span>
                <img src={capson} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
