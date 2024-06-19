import Image from "next/image";
import JH from '../../assets/Partners/JH.jpg'
import GS from '../../assets/Partners/GS.png'
// import Partner1 from '../../assets/Partners/Partner1.jpg'
// import Partner2 from '../../assets/Partners/Partner2.jpg'
import styled from 'styled-components';

const PartnerSliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    gap: 1.25rem;
    margin-top: 1.25rem;
    color: #000;

    .title {
        text-align: center;
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1.25rem;
    }

    .partner-slider {
        width: 100%;
        overflow: hidden;

        .slider-track {
            display: flex;
            gap: 1.25rem;
            animation: scroll 20s linear infinite;

            .partner {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
            }
        }
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-100% / 4)); /* Adjust according to the number of partners */
        }
    }

    @media (min-width: 768px) {
        padding: 2.5rem;
        gap: 2.5rem;

        .title {
            font-size: 1.875rem;
        }

        .partner-slider .slider-track {
            gap: 2.5rem;
        }
    }
`;

export default function PartnerSlider() {
    return (
        <PartnerSliderContainer>
            <label className="title">Đối tác của chúng tôi</label>
            <div className="partner-slider">
                <div className="slider-track">
                    <div className="partner">
                        <Image src={JH} alt="JH logo" width={200} height={200} />
                    </div>
                    <div className="partner">
                        <Image src={GS} alt="GS logo" width={260} height={260} />
                    </div>
                    {/* <div className="partner">
                        <Image src={Partner1} alt="Partner 1 logo" width={200} height={200} />
                    </div>
                    <div className="partner">
                        <Image src={Partner2} alt="Partner 2 logo" width={260} height={260} />
                    </div> */}
                    {/* Duplicate the partners for the continuous effect */}
                    <div className="partner">
                        <Image src={JH} alt="JH logo" width={200} height={200} />
                    </div>
                    <div className="partner">
                        <Image src={GS} alt="GS logo" width={260} height={260} />
                    </div>
                    {/* <div className="partner">
                        <Image src={Partner1} alt="Partner 1 logo" width={200} height={200} />
                    </div>
                    <div className="partner">
                        <Image src={Partner2} alt="Partner 2 logo" width={260} height={260} />
                    </div> */}
                </div>
            </div>
        </PartnerSliderContainer>
    )
}
