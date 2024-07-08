'use client'
import CertificateSlider from "@/components/CertificateSlider";


export default function Consultants() {

    const list = [
        {
            id: 1,
            content: 'Bằng mặt nhưng không bằng lòng'
        }, {
            id: 2,
            content: 'Bằng chíu bằng chíu'
        }, {
            id: 3,
            content: 'Chứng nào tật nấy'
        }, {
            id: 4,
            content: 'Bằng lòng đi em anh dìa quê dắt má lên liền'
        }, {
            id: 3,
            content: 'Chứng minh thư (hết hạn)'
        },
    ]

    const consultants = [
        {
            id: 1,
            name: "Alice Nguyen",
            position: "Chief Geneticist",
            photo: "https://via.placeholder.com/150",
            bio: "Alice has 25 years of experience in genetic engineering and is the chief architect of our gene therapy programs."
        },
        {
            id: 2,
            name: "Robert Lee",
            position: "Bioinformatics Specialist",
            photo: "https://via.placeholder.com/150",
            bio: "Robert specializes in bioinformatics, leveraging computational tools to advance our genetic research."
        },
        {
            id: 3,
            name: "Linda Tran",
            position: "Clinical Genomics Scientist",
            photo: "https://via.placeholder.com/150",
            bio: "Linda focuses on translating genomic discoveries into clinical applications, improving patient outcomes."
        },
        {
            id: 4,
            name: "David Kim",
            position: "Molecular Biologist",
            photo: "https://via.placeholder.com/150",
            bio: "David's expertise in molecular biology drives our research on genetic mutations and their implications."
        },
        {
            id: 5,
            name: "Jessica Pham",
            position: "Genetics Researcher",
            photo: "https://via.placeholder.com/150",
            bio: "Jessica conducts cutting-edge research in human genetics, contributing to our understanding of hereditary diseases."
        },
        {
            id: 6,
            name: "James Ho",
            position: "Gene Therapy Specialist",
            photo: "https://via.placeholder.com/150",
            bio: "James develops innovative gene therapy treatments aimed at curing genetic disorders."
        },
        {
            id: 7,
            name: "Sophia Le",
            position: "Biotech Engineer",
            photo: "https://via.placeholder.com/150",
            bio: "Sophia integrates engineering principles with biological sciences to advance our genetic engineering projects."
        },
        {
            id: 8,
            name: "Michael Tran",
            position: "Genomic Data Analyst",
            photo: "https://via.placeholder.com/150",
            bio: "Michael analyzes genomic data to identify genetic variations associated with various diseases."
        },
        {
            id: 9,
            name: "Emily Nguyen",
            position: "Research Scientist",
            photo: "https://via.placeholder.com/150",
            bio: "Emily's research focuses on understanding the genetic basis of complex traits and diseases."
        },
        {
            id: 10,
            name: "Daniel Nguyen",
            position: "Genetics Lab Manager",
            photo: "https://via.placeholder.com/150",
            bio: "Daniel oversees the daily operations of our genetics lab, ensuring all research is conducted efficiently."
        },
        {
            id: 11,
            name: "Sarah Park",
            position: "Epigenetics Researcher",
            photo: "https://via.placeholder.com/150",
            bio: "Sarah investigates the role of epigenetic changes in gene expression and disease."
        },
        {
            id: 12,
            name: "Kevin Vo",
            position: "Genomics Project Manager",
            photo: "https://via.placeholder.com/150",
            bio: "Kevin manages large-scale genomics projects, coordinating efforts across multiple teams."
        },
        {
            id: 13,
            name: "Anna Phan",
            position: "Genetic Counselor",
            photo: "https://via.placeholder.com/150",
            bio: "Anna provides genetic counseling to patients, helping them understand their genetic risks and options."
        },
        {
            id: 14,
            name: "William Bui",
            position: "Genomics Educator",
            photo: "https://via.placeholder.com/150",
            bio: "William educates healthcare professionals and the public about the latest advancements in genomics."
        },
        {
            id: 15,
            name: "Natalie Vo",
            position: "Genomics Policy Advisor",
            photo: "https://via.placeholder.com/150",
            bio: "Natalie advises on policies related to genomic research and its ethical implications."
        }
    ];

    const user = {
        id: 1,
        name: "Alice Nguyen",
        position: "Chief Geneticist",
        photo: "https://via.placeholder.com/150",
        bio: "Alice has 25 years of experience in genetic engineering and is the chief architect of our gene therapy programs."
    }


    return (
        <div className="mt-20 scroll-smooth flex flex-col justify-center items-center">
            <div className="flex max-w-[1220px] w-full h-auto justify-center items-center p-10 max-h-[500px] bg-gray-200">
                <div className="rounded-box bg-black max-h-[500px] max-w-[400px]">
                    <img src="https://res.cloudinary.com/diribdgsz/image/upload/v1720432426/chat-app/PicsArt_01-15-12.02.38_bigiqm.jpg" alt="avatar" className="w-[auto] h-[auto] max-h-[500px] max-w-[400px]" />
                </div>
                <div className="w-full h-full flex flex-col p-5">
                    <label className="font-manropeBold text-4xl">Genzi </label>
                    <label>2 tủi</label>
                    <label>Trình độ 16/12</label>
                    <label>Có phiếu bé ngoan (tự photo)</label>
                    <label>Biết đi xe máy, không biết đi xe đợp</label>
                    <label>Chứng nhận - bằng cấp:</label>
                    <CertificateSlider props={list} />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[1220px] x-full">
                <label> Tư vấn viên</label>
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src={user.photo} alt={user.name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{user.name}</div>
                        <p className="text-gray-700 text-base">
                            {user.position}
                        </p>
                        <p className="text-gray-700 text-base">
                            {user.bio}
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
                    <img className="w-full h-48 object-cover" src={user.photo} alt={user.name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{user.name}</div>
                        <div className="text-gray-700 text-base font-semibold">{user.position}</div>
                        <p className="text-gray-700 text-base mt-2">
                            {user.bio}
                        </p>
                    </div>
                    <div className="w-full flex justify-center items-center p-5">
                        <div className="cursor-pointer hover:text-teal-700" onClick={() => document.getElementById('userDetail').showModal()}>Xem chi tiết</div>
                    </div>
                </div>

                <dialog id="userDetail" className="w-[90vw] h-[90vh] rounded-lg p-5">
                    <div className="flex justify-end items-center">
                        <form method="dialog">
                            <button className=" hover:bg-gray-300 bg-gray-100 rounded-full p-2 w-10 h-10 flex justify-center items-center cursor-pointer" >X</button>
                        </form>
                    </div>
                    <div>Thông tin chi tiết</div>
                </dialog>

            </div>
        </div>
    )
}