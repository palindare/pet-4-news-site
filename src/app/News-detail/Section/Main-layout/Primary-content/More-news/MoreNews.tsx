import "./MoreNews.scss";
import Image from "next/image";
import Link from "next/link";
import LoadingMoreNews from "./Loading-news/LoadingMoreNews";
import { useState, useEffect } from "react";

function MoreNews() {
  const [dataApi, setDataApi] = useState([]);
  const [randomNews, setRandomNews] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const res = await fetch("http://localhost:3000/test.json", {
        next: { revalidate: 3600 },
      });
      const data = await res.json();
      setDataApi(data);
    };
    getAPI();
  }, []);

  useEffect(() => {
    if (dataApi.length > 0) {
      // Перемешивание массива (алгоритм Фишера-Йетса)
      const shuffled = [...dataApi].sort(() => 0.5 - Math.random());
      setRandomNews(shuffled.slice(0, 12)); // Берём 12 случайных элементов
    }
  }, [dataApi]); // Вызываем, когда изменился dataApi

  return (
    <div className="more-news_container">
      <div className="more-news_items">
        <div className="more-news_separation"></div>
        <div className="more-news_title">Больше новостей</div>
        <div className="more-news_separation"></div>
      </div>
      
      {randomNews?.length > 0 ? (
        <div className="more-news_wrapper">
          {randomNews.map(({ image_url, id, translated_title, category }) => {
            const text =
              translated_title.length > 45
                ? translated_title.slice(0, 45) + "..."
                : translated_title;

            return (
              <div key={`${id}-${translated_title}`} className="card-news">
                <Link href={`/news/${category}/${id}`} passHref>
                  <div className="card-image">
                    <Image
                      src={image_url}
                      alt="img"
                      layout="responsive"
                      width={225}
                      height={150}
                      objectFit="cover"
                    />
                  </div>
                  <div className="card-description">
                    <div className="card-info">{text}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingMoreNews />
      )}
    </div>
  );
}

export default MoreNews;
