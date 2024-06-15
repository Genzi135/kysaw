import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import GenePremium from '../../../../assets/Products/Gencare Premium.jpg';
import YamuGene from '../../../../assets/Products/Yamugene.jpg';
import GeneLoveMe from '../../../../assets/Products/GenLove Me.jpg';
import GeneLoveKid from '../../../../assets/Products/GenLove Kid.jpg';
import GeneLoveFit from '../../../../assets/Products/GenLove Fit.jpg';
import GeneLoveSkin from '../../../../assets/Products/GenLove Skin.jpg';

export default function Product() {
    const recommend = [
        {
            title: 'YamuGene',
            image: YamuGene,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/yamugene'
        }, {
            title: 'GenePremium',
            image: GenePremium,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genepremium',
        }, {
            title: 'GeneLoveMe',
            image: GeneLoveMe,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genelove/me'
        },
    ];

    const product = [
        {
            title: 'YamuGene',
            image: YamuGene,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/yamugene'
        }, {
            title: 'GenePremium',
            image: GenePremium,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genepremium',
        }, {
            title: 'GeneLoveMe',
            image: GeneLoveMe,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genelove/me'
        }, {
            title: 'GeneLoveFit',
            image: GeneLoveFit,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genelove/fit'
        }, {
            title: 'GeneLoveKid',
            image: GeneLoveKid,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genelove/kid'
        }, {
            title: 'GeneLoveSkin',
            image: GeneLoveSkin,
            price: 2000000,
            content: {
                title: 'Content...',
                benefit: [
                    'benefit 1', 'benefit 2', 'benefit 3'
                ],
            },
            link: '/product/genelove/skin'
        },
    ];

    return (
        <div className="mt-5 mb-5">
            <Slider />
            <div>
                <div className="p-5">
                    <label className="border-l-8 border-l-teal-500 text-2xl font-semibold">Gợi ý cho bạn</label>
                </div>
                <div className="flex overflow-x-auto gap-5 p-5">
                    {recommend.map((e, index) => {
                        return (
                            <div className="min-w-[300px]" key={index}>
                                <ProductCard data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-auto">
                <div className="p-5">
                    <label className="border-l-8 border-l-teal-500 text-2xl font-semibold">Tất cả sản phẩm</label>
                </div>
                <div className="flex overflow-x-auto gap-5 p-5 md:flex-wrap">
                    {product.map((e, index) => {
                        return (
                            <div className="min-w-[300px]" key={index}>
                                <ProductCard data={e} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
