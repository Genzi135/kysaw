'use client'
import Image from "next/image";

export default function GeneBenefitCard({ props }) {
    return (
        <div className="group relative flex justify-around items-center flex-col flex-wrap w-80 gap-2 p-5 rounded-md transition-transform duration-300 transform ">
            <Image src={props.path} alt={props.label} width={150} height={150} layout="responsive" loading="lazy" className="transition-transform duration-300 group-hover:scale-110" />
            <label className="text-lg md:text-lg font-manropeBold ">{props.title}</label>
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-90 transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-5 flex-col">
                <label className="text-lg md:text-lg font-manropeBold ">{props.title}</label>
                <p className="text-md text-center cursor-default">{props.content}</p>
            </div>
        </div>
    )
}
