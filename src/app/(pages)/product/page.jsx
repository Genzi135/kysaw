'use client'
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import ProductData from "./[id]/data";
import { useState } from "react";

export default function Product() {

    const [dataSource, setDataSource] = useState(ProductData);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center max-w-[1220px]">
                <Slider />
            </div>
            <div className="mt-5 mb-5 flex flex-col justify-center items-center max-w-[1220px]">
                <div className="w-auto">
                    <div className="p-5">
                        <label className="border-l-8 border-l-teal-500 text-2xl font-semibold">Tất cả sản phẩm</label>
                    </div>
                    <div className="flex justify-center items-centers overflow-x-auto gap-5 p-5 md:flex-wrap">
                        {dataSource.map((e, index) => {
                            return (
                                <div className="min-w-[300px]" key={index}>
                                    <ProductCard data={e} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
