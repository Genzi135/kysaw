import Image from "next/image";

export default function TeamCard({ props }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-80 h-96 p-5 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center items-center rounded-full bg-gray-100">
                <Image src={props.image} alt="image" width={150} height={150} />

            </div>
            <div className="flex justify-center items-center">
                <label className="text-lg font-semibold">{props.name}</label>
            </div>
            <div className="flex justify-center items-center">
                <label className="text-base">{props.position}</label>
            </div>
            <div className="flex justify-center items-center">
                <label className="text-sm">{props.major}</label>
            </div>
            <div className="flex justify-center items-center">
                <label className="text-sm">{props.description}</label>
            </div>
        </div>
    )
}