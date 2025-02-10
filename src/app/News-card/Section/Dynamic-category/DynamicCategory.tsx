"use client"
import { useEffect, useState } from "react";
import "./DynamicCategory.scss";
import { useSelector } from "react-redux";


function DynamicCategory({ data }) {
  const state = useSelector(state => state.currentCategory.category)
  const [currentData, setCurrentData] = useState([])
  const categoryTitle =
    [
      {
        category: "Technology",
        title: "Погрузитесь в новейшие гаджеты, кибербезопасность, прорывы в области искусственного интеллекта и преобразующее влияние технологий на общество и образ жизни отдельных людей."
      },
      {
        category: "Entertainment",
        title: "Узнайте все о новинках кино, сериалов, музыки и шоу-бизнеса. Будьте в курсе ярких событий и трендов в мире развлечений!"
      },
      {
        category: "Health",
        title: "Советы по здоровью, последние медицинские исследования и лайфхаки для поддержания хорошего самочувствия. Будьте здоровы каждый день!"
      },
      {
        category: "Sports",
        title: "Свежие новости спорта, обзоры матчей, результаты соревнований и истории великих побед. Будьте в центре спортивных событий!"
      },
      {
        category: "Business",
        title: "Актуальные новости бизнеса, финансовые тренды, инвестиции и аналитика рынка. Будьте в курсе экономических событий!"
      },
      {
        category: "Politics",
        title: "Последние новости политики, аналитика, международные отношения и ключевые события, влияющие на мир. Будьте в курсе главных решений и изменений!"
      },
    ]

  useEffect(() => {
    if (state) {
      const data = categoryTitle.filter(value => value.category === state)
      setCurrentData(data)
    }
  }, [state])

  console.log(state)

  return (
    <div className="marking-dynamic_category">
      <div className="dynamic-category">
        {data && data.length !== 0 ? (
          currentData?.map(({ category, title }) => (
            <div className="dinamic-category_container" key={`${category}-${title}`}>
              <div className="dynamic-category_title">{category}</div>
              <div className="dynamic-category_discription">{title}</div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}

export default DynamicCategory;
