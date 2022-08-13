import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useMediaQuery } from "react-responsive";
import React from "react";

const CatalogueComponents: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 786px)" });

    return (
        <div className="absolute">
            {isMobile && <div className="pt-20 pb-5 border px-5 font-bold">Add a Product</div>}
            <LeftPage />
            <RightPage />
        </div>
    );
};

export default CatalogueComponents;
