import "./Section.scss";
import NewsGallery from "./News-gallery/NewsGallery";
import SliderContainer from "./Slider-сontainer/SliderContainer";
import ContentContainer from "./Content-container/ContentContainer";

async function Section() {
    const res = await fetch("http://localhost:3000/test.json");
    const dataApi = await res.json();

    return (
    <>
        <NewsGallery dataApi={dataApi}/>
        <SliderContainer dataApi={dataApi}/>
        <ContentContainer dataApi={dataApi}/>
    </>
    )
}


export default Section;
