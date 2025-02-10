import "./MainContent.scss";
import Image from "next/image";
import Link from "next/link";
import LoadingContent from "../Loading-content/LoadingContent";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function MainContent({ dataApi }) {
    const { ref, inView } = useInView({ threshold: 0.6 });
    const [currentCard, setCurrentCard] = useState(14)
    const [updateData, setUpdateData] = useState(dataApi?.slice(0, 14) || [])

    

    useEffect(() => {
        if (inView && dataApi) {
            setCurrentCard(prev => prev + 8)
        }
    }, [inView])

    useEffect(() => {
        if (dataApi) {
            const uniqueData = dataApi
                .slice(0, currentCard)
                .filter((item, index, self) =>
                    index === self.findIndex((el) => el.content === item.content)
                );
    
            setUpdateData(uniqueData);
        }
    }, [currentCard, dataApi]);

    return (
        <div className="content-wrapper">
            <div className="content-title">
                <div className="content-text">Свежие новости</div>
                <div className="content-separation"></div>
            </div>
            <div className="news-feed">
                {updateData && updateData.length > 0 ? (
                    updateData.map(({ id, translated_title, published_date, image_url }) => {
                        const text = translated_title.length > 51 ? translated_title.slice(0, 51).trim() + "..." : translated_title;
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
