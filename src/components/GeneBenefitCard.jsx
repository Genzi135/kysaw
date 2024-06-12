'use client'
import Image from "next/image";

export default function GeneBenefitCard({ props }) {
    return (
        <div className="flex justify-around items-center flex-col flex-wrap w-72 shadow-lg gap-5 p-5 rounded-md transition-transform duration-300 transform hover:scale-105">
            <Image src={props.path} alt={props.label} width={150} height={150} layout="responsive" loading="lazy" />
            <label className="text-xl font-semibold">{props.title}</label>
            <p className="flex-1">{props.content}</p>
        </div>
    )
}
