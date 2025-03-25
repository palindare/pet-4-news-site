"use client"
import "./Search.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Search() {
    const [currentValue, setCurrentValue] = useState("")
    const router = useRouter()

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && currentValue !== "" && currentValue.trim()) {
            router.push(`/news/search/${currentValue}`)
        }
    }

    return (
        <>
            <div className="container-seach">
                <label className="search-label" htmlFor="search">
                    <input id="search" type="text" placeholder="Поиск новостей" autoComplete="off" onChange={(e) => setCurrentValue(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
                </label>
            </div>
        </>
    )
}

export default Search