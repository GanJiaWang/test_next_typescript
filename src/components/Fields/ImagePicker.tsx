import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import Image from "next/image";
import React from "react";

const { Dragger } = Upload;

const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files);
    },
};

export const ImagePicker: React.FC = () => (
    <div className="w-400px pt-7 xs:w-full">
        <Dragger
            {...props}
            className="h-400px bg-transparent border-zinc-500 border-solid shadow-md xs:w-32 xs:h-32"
            listType="picture-card"
        >
            <p className="ant-upload-drag-icon mb-0">
                <Image
                    src="/icons/add-image.png"
                    height={35}
                    width={40}
                    alt="icon"
                />
            </p>
            <p className="ant-upload-text font-semibold text-md">Add Image</p>
        </Dragger>
    </div>
);
