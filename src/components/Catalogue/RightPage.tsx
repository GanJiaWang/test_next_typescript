import { CatalogueRightForm } from "../Forms";
import React from "react";

const RightPage: React.FC = () => (
    <div className="w-1/2 float-right flex justify-center overflow-y-scroll h-screen pt-24 xs:pt-0 xs:w-full xs:h-full xs:overflow-y-hidden">
        <CatalogueRightForm />
    </div>
);

export default RightPage;
