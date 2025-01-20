import "./Slider.scss";
import Image from "next/image";
import Link from "next/link";
import bookmark_img from "../../images/News-gallery/bookmark.png"
import arrow_img from "../../images/Slider-container/next-arrow.png"

function Slider() {
    return (
        <>
            <div className="slider">
                <div className="slider-card">
                    <div className="slider-info">
                        <div className="slider-post_tags">
                            <div className="slider-bookmark_icon">
                                <Image src={bookmark_img} alt="image" />
                            </div>
                            <div className="slider-category_text">
                                <Link href="#">
                                    <span>Стиль</span>
                                </Link>
                            </div>
                        </div>
                        <div className="slider-post_title"><Link href="#">Осень — время, когда погода меняется быстро, и многослойные образы становятся не только модными. </Link></div>
                        <div className="slider-post_date"><Link href="#">Декабрь 21.2024г</Link></div>
                        <div className="slider-next_arrow slider-arrow"><Image src={arrow_img} alt="img" /></div>
                        <div className="slider-previous_arrow slider-arrow"><Image src={arrow_img} alt="img"/></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider;
