import Image from "next/image";

export default function ReasonCard({ props }) {
    return (
        <div className="flex justify-start items-center p-2 md:p-5 bg-white rounded-md md:min-w-[40%] gap-5">
            <Image src={props.image} alt="logo" width={150} height={150} className="bg-gray-100" />
            <label className="text-xl font-manropeBold">{props.title}</label>
        </div>
    )
}