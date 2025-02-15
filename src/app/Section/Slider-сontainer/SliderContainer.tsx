"use client"
import "./SliderContainer.scss";
import Slider from "./Slider/Slider";
import SideColumn from "./Side-column/SideColumn";
import LoadingSideColumn from "./loading-Slider/LoadingSlider";
import LoadingSlider from "./loading-Slider/LoadingSlider";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/app/store/store";


function SliderContainer({dataApi}) {

    let sliderData = dataApi ? dataApi.slice(4,8) : []
    return (
        <>
        <Provider store={store}>
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
                        {sliderData ? <><Slider data={sliderData} /><SideColumn data={sliderData} /></> : <LoadingSlider/>}  
                    </div>
                </div>
            </div>
        </Provider>
        </>
    )
}

export default SliderContainer;
