import { Button, Form, Row, Col } from "antd";
import {
    TextInput,
    RadioButton,
    UploadImage,
    SelectInput,
    TextAreaInput,
    NumberInput,
    CheckBox,
} from "../Fields";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";

export const CatalogueRightForm: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 786px)" });
    const [gutter, setGutter] = useState<any>();
    const [size, setSize] = useState<any>();

    useEffect(() => {
        setGutter(isMobile ? [20, 10] : [50, 30]);
        setSize(isMobile ? "middle" : "large");
    }, [isMobile]);

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            name="basic"
            initialValues={{
                category: "T-Shirts",
                condition: "New",
                productName: "",
                file: [],
                brand: [],
                description: "",
                qty: null,
                season: "",
                retail: null,
                declaration: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="w-full px-20 pt-12 xs:px-5"
        >
            <Row justify="start" gutter={gutter}>
                <Col span={24}>
                    <TextInput
                        label="Product Name"
                        name="productName"
                        placeholder="Name your listing. Keep it short and sweet"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Product Name",
                            },
                        ]}
                        required
                    />
                </Col>
                <Col lg={16} md={24} sm={24}>
                    <RadioButton
                        label="Category"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: "Please select your Category",
                            },
                        ]}
                        arrayData={["Collectibles", "Accessories", "T-Shirts"]}
                        required
                    />
                </Col>
                <Col lg={8} md={24} sm={0} xs={0}>
                    <UploadImage
                        label="Thumbnail Image"
                        name="file"
                        rules={[
                            {
                                required: true,
                                message: "Please upload your Image",
                            },
                        ]}
                        required
                    />
                </Col>
                <Col span={24}>
                    <SelectInput
                        label="Brand (up to 2)"
                        name="brand"
                        placeholder="Add a keyword and press Enter"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Brand",
                            },
                        ]}
                        required
                    />
                </Col>
                <Col span={24}>
                    <TextAreaInput
                        label="Description"
                        name="description"
                        placeholder="Add more information about the product"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Description",
                            },
                        ]}
                        required
                    />
                </Col>
                <Col md={0} sm={12} xs={12}>
                    <UploadImage
                        label="Thumbnail Image"
                        name="file"
                        rules={[
                            {
                                required: true,
                                message: "Please upload your Image",
                            },
                        ]}
                        required
                    />
                </Col>
                <Col lg={12} md={24} sm={12} xs={12}>
                    <NumberInput
                        label="Available Qty"
                        name="qty"
                        placeholder="Enter available quantity"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Available quantity",
                            },
                        ]}
                        required
                    />
                </Col>
                <Col lg={12} md={0} sm={0} xs={0} />
                <Col span={24}>
                    <RadioButton
                        label="Condition"
                        name="condition"
                        arrayData={["Bad", "Fair", "Good", "New"]}
                        className="w-100px text-center xs:w-[70px]"
                    />
                </Col>
                <Col lg={12} md={24} sm={12} xs={12}>
                    <TextInput
                        label="Season"
                        name="season"
                        placeholder="SS20"
                    />
                </Col>
                <Col lg={12} md={24} sm={12} xs={12}>
                    <NumberInput
                        label="Retail"
                        name="retail"
                        placeholder="400"
                        prefix
                    />
                </Col>
                <Col span={24}>
                    <div className="font-bold">Authenticity</div>
                    <p className="text-xs mt-3">100%</p>
                </Col>
                <Col span={24}>
                    <CheckBox
                        label="Declaration"
                        name="declaration"
                        message="I hereby declare that my item is 100% authentic and in the original packaging. In the event that any information given in this application proves to be false or incorrect, I shall be responsible for the consequences."
                        rules={[
                            {
                                validator: (_: any, value: any) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              new Error(
                                                  "Please must tick Declaration"
                                              )
                                          ),
                            },
                        ]}
                        required
                    />
                </Col>
                <Col
                    span={24}
                    className="mt-5 xs:mt-0 xs:text-right xs:text-xs"
                >
                    <i className="text-red-500">*</i> indicates required
                </Col>
                <Col
                    span={24}
                    className="text-right mt-14 xs:mt-5 xs:text-center"
                >
                    <Form.Item className="xs:pb-10">
                        <Button size={size}>Cancel</Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="ml-5"
                            size={size}
                        >
                            Publish
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
