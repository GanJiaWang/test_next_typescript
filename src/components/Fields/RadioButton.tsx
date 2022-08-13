import { Form, Radio } from "antd";
import _ from "lodash";
import React from "react";

interface FormProps {
    label?: string;
    name: string;
    rules?: Array<object>;
    arrayData?: Array<string>;
    required?: boolean;
    defaultValue: string;
    className?: string;
}

export const RadioButton: React.FC<FormProps> = ({
    label,
    name,
    rules,
    arrayData,
    required,
    defaultValue,
    className,
}) => (
    <Form.Item
        label={label}
        name={name}
        rules={rules}
        required={required}
        labelCol={{ className: "font-bold" }}
    >
        <Radio.Group defaultValue={defaultValue} buttonStyle="solid">
            {_.map(arrayData, (d, i) => {
                return (
                    <Radio.Button
                        key={i}
                        value={d}
                        className={`mr-3 ${className}`}
                    >
                        {d}
                    </Radio.Button>
                );
            })}
        </Radio.Group>
    </Form.Item>
);
