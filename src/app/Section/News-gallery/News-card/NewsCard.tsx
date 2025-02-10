import "./NewsCard.scss";
import NewsCardBig from "./News-card-big/NewsCardBig";
import NewsCardMini from "./News-card-mini/NewsCardMini";

function NewsCard({ newsData }) {
  return (
    <>
      {newsData &&
        newsData.map(({ translated_title,image_url,published_date,category,main }) => {
          return main ? (
            <NewsCardBig
              key={`${translated_title}-${image_url}`}
              translated_title={translated_title}
              image_logo={image_url}
              published_date={published_date}
              category={category}
            />
          ) : (
            <NewsCardMini
              key={`${translated_title}-${image_url}`} 
              translated_title={translated_title}
              image_logo={image_url}
              published_date={published_date}
              category={category}
            />
          );
        })}
    </>
  );
}

export default NewsCard;
