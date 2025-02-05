import "./SideBar.scss";
import Image from "next/image";
import Link from "next/link";
import ad_img from "../../images/Side-bar/ad.jpg"
import LoadingList from "./Loading-list/LoadingList";
import LoadingImage from "./Loading-image/LoadingImage";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function SideBar({ dataApi }) {
  const [allCategory, setAllCategory] = useState([])
  const {ref, inView } = useInView({ threshold: 0.6 });
  const [currentCard, setCurrentCard] = useState(6)
  const [updateData, setUpdateData] = useState(dataApi?.slice(0, 6) || [])
  const [showMore, setShowMore] = useState(false)
  useEffect(() => {
    if (!dataApi || dataApi.length === 0) return; 

    setAllCategory(prevCategories => {
      const newCategories = [...prevCategories]; 

      dataApi.forEach(({ image_url, category }) => {
        if (newCategories.every(item => item.category !== category)) {
          newCategories.push({ category, image: image_url }); 
        }
      });

      return newCategories;
    });

  }, [dataApi]);

 
  useEffect(() => {
      if (inView && dataApi) {
          setCurrentCard(prev => prev + 6)
      }
  }, [inView])

  useEffect(() => {
      if (dataApi) {
          setUpdateData(dataApi.slice(0, currentCard))
      }
  }, [currentCard, dataApi])

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <div className="category-list">
            {allCategory && allCategory.length !== 0 ? allCategory.map(({ category, image }) => {
              return (
                <div key={`${category}-${image}`} className="category-tab">
                  <div className="category-img">
                    <Image src={image} alt="img" width={400} height={700} />
                  </div>
                  <div className="category-text"><Link href="#">{category}</Link></div>
                </div>
              )
            }) : <LoadingList/>}

          </div>
          <div className="ad-container">
            <div className="ad-card">
              <div className="ad-card-image"><Image src={ad_img} alt="image" /></div>
              <div className="ad-card-content">
                <div className="ad-main-text">Ваша реклама здесь</div>
                <div className="ad-text">Ad Size: 394x300 px</div>
                <div className="ad-button"><Link href="#"><button>Купить</button></Link></div>
              </div>
            </div>
          </div>
          <div className="gallery-container">
            <div className="gallery-content">
              <div className="gallery-title">Галерея</div>
              <div className="gallery-separation"></div>
            </div>
            <div className="gallery-wrapper">
            {updateData && updateData.length !== 0? updateData.map(({image_url}) => {
              return (
                <Link key={`${image_url}`} href="#"><div className="gallery-card"><Image style={{opacity: showMore ? "1" : "0.6"}} src={image_url} alt="image" width={400} height={700}/></div></Link>
              )
            }) : <LoadingImage/>}
            </div>
            <div className="show-more_btn">
             {updateData.length !== 0 ? <button style={{display: showMore ? "none" : "block"}} onClick={() => setShowMore(!showMore)} className="show-more">Показать ещё</button> : null} 
            </div>
            <div style={{display: showMore ? "block" : "none"}}  ref={ref} className="trigger-infinite_scroll" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar;
