"use client"
import "./Section.scss";
import DynamicCategory from "./Dynamic-category/DynamicCategory";
import MainLayout from "./Main-layout/MainLayout";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import storeNews from "./store-news/storeNews";


function Section () {
  const [dataApi,setDataApi] = useState([])
  useEffect(() => {
    const getAPI = async () => {
      const res = await fetch("http://localhost:3001", { next: {revalidate: 3600}})
      setDataApi(await res.json())
    }
    getAPI()
  },[])
  return (
    <Provider store={storeNews}>
      <DynamicCategory data={dataApi}/>
      <MainLayout data={dataApi}/> 
    </Provider>
)
}

export default Section;
