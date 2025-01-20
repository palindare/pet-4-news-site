import "./SliderContainer.scss";
import Slider from "./Slider/Slider";
import SideColumn from "./Side-column/SideColumn";

function SliderContainer() {
    return (
        <>
            <div className="marking-slider_container">
                <div className="slider-container">
                    <div className="title-slider_container">
                        <div className="title-slider_text">
                            <span>Тренды недели</span>
                        </div>
                        <div className="title-slider_separation">
                            <span></span>
                        </div>
                    </div>
                    <div className="carousel-container">
                        <Slider/>
                        <SideColumn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderContainer;
