'use client'
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import ProductData from "./[id]/data";
import { useState } from "react";

export default function Product() {

    const [dataSource, setDataSource] = useState(ProductData);

    return (
        <div className="flex flex-col justify-center items-center">

            <Slider />

            <div className="mt-5 mb-5 flex flex-col justify-center items-center max-w-[1220px]">
                <div className="w-auto">
                    <div className="p-5">
                        <label className="border-l-8 border-l-teal-500 text-2xl font-semibold pl-3  ">Tất cả sản phẩm</label>
                    </div>
                    <div className="grid grid-cols-3 overflow-x-auto gap-10 p-5 md:flex-wrap pb-20">
                        {dataSource.map((e, index) => {
                            return (
                                <div className="w-[250px]" key={index}>
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
