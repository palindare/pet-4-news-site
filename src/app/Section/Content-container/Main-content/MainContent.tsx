import "./MainContent.scss";
import Image from "next/image";
import Link from "next/link";
import LoadingContent from "../Loading-content/LoadingContent";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function MainContent({ dataApi }) {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const [currentCard, setCurrentCard] = useState(12)
    const [updateData, setUpdateData] = useState(dataApi?.slice(0, 12) || [])
    useEffect(() => {
        if (inView && dataApi) {
            setCurrentCard(prev => prev + 6)
        }
    }, [inView])

    useEffect(() => {
        if (dataApi) {
            setUpdateData(dataApi.slice(0, currentCard))
        }
    }, [currentCard, dataApi])

    return (
        <div className="content-wrapper">
            <div className="content-title">
                <div className="content-text">Свежие новости</div>
                <div className="content-separation"></div>
            </div>
            <div className="news-feed">
                {updateData && updateData.length > 0 ? (
                    updateData.map(({ id, title, published_date, image_url }) => {
                        const text = title.length > 57 ? title.slice(0, 57).trim() + "..." : title;
                        const date = new Date(published_date).toLocaleString("ru-RU", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            timeZone: "Europe/Moscow",
                        });

                        return (
                            <div key={id} className="news-card">
                                <div className="news-card_image">
                                    <Image src={image_url} alt="news image" width={400} height={700} />
                                </div>
                                <div className="news-card_box">
                                    <div className="news-card_title">
                                        <Link href="#">{text}</Link>
                                    </div>
                                    <div className="news-card_data">
                                        <Link href="#">{date}</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <LoadingContent />
                )}

            </div>
                <div ref={ref} className="trigger-infinite_scroll" />
        </div>
    );
}

export default MainContent;
