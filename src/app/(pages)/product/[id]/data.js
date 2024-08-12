import { imgShared } from "../../../../utils/images";

const ProductData = [
    {
        productId: "yamuGene",
        productName: "YamuGene",
        color: '#a3c93a',
        bannerUrl: imgShared.Banner.YamuGene,
        avatarUrl: imgShared.yamuGen.hex,
        sample: {
            name: "Sample YamuGene",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Yamugene++-+Sample+Result.pdf",
        },
        subSample: {
            name: "",
            link: "",
        },
        price: 'Liên hệ',
        benefits: [
            "Tầm soát nguy cơ của 16-18 bệnh mãn tính và ung thư do di truyền.",
            "Hiểu rõ về nguy cơ di truyền của bản thân, giúp khách hàng có kế hoạch tầm soát chuyên sâu và chăm sóc sức khỏe chủ động, để phòng ngừa và điều trị các bệnh lý nghiêm trọng một cách hiệu quả nhất.",
            "Được tư vấn bởi đội ngũ bác sĩ chuyên nghiệp, xác định lộ trình tầm soát và chăm sóc sức khỏe chi tiết cho mỗi cá nhân. Giúp tiết kiệm chi phí khám sức khỏe cho các hạng mục không cần thiết.",
            "Tạo tiền đề để cải thiện sức khỏe và chất lượng cuộc sống."
        ],
        indicators: [
            "Nhóm ung thư do di truyền",
            "Suy giảm trí nhớ",
            "Nhóm bệnh tim mạch",
            "Nhóm miễn dịch và trao đổi chất"
        ],
        introductions:
        {
            image: imgShared.yamuGen.product,
            content: ["YamuGen là giải pháp ứng dụng công nghệ giải mã Gen tiên tiến, với chi phí tối ưu nhất, giúp bạn tầm soát nguy cơ mắc 16-18 bệnh mãn tính và ung thư do di truyền, mang lại sự an tâm và hiểu biết sâu sắc về sức khỏe di truyền của bản thân. Sản phẩm cung cấp thông tin chi tiết về nhóm ung thư do di truyền, bệnh bạch cầu cấp tính, suy giảm trí nhớ, các bệnh tim mạch, và nhóm bệnh liên quan đến miễn dịch và trao đổi chất. ",
                "Với YamuGen, bạn sẽ được tư vấn bởi đội ngũ bác sĩ chuyên nghiệp, giúp xác định lộ trình tầm soát và chăm sóc sức khỏe chi tiết cho từng cá nhân. Điều này không chỉ giúp bạn tiết kiệm chi phí khám sức khỏe cho các hạng mục không cần thiết mà còn tạo tiền đề để cải thiện sức khỏe và chất lượng cuộc sống một cách hiệu quả nhất. Sử dụng YamuGen, bạn sẽ hiểu rõ hơn về nguy cơ di truyền của mình, từ đó xây dựng kế hoạch chăm sóc sức khỏe chủ động và kịp thời.",
                " Hãy để YamuGen trở thành công cụ đáng tin cậy trong hành trình bảo vệ và nâng cao chất lượng cuộc sống của bạn. YamuGen – An tâm sống khỏe!"]
        },
        steps: [
            {
                title: "Bước 1: Nhận kit tại nhà",
                description: "KYSAW sẽ gửi bộ kit lấy mẫu về địa chỉ của bạn",
                content: [
                    "Lọ dung dịch súc miệng lấy mẫu",
                    "Phễu",
                    "Giấy đồng thuận",
                    "Tem dán thông tin cá nhân",
                    "Hướng dẫn sử dụng"
                ]
            },
            {
                title: "Bước 2: Lấy mẫu gen tại nhà",
                description: '',
                content: [
                    "Lấy mẫu gene theo đúng quy trình",
                    "Không đánh răng, không ăn uống, không hút thuốc, ít nhất một giờ trước khi lấy mẫu",
                    "Xoa nhẹ 2 bên má, sau đó ngậm dung dịch và súc miệng kỹ, từ 1 – 2 phút. Sau đó nhả vào lọ chứa mẫu.",
                    "Vặn chặt nắp, bỏ lại vào hộp và gửi về cho KYSAW.",
                    "Kết quả sẽ có sau 14 ngày làm việc."
                ]
            },
            {
                title: "Bước 3: Nhận kết quả",
                description: "KYSAW sẽ liên lạc để gửi kết quả đến bạn, và đặt hẹn tư vấn 1-1 cùng với chuyên gia của KYSAW.",
                content: [
                    "Kết quả sẽ bao gồm bản cứng và bản mềm."
                ]
            }
        ], imageKit: 'https://res.cloudinary.com/diribdgsz/image/upload/v1721706139/kysaw/benefit/YamuGene_Kit-10_pnx5ql.jpg',
    },
    {
        productId: "gencarepremium",
        productName: "GenCare Premium",
        color: '#0eacb0',
        bannerUrl: imgShared.Banner.GenCarePre,
        avatarUrl: imgShared.genCarePre.hex,
        sample: {
            name: "Sample GenCare Premium",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Gencare+Premium_Report_Full_VN_120124+(1).pdf",
        },
        subSample: {
            name: "Spotmas",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/KQ+mau+Spotmas+01062023.pdf",
        },
        price: 'Liên hệ',
        benefits: [
            "Tầm soát nguy cơ mắc các bệnh mãn tính, nguy cơ ung thư và các bệnh di truyền lặn phổ biến của người Việt Nam.",
            "Hiểu rõ về nguy cơ di truyền của bản thân, giúp khách hàng có kế hoạch tầm soát chuyên sâu và chăm sóc sức khỏe chủ động, để phòng ngừa và điều trị các bệnh lý nghiêm trọng một cách hiệu quả nhất.",
            "Tạo tiền đề để cải thiện sức khỏe và chất lượng cuộc sống."
        ],
        indicators: [
            "15 Bệnh ung thư do di truyền",
            "30 Hội chứng/bệnh mãn tính di truyền",
            "9 Bệnh di truyền lặn phổ biến của Người Việt Nam"
        ],
        introductions:
        {
            image: imgShared.genCarePre.product,
            content: ["Gencare Premium là giải pháp toàn diện giúp bạn tầm soát nguy cơ mắc các bệnh mãn tính, ung thư, và các bệnh di truyền lặn phổ biến của người Việt Nam. Thông qua phân tích DNA, Gencare Premium cung cấp cái nhìn sâu sắc về nguy cơ di truyền của bản thân, giúp bạn có kế hoạch tầm soát chuyên sâu và chăm sóc sức khỏe một cách chủ động.",
                " Với khả năng phân tích 15 loại ung thư do di truyền, 30 hội chứng và bệnh mãn tính di truyền, cùng 9 bệnh di truyền lặn phổ biến ở người Việt Nam, Gencare Premium mang đến cho bạn những thông tin quan trọng để phòng ngừa và điều trị các bệnh lý nghiêm trọng hiệu quả nhất. Sử dụng Gencare Premium, bạn sẽ hiểu rõ hơn về nguy cơ di truyền của mình, từ đó xây dựng kế hoạch chăm sóc sức khỏe phù hợp và kịp thời.",
                " Hãy để Gencare Premium đồng hành cùng bạn trong hành trình bảo vệ sức khỏe và nâng cao chất lượng cuộc sống của bạn. Gencare Premium - Tầm soát để sống khỏe!"]
        },
        steps: [
            {
                title: "Bước 1: Tư vấn trước xét nghiệm",
                description: "Tư vấn viên của KYSAW sẽ liên lạc với khách hàng để tư vấn kỹ về Gencare Premium",
                content: []
            },
            {
                title: "Bước 2: Lấy mẫu và tách DNA ngoại bào",
                description: "Vì đặc trưng tầm soát chuyên sâu, sản phẩm này cần lấy mẫu máu. Giải trình tự DNA ngoại bào.",
                content: []
            },
            {
                title: "Bước 3: Trả kết quả và tư vấn sau xét nghiệm",
                description: "KYSAW sẽ liên lạc để gửi kết quả đến bạn, và đặt hẹn tư vấn 1-1 cùng với chuyên gia của KYSAW.",
                content: []
            }
        ], imageKit: '',

    },
    {
        productId: "genloveskin",
        productName: "GenLove Skin",
        color: '#b52b43',
        bannerUrl: imgShared.Banner.GenLoveSkin,
        avatarUrl: imgShared.genLoveSkin.hex,
        sample: {
            name: "Sample GenLove Skin",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Sample+Report+-+Genlove+Skin.pdf",
        },
        subSample: {
            name: "",
            link: "",
        },
        price: 'Liên hệ',
        benefits: [
            "Giúp người thực hiện hiểu được những đặc tính của da, từ đó biết được cách chăm sóc da phù hợp để có được làn da trẻ và đẹp.",
            "Cung cấp thông tin về cách da phản ứng với các tác nhân từ môi trường (ánh sáng mặt trời, nhiệt độ, độ ẩm, vv...)",
            "Tạo tiền đề để cải thiện sức khỏe làn da và chất lượng cuộc sống"
        ],
        indicators: [
            "Mức độ thiếu hụt chất chống oxi hóa",
            "Mức độ phá hủy Collagen sớm.",
            "Mức độ nhạy cảm của da với ánh mặt trời.",
            "Khuynh hướng lão hóa da sớm.",
            "Khuynh hướng rối loạn sắc tố da."
        ],
        introductions:
        {
            image: imgShared.genLoveSkin.product,
            content: ["GenLove Skin là giải pháp tiên tiến giúp bạn hiểu rõ hơn về đặc tính làn da của mình, từ đó đưa ra các biện pháp chăm sóc da phù hợp để duy trì vẻ đẹp trẻ trung và khỏe mạnh. Thông qua phân tích DNA, GenLove Skin cung cấp thông tin chi tiết về cách da bạn phản ứng với các tác nhân từ môi trường như ánh sáng mặt trời, nhiệt độ, và độ ẩm.",
                " GenLove Skin không chỉ giúp bạn nhận diện mức độ thiếu hụt chất chống oxi hóa và mức độ phá hủy Collagen sớm, mà còn đánh giá mức độ nhạy cảm của da với ánh mặt trời, khuynh hướng lão hóa sớm, và rối loạn sắc tố da.Những thông tin này sẽ là nền tảng để bạn cải thiện sức khỏe làn da và nâng cao chất lượng cuộc sống.",
                "Với GenLove Skin, bạn sẽ có trong tay chìa khóa để tối ưu hóa quá trình chăm sóc da, từ đó giữ gìn và nâng cao vẻ đẹp tự nhiên của mình.Hãy để GenLove Skin đồng hành cùng bạn trên hành trình khám phá và chăm sóc làn da một cách khoa học và hiệu quả!"]
        }, steps: [
            {
                title: "Bước 1: Nhận kit tại nhà",
                description: "KYSAW sẽ gửi bộ kit lấy mẫu về địa chỉ của bạn",
                content: [
                    "Que lấy mẫu",
                    "Sổ tay hướng dẫn",
                    "Giấy đồng thuận",
                    "Tem dán thông tin cá nhân",
                    "Hướng dẫn sử dụng"
                ]
            },
            {
                title: "Bước 2: Lấy mẫu gen tại nhà",
                description: 'Lấy mẫu gen và gửi về KYSAW',
                content: [
                    "Quy trình lấy mẫu lại nhà:",
                    "1.Súc miệng 5s với nước sạch",
                    "2.Chà đầu que gòn lên niêm mạc má bên trong miệng (30s/bên)",
                    "3.Để que khô tự nhiên 2-3 phút, bảo quản trong túi giấy, túi zip",
                ]
            },
            {
                title: "Bước 3: Nhận kết quả",
                description: "KYSAW sẽ gửi kết quả vào địa chỉ email của bạn",
                content: [
                    "Gen của bạn sẽ được giải mã và phân tích",
                    "Kết quả nhanh chóng, chính xác dựa trên chứng cứ khoa học và công nghệ",
                    "Cam kết bảo mật thông tin và quyền riêng tư"
                ]
            }
        ], imageKit: 'https://res.cloudinary.com/diribdgsz/image/upload/v1719924082/kysaw/benefit/genesolutions-san-pham-genloveme-img-03-1.png_ukayz0.webp',
    },
    {
        productId: "genlovefit",
        productName: "GenLove Fit",
        color: '#50ba83',
        bannerUrl: imgShared.Banner.GenLoveFit,
        avatarUrl: imgShared.genLoveFit.hex,
        sample: {
            name: "Sample GenLove Fit",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Sample+Report+-+Genlove+Fit+1.pdf",
        },
        subSample: {
            name: "",
            link: "",
        },
        price: 'Liên hệ',
        benefits: [
            "Giúp người làm xét nghiệm hiểu được những đặc tính về chuyển hóa/dung nạp năng lượng từ thức ăn của cơ thể.",
            "Cung cấp thông tin về đặc tính di truyền có liên quan đến kiểu hình cơ thể và khuyến cáo chế độ dinh dưỡng, tập luyện tương ứng để cải thiện vóc dáng và sức khỏe.",
            "Giúp dự đoán khả năng mắc các bệnh liên quan đến thừa cân và béo phì.",
            "Tạo tiền đề để cải thiện sức khỏe và chất lượng cuộc sống."
        ],
        indicators: [
            "Khả năng giảm cân",
            "Nguy cơ béo phì",
            "Khả năng chuyển hóa tinh bột",
            "Khả năng chuyển hóa chất béo",
            "Khả năng hình thành khối cơ"
        ],
        introductions:
        {
            image: imgShared.genLoveFit.product,
            content: ["GenLove Fit mang đến một bước đột phá trong việc chăm sóc sức khỏe cá nhân thông qua phân tích DNA. Với GenLove Fit, bạn sẽ hiểu rõ hơn về đặc tính chuyển hóa và dung nạp năng lượng của cơ thể từ thức ăn. Sản phẩm cung cấp thông tin chi tiết về các đặc tính di truyền liên quan đến kiểu hình cơ thể, đồng thời đưa ra khuyến cáo về chế độ dinh dưỡng và tập luyện phù hợp để cải thiện vóc dáng và sức khỏe.",
                " GenLove Fit không chỉ giúp bạn dự đoán khả năng mắc các bệnh liên quan đến thừa cân và béo phì mà còn tạo tiền đề để nâng cao chất lượng cuộc sống. Các chỉ số được phân tích bao gồm khả năng giảm cân, nguy cơ béo phì, khả năng chuyển hóa tinh bột, khả năng chuyển hóa chất béo, và khả năng hình thành khối cơ. Nhờ đó, bạn sẽ có cái nhìn toàn diện về cơ thể mình và lựa chọn phương pháp cải thiện sức khỏe một cách hiệu quả và khoa học. ", "Hãy để GenLove Fit đồng hành cùng bạn trên con đường chinh phục một sức khỏe tối ưu và vóc dáng lý tưởng!"]
        }, steps: [
            {
                title: "Bước 1: Nhận kit tại nhà",
                description: "KYSAW sẽ gửi bộ kit lấy mẫu về địa chỉ của bạn",
                content: [
                    "Que lấy mẫu",
                    "Sổ tay hướng dẫn",
                    "Giấy đồng thuận",
                    "Tem dán thông tin cá nhân",
                    "Hướng dẫn sử dụng"
                ]
            },
            {
                title: "Bước 2: Lấy mẫu gen tại nhà",
                description: 'Lấy mẫu gen và gửi về KYSAW',
                content: [
                    "Quy trình lấy mẫu lại nhà:",
                    "1.Súc miệng 5s với nước sạch",
                    "2.Chà đầu que gòn lên niêm mạc má bên trong miệng (30s/bên)",
                    "3.Để que khô tự nhiên 2-3 phút, bảo quản trong túi giấy, túi zip",
                ]
            },
            {
                title: "Bước 3: Nhận kết quả",
                description: "KYSAW sẽ gửi kết quả vào địa chỉ email của bạn",
                content: [
                    "Gen của bạn sẽ được giải mã và phân tích",
                    "Kết quả nhanh chóng, chính xác dựa trên chứng cứ khoa học và công nghệ",
                    "Cam kết bảo mật thông tin và quyền riêng tư"
                ]
            }
        ], imageKit: 'https://res.cloudinary.com/diribdgsz/image/upload/v1719924082/kysaw/benefit/genesolutions-san-pham-genloveme-img-03-1.png_ukayz0.webp',
    },
    {
        productId: "genlovekid",
        productName: "GenLove Kid",
        color: '#ffca35',
        bannerUrl: imgShared.Banner.GenLoveKid,
        avatarUrl: imgShared.genLoveKid.hex,
        sample: {
            name: "Sample Genlove Kid",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Sample+Report+Genlove+Kid.pdf",
        },
        subSample: {
            name: "",
            link: "",
        },
        price: 'Liên hệ',
        benefits: [
            "Giải mã các tiềm năng di truyền liên quan đến thể chất, tính cách, năng lực nhận thức, ghi nhớ… cho trẻ.",
            "Hiểu được nền tảng di truyền, từ đó giúp bé phát huy được các thế mạnh cũng như cải thiện những hạn chế liên quan đến đặc tính di truyền."
        ],
        indicators: [
            "Khả năng ngôn ngữ, ghi nhớ, cảm âm",
            "Xu hướng tính cách",
            "Sức mạnh thể chất",
            "Nguy cơ tăng cân",
            "Khả năng dung nạp Lactose",
            "Khả năng hấp thụ Vitamin D",
            "Khả năng nhiễm Siêu vi"
        ],
        introductions:
        {
            image: imgShared.genLoveKid.product,
            content: ["GenLove Kid là công cụ đột phá giúp các bậc phụ huynh hiểu rõ tiềm năng di truyền của con em mình trong các lĩnh vực thể chất, tính cách, và năng lực nhận thức. Thông qua phân tích DNA, GenLove Kid cung cấp cái nhìn sâu sắc về khả năng ngôn ngữ, ghi nhớ, cảm âm, xu hướng tính cách, sức mạnh thể chất, và nhiều yếu tố khác.",
                "GenLove Kid không chỉ giúp bạn nhận diện các tiềm năng di truyền mà còn hỗ trợ cải thiện những hạn chế liên quan đến đặc tính di truyền của trẻ.",
                " Với thông tin về nguy cơ tăng cân, khả năng dung nạp Lactose, hấp thụ Vitamin D, và khả năng nhiễm Siêu vi, bạn sẽ có nền tảng để xây dựng chế độ dinh dưỡng và lối sống khoa học, phù hợp cho sự phát triển toàn diện của bé. GenLove Kid giúp bạn tận dụng tối đa những thế mạnh di truyền của con, đồng thời đưa ra các biện pháp khắc phục những hạn chế, tạo điều kiện tốt nhất để trẻ phát triển khỏe mạnh và vượt trội.",
                " Hãy để GenLove Kid đồng hành cùng bạn trong hành trình nuôi dưỡng và phát huy tối đa tiềm năng của con yêu!",],
        }, steps: [
            {
                title: "Bước 1: Nhận kit tại nhà",
                description: "KYSAW sẽ gửi bộ kit lấy mẫu về địa chỉ của bạn",
                content: [
                    "Que lấy mẫu",
                    "Sổ tay hướng dẫn",
                    "Giấy đồng thuận",
                    "Tem dán thông tin cá nhân",
                    "Hướng dẫn sử dụng"
                ]
            },
            {
                title: "Bước 2: Lấy mẫu gen tại nhà",
                description: 'Lấy mẫu gen và gửi về KYSAW',
                content: [
                    "Quy trình lấy mẫu lại nhà:",
                    "1.Súc miệng 5s với nước sạch",
                    "2.Chà đầu que gòn lên niêm mạc má bên trong miệng (30s/bên)",
                    "3.Để que khô tự nhiên 2-3 phút, bảo quản trong túi giấy, túi zip",
                ]
            },
            {
                title: "Bước 3: Nhận kết quả",
                description: "KYSAW sẽ gửi kết quả vào địa chỉ email của bạn",
                content: [
                    "Gen của bạn sẽ được giải mã và phân tích",
                    "Kết quả nhanh chóng, chính xác dựa trên chứng cứ khoa học và công nghệ",
                    "Cam kết bảo mật thông tin và quyền riêng tư"
                ]
            }
        ], imageKit: 'https://res.cloudinary.com/diribdgsz/image/upload/v1719924082/kysaw/benefit/genesolutions-san-pham-genloveme-img-03-1.png_ukayz0.webp',
    },
    {
        productId: "genloveme",
        productName: "GenLove Me",
        color: '#47c5e4',
        bannerUrl: imgShared.Banner.GenLoveMe,
        avatarUrl: imgShared.genLoveMe.hex,
        sample: {
            name: "Sample GenLove Me",
            link: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Sample+Report+-+Genlove+Me.pdf",
        },
        subSample: {
            name: "",
            link: "",
        },
        price: 'Liên hệ',
        benefits: [
            "Cung cấp những thông tin về tiềm lực của chính bạn.",
            "Hiểu rõ xu hướng tính cách của bản thân. Từ đó khai thác các điểm mạnh cũng như cải thiện những hạn chế liên quan đến đặc tính di truyền.",
            "Khám phá khả năng ngôn ngữ, trí nhớ và sức khỏe thể chất.",
            "Tạo tiền đề để cải thiện sức khỏe và chất lượng cuộc sống."
        ],
        indicators: [
            "Các chỉ số tính cách",
            "Khả năng ngôn ngữ & ghi nhớ",
            "Sức mạnh – Sức bền cơ bắp",
            "Khả năng hấp thu dinh dưỡng và chuyển hóa",
            "Chất lượng giấc ngủ",
            "Khả năng nhiễm Siêu vi"
        ],
        introductions:
        {
            image: imgShared.genLoveMe.product,
            content: ["GenLove Me mang đến cho bạn cơ hội khám phá và hiểu rõ tiềm lực của chính mình thông qua phân tích DNA. Sản phẩm cung cấp thông tin chi tiết về xu hướng tính cách, giúp bạn khai thác các điểm mạnh và cải thiện những hạn chế liên quan đến đặc tính di truyền. GenLove Me còn giúp bạn khám phá khả năng ngôn ngữ, trí nhớ, và sức khỏe thể chất, tạo nền tảng vững chắc để nâng cao sức khỏe và chất lượng cuộc sống.",
                " Các chỉ số mà GenLove Me cung cấp bao gồm tính cách, khả năng ngôn ngữ, khả năng ghi nhớ, sức mạnh và sức bền cơ bắp, nguy cơ tăng cân, khả năng dung nạp Lactose, mức độ dị ứng với đồ uống có cồn, khả năng hấp thụ Vitamin D, chất lượng giấc ngủ, và khả năng nhiễm Siêu vi. Những thông tin này giúp bạn hiểu rõ hơn về cơ thể và tính cách của mình, từ đó xây dựng lối sống và chế độ dinh dưỡng phù hợp.",
                " Hãy để GenLove Me đồng hành cùng bạn trong hành trình khám phá bản thân, tối ưu hóa sức khỏe và nâng cao chất lượng cuộc sống. GenLove Me - Chìa khóa mở ra tiềm năng và sức mạnh của chính bạn!"]
        }, steps: [
            {
                title: "Bước 1: Nhận kit tại nhà",
                description: "KYSAW sẽ gửi bộ kit lấy mẫu về địa chỉ của bạn",
                content: [
                    "Que lấy mẫu",
                    "Sổ tay hướng dẫn",
                    "Giấy đồng thuận",
                    "Tem dán thông tin cá nhân",
                    "Hướng dẫn sử dụng"
                ]
            },
            {
                title: "Bước 2: Lấy mẫu gen tại nhà",
                description: 'Lấy mẫu gen và gửi về KYSAW',
                content: [
                    "Quy trình lấy mẫu lại nhà:",
                    "1.Súc miệng 5s với nước sạch",
                    "2.Chà đầu que gòn lên niêm mạc má bên trong miệng (30s/bên)",
                    "3.Để que khô tự nhiên 2-3 phút, bảo quản trong túi giấy, túi zip",
                ]
            },
            {
                title: "Bước 3: Nhận kết quả",
                description: "KYSAW sẽ gửi kết quả vào địa chỉ email của bạn",
                content: [
                    "Gen của bạn sẽ được giải mã và phân tích",
                    "Kết quả nhanh chóng, chính xác dựa trên chứng cứ khoa học và công nghệ",
                    "Cam kết bảo mật thông tin và quyền riêng tư"
                ]
            }
        ], imageKit: 'https://res.cloudinary.com/diribdgsz/image/upload/v1719924082/kysaw/benefit/genesolutions-san-pham-genloveme-img-03-1.png_ukayz0.webp',
    },


];

export default ProductData;
