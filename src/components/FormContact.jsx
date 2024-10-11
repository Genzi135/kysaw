import { COLOR } from "../utils/COLORS";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";

export default function FormContact({ setIsFormOpen }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white p-8 overflow-auto">
            <div className="w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-white font-bold" onClick={() => setIsFormOpen(false)}>
                    <AiOutlineClose size={24} />
                </button>
                <div className="flex gap-5 flex-wrap overflow-y-auto max-h-screen">
                    <div className="flex flex-1 justify-start items-start w-full md:w-80 flex-col gap-5 p-5" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                        <label className="text-white">
                            Chúng tôi luôn muốn bạn hiểu rõ về dịch vụ trước khi mua bất kì dịch vụ nào từ chúng tôi vì vậy bạn có thể liên hệ với chúng tôi hoặc để lại tên, số điện thoại và câu hỏi (nếu có) để chúng tôi có thể liên hệ với bạn, xin chân thành cảm ơn!
                        </label>
                        <div className="flex justify-start items-center gap-2">
                            <BiSolidPhoneCall size={30} className="rounded-full p-1 border-[2px] border-white text-white" />
                            <div className="text-white">(+84) 345 972 986</div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <BiLogoGmail size={30} className="rounded-full p-1 border-[2px] border-white text-white" />
                            <div className="text-white">info@kysaw.vn</div>
                        </div>
                    </div>
                    <form className="space-y-4 pb-5 w-full md:w-96">
                        <div>
                            <label htmlFor="name" className="block text-sm font-manrope text-gray-700">Tên</label>
                            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Tên" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-manrope text-gray-700">Số điện thoại</label>
                            <input type="text" id="phone" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Số điện thoại" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-manrope text-gray-700">Câu hỏi của bạn (nếu có)</label>
                            <textarea id="message" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md resize" placeholder="Câu hỏi của bạn..."></textarea>
                        </div>
                        <button type="submit" className="btn text-white w-full" style={{ backgroundColor: COLOR.backgroundPrimary }}>Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    )
}