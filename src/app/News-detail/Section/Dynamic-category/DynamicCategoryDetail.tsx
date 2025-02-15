"use client";
import "./DynamicCategoryDetail.scss";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import bookmark_img from "../../images/bookmark.png"

function DynamicCategoryDetail({ data }) {
  const [currentData, setCurrentData] = useState(null);
  const router = useParams();

  useEffect(() => {
    if (!router.id) return;
    const res = data.find(({ id }) => String(id) === router.id);
    setCurrentData(res || {});
  }, [data, router.id]); 

  return (
    <div className="marking-dynamic_detail">
      <div className="dynamic-detail">
        <div className="dynamic-detail_container">
          <div className="dynamic-detail_items">
            <div className="dynamic-detail_image"><Image src={bookmark_img} alt="img"/></div>
            <div className="dynamic-detail_title">{currentData?.category || null}</div>
            </div>
          <div className="dynamic-detail_discription">{currentData?.translated_title || null}</div>
        </div>
      </div>
    </div>
  );
}

export default DynamicCategoryDetail;
