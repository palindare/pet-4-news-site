"use client";
import "./DynamicCategoryDetail.scss";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import bookmark_img from "../../images/bookmark.png"

function DynamicCategoryDetail({ data }) {

  return (
    <div className="marking-dynamic_detail">
      <div className="dynamic-detail">
        <div className="dynamic-detail_container">
        <Link href={`/news/${data?.category}`}>
        {data ? ( 
          <div className="dynamic-detail_items">
            <div className="dynamic-detail_image"><Image src={bookmark_img} alt="img"/></div>
            <div className="dynamic-detail_title">{data?.category || null}</div>
          </div>
        ) : (null)}
        </Link>
          <div className="dynamic-detail_discription">{data?.translated_title || null}</div>
        </div>
      </div>
    </div>
  );
}

export default DynamicCategoryDetail;
