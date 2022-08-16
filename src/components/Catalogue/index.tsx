import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";

const CatalogueComponents: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 786px)" });
    const [title, setTitle] = useState<any>();

    useEffect(() => {
        setTitle(
            isMobile ? (
                <div className="pt-20 pb-5 border px-5 font-bold">
                    Add a Product
                </div>
            ) : null
        );
    }, [isMobile]);

    return (
        <div className="absolute">
            {title}
            <LeftPage />
            <RightPage />
        </div>
    );
};

export default CatalogueComponents;
