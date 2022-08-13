/* eslint-disable jsx-a11y/alt-text */
import { Image, Layout, Menu, Badge } from "antd";
import type { MenuProps } from "antd";
import React from "react";

const { Header } = Layout;

const datas = ["EVENTS", "FEATURES", "COMMUNITY", "CATALOGUE"];
const items1: MenuProps["items"] = datas.map((data, index) => {
    return {
        key: index,
        label: data,
        className: "px-35px text-12px",
    };
});

const HeaderComponents: React.FC = () => (
    <Header className="px-35px z-50 shadow-xl">
        <div className="float-left text-white font-bold mr-100px text-18px xs:w-full xs:text-center xs:text-24px">
            LOGO
        </div>
        <div className="float-right text-white font-bold mr-5 text-18px flex h-full xs:invisible">
            <Badge className="self-center" dot>
                <Image
                    width={50}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                {/* <div className="hexagon bg-[url('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')] w-1">
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                </div> */}
            </Badge>
        </div>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["3"]}
            items={items1}
            className="xs:invisible"
        />
    </Header>
);

export default HeaderComponents;
