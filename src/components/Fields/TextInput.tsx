import { Form, Input } from "antd";
import React from "react";

interface FormProps {
    label?: string;
    name: string;
    rules?: Array<object>;
    required?: boolean;
    placeholder?: string;
}

export const TextInput: React.FC<FormProps> = ({
    label,
    name,
    rules,
    required,
    placeholder,
}) => (
    <Form.Item
        label={label}
        name={name}
        rules={rules}
        required={required}
        labelCol={{ className: "font-bold" }}
    >
        <Input placeholder={placeholder} />
    </Form.Item>
);
