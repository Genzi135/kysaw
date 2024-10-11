'use client'
import { useState } from "react";
import { COLOR } from "../utils/COLORS";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import axios from "axios";

export default function ModalContact({ closeModal }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        try {
            const response = await axios({
                url: "/api/sendEmail",
                method: 'POST',
                data: { formData }
            })
            console.log(response);
        } catch (error) {
            console.log(error);
            alert("Failed to send email. Please try again later.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-auto">
                <div className='flex justify-between items-center pl-5 pr-5'>
                    <h2 className="text-2xl mb-4 pt-5">Tư vấn miễn phí</h2>
                    <button className="top-2 right-2 text-gray-500 flex justify-center items-center rounded-full hover:bg-gray-200 p-1" onClick={closeModal}>
                        <AiOutlineClose size={24} />
                    </button>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-1 justify-start items-start w-80 flex-col gap-5 p-5 rounded-bl-lg' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                        <label className='text-white'>Chúng tôi luôn muốn bạn hiểu rõ về dịch vụ trước khi mua bất kì dịch vụ nào từ chúng tôi vì vậy bạn có thể liên hệ với chúng tôi hoặc để lại tên, số điện thoại và câu hỏi (nếu có) để chúng tôi có thể liên hệ với bạn, xin chân thành cảm ơn!</label>
                        <div className="flex justify-start items-center gap-2">
                            <BiSolidPhoneCall size={30} className="rounded-full p-1 border-[2px] border-white text-white" />
                            <div className="text-white">(+84) 345 972 986</div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <BiLogoGmail size={30} className="rounded-full p-1 border-[2px] border-white text-white" />
                            <div className="text-white">info@kysaw.vn</div>
                        </div>
                    </div>
                    <form className="space-y-4 pr-5 pb-5 w-96" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-manropeBold text-gray-700">Tên</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder='Tên' required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-manropeBold text-gray-700">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder='Email' required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-ma text-gray-700">Câu hỏi của bạn (nếu có)</label>
                            <textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md resize" placeholder='Câu hỏi của bạn...' required></textarea>
                        </div>
                        <button type="submit" className="btn text-white w-full" style={{ backgroundColor: COLOR.backgroundPrimary }}>Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
