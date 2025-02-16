import CardInfo from "./Card-info/CardInfo";
import MoreNews from "./More-news/MoreNews";
import "./PrimaryContent.scss";

function PrimaryContent({data}) {
  return (
    <>
        <CardInfo data={data}/>
    </>
  );
}

export default PrimaryContent;
