"use client";
import "./Slider.scss";
import Image from "next/image";
import Link from "next/link";
import bookmark_img from "../../images/News-gallery/bookmark.png"
import arrow_img from "../../images/Slider-container/next-arrow.png";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Slider({ data }) {
  const [slideNum, setSlideNum] = useState(0); // Текущий номер слайда
  const [slideData, setSlideData] = useState([]); // Данные слайдов
  const [currentTransition, setCurrentTransition] = useState(false); // Флаг для перехода
  const [transitionDelay, setTransitionDelay] = useState(true); // Флаг задержки перехода
  const state = useSelector((state) => state.currentSlide.slide); // Состояние слайдера
  const intervalRef = useRef(null); // Ссылка на интервал для автоперехода
  const dispatch = useDispatch();

  
  // Обновление данных слайдов
  useEffect(() => {
    if (data && data.length) {
      const dataSlider = [
        data[data.length - 2] || null,
        data[data.length - 1] || null,
        ...data,
        data[0] || null,
      ];
      setSlideData(dataSlider);
    }
  }, [data]);

  // Автоматическое переключение слайдов с перезапуском интервала
  const startAutoSlide = () => {
    if (intervalRef.current) {  
      clearInterval(intervalRef.current); // Останавливаем текущий интервал
    }
    intervalRef.current = setInterval(nextSlide, 5000); // Новый интервал
  };

  useEffect(() => {
    if (data && data.length) {    
      startAutoSlide(); // Запускаем интервал при монтировании компонента
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current); // Очистка интервала при размонтировании
        }
      };
    }
  }, [slideNum, state]); // Перезапуск интервала каждый раз, когда меняется slideNum

  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    if (transitionDelay) {
      setCurrentTransition(true);
      if (slideNum !== 4) {
        dispatch({ type: "CHANGE_SLIDE", payload: state + 1 });
      } else {
        dispatch({ type: "CHANGE_SLIDE", payload: 1 });
      }
      setSlideNum((prevSlide) => prevSlide + 1);
      setTransitionDelay(false);
      startAutoSlide(); // Перезапуск интервала
    }
  };

  // Функция для перехода к предыдущему слайду
  const previousSlide = () => {
    if (transitionDelay) {
      setCurrentTransition(true);
      dispatch({ type: "CHANGE_SLIDE", payload: state - 1 });
      setSlideNum((prevSlide) => prevSlide - 1);
      setTransitionDelay(false);
      startAutoSlide(); // Перезапуск интервала
    }
  };

  // Обработка бесконечных переходов
  const infiniteTransit = () => {
    setTransitionDelay(true);
    if (slideNum >= slideData.length - 2) {
      setSlideNum(1);
      dispatch({ type: "CHANGE_SLIDE", payload: 1 });
      setCurrentTransition(false);
    } else if (slideNum <= 0) {
      setSlideNum(slideData.length - 3);
      dispatch({ type: "CHANGE_SLIDE", payload: slideData.length - 3 });
      setCurrentTransition(false);
    }
  };

  // Пауза на наведении
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Останавливаем автопереходы
    }
  };

  const handleMouseLeave = () => {
    startAutoSlide(); // Возвращаем автопереходы
  };


  return (
    <div
      className="slider"
      onMouseEnter={handleMouseEnter} // Остановка автоперехода на наведении
      onMouseLeave={handleMouseLeave} // Возобновление автоперехода при уходе мыши
    >
      {slideData &&
        slideData.map(({ translated_title, image_url, category,id, published_date }, index) => {
          const date = new Date(published_date);
          const formattedDate = date.toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: "Europe/Moscow",
          });
  
          return (
            <div
              key={index} // Prefer a unique `id` if available
              onTransitionEnd={infiniteTransit}
              style={{
                transition: currentTransition ? "all 0.3s" : "none",
                transform: `translateX(${(index - slideNum) * 100}%)`,
              }}
              className="slider-card-main"
            >
              <div className="slider-image_card">
              <Link href={`/news/${category}/${id}`}><Image src={image_url} width={400} height={700} alt="img" /></Link>
              </div>
              <div className="slider-card">
                <div className="slider-info">
                  <div className="slider-post_title">
                    <Link href="#">{translated_title}</Link>
                  </div>
                  <div className="slider-post_tags">
                    <div className="slider-bookmark_icon">
                    <Link href={`/news/${category}`}>
                      <Image src={bookmark_img} alt="image" />
                    </Link>
                    </div>
                    <div className="slider-category_text">
                      <Link href={`/news/${category}`}>
                        <span>{category}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="slider-post_date">{formattedDate}</div>
                </div>
              </div>
            </div>
          );
        })}
  
      {slideData && slideData.length > 1 && ( // Ensure there are slides before showing controls
        <>
          <div onClick={nextSlide} className="slider-next_arrow slider-arrow">
            <Image src={arrow_img} alt="Next Slide" />
          </div>
          <div onClick={previousSlide} className="slider-previous_arrow slider-arrow">
            <Image src={arrow_img} alt="Previous Slide" />
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
