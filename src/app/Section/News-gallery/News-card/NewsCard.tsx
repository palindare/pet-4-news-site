import { v4 as uuidv4 } from 'uuid';
import "./NewsCard.scss";
import NewsCardBig from "./News-card-big/NewsCardBig";
import NewsCardMini from "./News-card-mini/NewsCardMini";

function NewsCard({ newsData }) {
  return (
    <>
      {newsData &&
        newsData.map(({ translated_title, image_url, published_date, category, main }) => {
          const uniqueKey = uuidv4();  
          return main ? (
            <NewsCardBig
              key={uniqueKey}  
              translated_title={translated_title}
              image_logo={image_url}
              published_date={published_date}
              category={category}
            />
          ) : (
            <NewsCardMini
              key={uniqueKey} 
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
