import React from "react";
import Header from "../headerComponent/headerMain";
import ProductsItemMain from "../productsComponent/productsItemMain";
import ProductsFilter from "../productsComponent/productsFilterMain";

const ProductsMain = () => {
    return (
        <>
            <Header />
            <div className="productsMain p-2">
                <div className="productsFilter">
                    <ProductsFilter />
                </div>
                <div className="productsItemMain">
                    <ProductsItemMain />
                </div>
            </div>
        </>
    );
};

export default ProductsMain;
