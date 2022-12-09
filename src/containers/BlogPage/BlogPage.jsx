import React from 'react'
import './style.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import Slider from "react-slick";
function BlogPage() {
  const alldata=useSelector(state=>state.data.data);
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    centerMargin:"20px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="Blog-section">
      <h1 className="titleforSection">
Bizim Blog</h1>
      </section>
<section className="py-72">
  <div className="wrapper">
    <h4>OXUMALI ŞEYLƏR</h4>
    <h1 className="Slider-heading">Ən Son Məqalələr</h1>
    </div>
    <div className="blog-slider "  data-aos="fade-right">
      <Slider {...settings}>
        {alldata?.blogImages?.map(blogItem=>(
             <div className="BlogSliderItem" key={blogItem.id}>
             <img src={`https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/blog%20images/${blogItem.ImgSrc}`} alt=""/>
             <div className="blogItem-texts">
               <div className="BlogItem-textShown">
                 <p>{blogItem.STitle}</p>
               </div>
               <div className="BlogItem-textHidden">
                 <h2>{blogItem.Sheading}</h2>
                 <p className="mt-30">
                 {blogItem.description}
                 </p>
        
                     <a href="#sdd" className="continuebtn">Oxumağa davam et 
                       <i className="fa-solid fa-chevron-right"></i>
                       <i className="fa-solid fa-chevron-right"></i>
                       <i className="fa-solid fa-chevron-right"></i>
                     
                     </a>
               </div>
             </div>
           </div>
        ))}
      </Slider>
    </div>
  </section>

  <section className="blog-cards-section">
    <div className="wrapper">
      <h1 className="Slider-heading">Ən Populyar Yazılar</h1>
      <div className="flex j-between">
        <div className="blog-cards">
          {
            alldata?.BlogSection?.map(blogCard=>(
              <a href="#cdfvsv" key={blogCard.id} className="blog-card-item" data-aos="fade-right">
              <div className="blog-time">
                <span>{blogCard.time.slice(0,3)}</span>{blogCard.time.slice(3)}
              </div>
                <img src={`https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/blog%20images/${blogCard.ImgSrc}`} alt=""/>
              <div className="blog-card-item-text">
               <h2>{blogCard.Sheading}</h2>
                <p className="mt-30"> {
                  blogCard.description
                }</p>
              </div>
            </a>
            ))
          }
        </div>
        <div className="sideblogCategory">
            <div className="blogInput-group">
              <input type="text" name="" id="blogSearchInp" placeholder="Search Keyword"/>
              <button className="blogSearchbtn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className="sideblogCategoriesDiv">
              <h3 className="SideblogCategoryTitle">Kategoriyalar</h3>
              <ul className="SideblogCategoyUL">
                <li>Moda</li>
                <li>Gözəllik</li>
                <li>Küçə Tərzi</li>
                <li>Həyat Tərzi</li>
                <li>Sənətkarlıq</li>
              </ul>
            </div>

            <div className="SideBlogInstaFeeds">
              <h3 className="SideblogCategoryTitle">Instagram Lentləri</h3>
              <ul className="SideBlogInstaFeedsUl flex j-between">
              {alldata?.blogImages?.map(blogItem=>(
                <li key={blogItem.id}><a href="#sdf">
                  <img  src={`https://raw.githubusercontent.com/T-Ulvi/Fashion-Store/main/images/blog%20images/${blogItem.ImgSrc}`} alt=""/></a></li>
              ))}
                
              </ul>
            </div>

            <div className="sideblogCategoriesDiv">
              <h3 className="SideblogCategoryTitle">Tags</h3>
              <ul className="SideblogTagsUL flex ">
                <li><a href="#dcsac"> Fashion</a></li>
                <li><a href="#dcsac">Crafts </a></li>
                <li><a href="#dcsac"> Denim</a></li>
                <li><a href="#dcsac"> Lifestyle</a></li>
                <li><a href="#dcsac">Inspiration </a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default BlogPage