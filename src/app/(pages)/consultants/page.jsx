'use client'


export default function Consultants() {


    const consultants = [
        {
            name: "Nguyễn Văn A",
            certificationDate: "2023-01-01",
            phone: "0901234567",
            email: "nguyenvana@example.com"
        },
        {
            name: "Trần Thị B",
            certificationDate: "2023-02-15",
            phone: "0912345678",
            email: "tranthib@example.com"
        },
        {
            name: "Lê Thị C",
            certificationDate: "2023-03-20",
            phone: "0923456789",
            email: "lethic@example.com"
        },
        {
            name: "Phạm Văn D",
            certificationDate: "2023-04-10",
            phone: "0934567890",
            email: "phamvand@example.com"
        },
        {
            name: "Hoàng Thị E",
            certificationDate: "2023-05-05",
            phone: "0945678901",
            email: "hoangthie@example.com"
        },
        {
            name: "Võ Văn F",
            certificationDate: "2023-06-18",
            phone: "0956789012",
            email: "vovanf@example.com"
        },
        {
            name: "Đặng Thị G",
            certificationDate: "2023-07-22",
            phone: "0967890123",
            email: "dangthig@example.com"
        },
        {
            name: "Bùi Văn H",
            certificationDate: "2023-08-30",
            phone: "0978901234",
            email: "buivanh@example.com"
        },
        {
            name: "Ngô Thị I",
            certificationDate: "2023-09-12",
            phone: "0989012345",
            email: "ngothii@example.com"
        },
        {
            name: "Đỗ Văn J",
            certificationDate: "2023-10-25",
            phone: "0990123456",
            email: "dovanj@example.com"
        },
        {
            name: "Hồ Thị K",
            certificationDate: "2023-11-05",
            phone: "0901123456",
            email: "hothik@example.com"
        },
        {
            name: "Dương Văn L",
            certificationDate: "2023-12-15",
            phone: "0902234567",
            email: "duongvanl@example.com"
        },
        {
            name: "Lý Thị M",
            certificationDate: "2024-01-10",
            phone: "0903345678",
            email: "lythim@example.com"
        },
        {
            name: "Vũ Văn N",
            certificationDate: "2024-02-20",
            phone: "0904456789",
            email: "vuvann@example.com"
        },
        {
            name: "Trịnh Thị O",
            certificationDate: "2024-03-05",
            phone: "0905567890",
            email: "trinhthio@example.com"
        }
    ];

    return (
        <div className="mt-20 scroll-smooth flex flex-col justify-center items-center">
            <div className="flex max-w-[1220px] w-full h-full justify-center items-center p-44 max-h-[500px] bg-gray-200">
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-[1220px]  p-10">
                {consultants.map((e, index) => {
                    return (
                        <div key={index} className="w-full max-w-[800px] rounded overflow-hidden shadow-lg m-4 p-5 hover:shadow-gray-400 ">
                            <div className="pb-2 mb-2 border-b-2">
                                <div className="font-manropeBold text-xl">{e.name}</div>
                                <div>Ngày cấp chứng nhận: {e.certificationDate}</div>
                            </div>
                            <div className="flex justify-start items-center flex-wrap sm:gap-10">
                                <div><label className="font-manropeBold">Số điện thoại:</label>{e.phone} </div>
                                <div><label className="font-manropeBold">Email:</label> {e.email}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}