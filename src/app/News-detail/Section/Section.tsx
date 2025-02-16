"use client";
import "./Section.scss";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import DynamicCategoryDetail from "./Dynamic-category/DynamicCategoryDetail";
import MainLayout from "./Main-layout/MainLayout";

function Section() {
  const [dataApi, setDataApi] = useState([]);      // Для хранения всех данных
  const [currentData, setCurrentData] = useState(null);  // Для хранения выбранных данных
  const router = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const res = await fetch("http://localhost:3000/test.json", { next: { revalidate: 3600 } });
      const data = await res.json();
      setDataApi(data);  // Сохраняем все данные

      // Ищем текущие данные по id из URL
      const currentData = data.find(({ id }) => String(id) === router.id);
      setCurrentData(currentData);  // Обновляем текущее состояние
    };

    getAPI();
  }, [router.id]);  // Следим за изменением router.id

  return (
    <>
      <DynamicCategoryDetail data={currentData} />
      <MainLayout data={currentData} />
    </>
  );
}

export default Section;
