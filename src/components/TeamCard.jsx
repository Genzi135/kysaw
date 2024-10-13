import Image from "next/image";

export default function TeamCard({ props }) {
    return (
        <div className="flex flex-col justify-center items-center max-w-[400px] ">
            <div className="flex justify-center items-center">
                <Image src={props.image} alt="image" width={350} height={350} />
            </div>
            {/* <div className="flex justify-center items-center">
                <label className="text-lg font-manropeBold">{props.name}</label>
            </div>
            <div className="flex justify-center items-center">
                <label className="text-base text-center">{props.position}</label>
            </div>
            <div className="flex justify-center items-center">
                <label className="text-sm text-center">{props.major}</label>
            </div>
            <div className="flex justify-center items-center">
                <label className="text-sm text-center">{props.description}</label>
            </div> */}
        </div>
    )
}