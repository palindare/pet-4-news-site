"use client";
import "./PageNumbers.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function PageNumbers({ data }) {
    const state = useSelector(state => state.currentCategory.page);
    const [allPage, setAllPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(state);
    const [prevBtn, setPrevBtn] = useState(false);
    const [nextBtn, setNextBtn] = useState(true);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && data.length !== 0) {
            const totalPages = Math.ceil(data.length / 8);
            setAllPage(totalPages);
            setNextBtn(totalPages > 1);
            if (state !== currentPage) {
                setCurrentPage(state)
            }
        }
    }, [data,state]);

    const changePageNum = (value) => {
        setCurrentPage(value);
        dispatch({ type: "CHANGE_PAGE", payload: value });
        setPrevBtn(value > 1);
        setNextBtn(value < allPage);
    };

    const changePrev = () => {
        if (currentPage === 1) return;
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        dispatch({ type: "CHANGE_PAGE", payload: newPage });
        setPrevBtn(newPage > 1);
        setNextBtn(newPage < allPage);
    };

    const changeNext = () => {
        if (currentPage === allPage) return;
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
        dispatch({ type: "CHANGE_PAGE", payload: newPage });
        setPrevBtn(newPage > 1);
        setNextBtn(newPage < allPage);
    };

    return (
        <div className="page-numbers">
            <button 
                style={{ opacity: prevBtn ? "1" : "0.6" }} 
                onClick={changePrev} 
                className="previous"
            >
                &lt; Previous
            </button>

            {currentPage - 1 > 0 && (
                <div onClick={() => changePageNum(currentPage - 1)} className="number">
                    {currentPage - 1}
                </div>
            )}

            <div className="number-active">{currentPage}</div>

            {currentPage + 1 <= allPage && (
                <div onClick={() => changePageNum(currentPage + 1)} className="number">
                    {currentPage + 1}
                </div>
            )}

            <button 
                style={{ opacity: nextBtn ? "1" : "0.6" }} 
                onClick={changeNext} 
                className="next"
            >
                Next &gt;
            </button>
        </div>
    );
}

export default PageNumbers;
