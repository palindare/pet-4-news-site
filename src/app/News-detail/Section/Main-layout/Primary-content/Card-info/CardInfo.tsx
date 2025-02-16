"use client";
import LoadingMoreNews from "../More-news/Loading-news/LoadingMoreNews";
import MoreNews from "../More-news/MoreNews";
import "./CardInfo.scss";
import Image from "next/image";

function CardInfo({ data }) {
  if (data && data.length !== 0) console.log(data);

  return (
    <div className="card-info_container">
      <div className="card-items">
        {/* Описание */}
        {data ? (
          <div className="card-discription">{data?.translated_description}</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="Load-discriotion"></div>
            <div style={{ width: "60%" }} className="Load-discriotion"></div>
          </div>
        )}

        {/* Изображение */}
        {data?.image_url && data.image_url !== "" ? (
          <div className="card-image">
            <Image src={data.image_url} alt="img" width={700} height={400} />
          </div>
        ) : (
          <div className="load-image"></div>
        )}

        {/* Контент */}
        {data ? (
          <div className="card-content">{data?.translated_content}</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="Load-discriotion"></div>
            <div className="Load-discriotion"></div>
            <div className="Load-discriotion"></div>
            <div className="Load-discriotion"></div>
            <div className="Load-discriotion"></div>
            <div style={{width: "60%"}} className="Load-discriotion"></div>
          </div>
        )}
      </div>
      <MoreNews/> 
    </div>
  );
}

export default CardInfo;
