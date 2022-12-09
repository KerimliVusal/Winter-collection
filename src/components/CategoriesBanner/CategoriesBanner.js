import React from 'react'
import './style.scss'
function CategoriesBanner() {
  return (
    <div className="categories flex j-between">
    <a
      href="category.html?Category=Women"
      className="category-box"
      data-aos="fade-right"
    >
      <img src="https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/banner1.webp" alt="" />
      <span className="c-box-text">
        <h2 className="box-title">Qadın</h2>
        <p>Yaz 2022</p>
        <button className="category-btn">İNDİ AL</button>
        <div className="stick"></div>
      </span>
    </a>
    <a
      href="category.html?Category=Men"
      className="category-box"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <img src="https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/banner2.webp" alt="" />
      <span className="c-box-text">
        <h2 className="box-title">Kişi</h2>
        <p>Yaz 2022</p>
        <button className="category-btn">İNDİ AL</button>
        <div className="stick"></div>
      </span>
    </a>
    <a
      href="category.html?Category=Watches"
      className="category-box"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <img src="https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/banner3.webp" alt="" />
      <span className="c-box-text">
        <h2 className="box-title">Aksesuarlar</h2>
        <p>Yeni Trend</p>
        <button className="category-btn">İNDİ AL</button>
        <div className="stick"></div>
      </span>
    </a>
  </div>
  )
}

export default CategoriesBanner