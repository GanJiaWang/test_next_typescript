import { Tabs } from "antd";
import { ImagePicker } from "@components/Fields";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";

const { TabPane } = Tabs;

const LeftPage: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 786px)" });
    const [text, setText] = useState<string>();

    useEffect(() => {
        setText(
            isMobile
                ? "You may upload up to 5 images. Supported file types: jpg, png"
                : "You may upload up to 5 images (including thumbnail) Supported file types: jpeg, jpg, png"
        );
    }, [isMobile]);

    return (
        <div className="w-1/2 float-left flex justify-center border-solid border-r-2 h-screen pt-24 xs:border-0 xs:pt-0 xs:w-full xs:h-full">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Image Gallery" key="1" className="text-black">
                    <ImagePicker />
                    <div className="flex justify-center">
                        <p className="text-center pt-14 pb-8 text-xs text-gray-400 font-semibold w-80 xs:w-48">
                            {text}
                        </p>
                    </div>
                </TabPane>
                <TabPane tab="Preview" key="2">
                    Preview
                </TabPane>
            </Tabs>
        </div>
    );
};

export default LeftPage;
