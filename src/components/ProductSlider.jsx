import { useState, useRef, useEffect } from 'react';
import { COLOR } from "@/utils/COLORS";
import ProductCard from "./ProductCard";
import ProductData from "@/app/(pages)/product/[id]/data";
import './Style/ProductSlider.css'; // Import your CSS file

export default function ProductSlider() {
    const [isHovered, setIsHovered] = useState(false);
    const cardsRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        const cards = cardsRef.current;
        const scrollWidth = scrollRef.current.scrollWidth;

        const handleScroll = () => {
            if (cards.scrollLeft === 0) {
                cards.scrollLeft = scrollWidth / 2;
            } else if (cards.scrollLeft >= scrollWidth / 2) {
                cards.scrollLeft = 0;
            }
        };

        cards.addEventListener('scroll', handleScroll);

        return () => {
            cards.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-[1220px]">
            <div className="product-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <label className="text-black text-xl md:text-3xl font-manropeBold w-full flex justify-center items-center mb-10">Sản phẩm gen từ chúng tôi</label>
                <div className="cards-container pb-14" ref={cardsRef}>
                    <ul className={`cards ${isHovered ? 'paused' : ''}`} ref={scrollRef}>
                        {/* Double the list to create the looping effect */}
                        {ProductData.map((e, index) => (
                            <li key={index}><ProductCard data={e} /></li>
                        ))}
                        {ProductData.map((e, index) => (
                            <li key={index + ProductData.length}><ProductCard data={e} /></li>
                        ))}
                    </ul>
                </div>
                <div className="btn-container">
                    <a href="/product">
                        <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                            Xem thêm sản phẩm →
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
