import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload, Form } from "antd";
import React from "react";

const props: UploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

interface FormProps {
    label?: string;
    name: string;
    rules?: Array<object>;
    required?: boolean;
}

export const UploadImage: React.FC<FormProps> = ({
    label,
    name,
    rules,
    required,
}) => (
    <Form.Item
        label={label}
        name={name}
        rules={rules}
        required={required}
        labelCol={{ className: "font-bold" }}
    >
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    </Form.Item>
);
