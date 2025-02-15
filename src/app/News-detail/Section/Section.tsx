"use client"
import "./Section.scss";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import DynamicCategoryDetail from "./Dynamic-category/DynamicCategoryDetail";

function Section () {
  const [dataApi,setDataApi] = useState([])
  useEffect(() => {
    const getAPI = async () => {
      const res = await fetch("http://localhost:3000/test.json", { next: {revalidate: 3600}})
      setDataApi(await res.json())
    }
    getAPI()
  },[])

  console.log(dataApi)
  
  return (
    <DynamicCategoryDetail data={dataApi}/>
)
}

export default Section;
