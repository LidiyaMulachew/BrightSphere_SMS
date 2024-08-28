import React, { useState } from "react";
import TeacherLayout from '@/Layouts/TeacherLayout';
import { Head, usePage } from '@inertiajs/react';
import axios from "axios";
import { router } from "@inertiajs/react";


const EditMaterial = ({ material }) => {
    const { props } = usePage();

    const [formData, setFormData] = useState({
        title: material.title,
        description: material.description,
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("file", formData.file);
        console.log("material id", material);

        console.log("formData", formDataToSend);

        try {
            // await axios.put(`/materials/${material.id}`, formDataToSend, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // });

            router.post(`/materials/${material.id}`, formDataToSend);
            console.log("Material updated successfully.");
        } catch (error) {
            console.error("Error updating material:", error.message);
        }
    };

    return (
        <TeacherLayout
        user={props.auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Teacher Dashboard</h2>}
    >
        <div className="bg-white pt-5 mt-10 ml-9 mr-9 shadow-2xl rounded">
            <div className="pl-5 pr-5 pb-10">
                <div className="text-center mb-10 mt-7">
                    <h1 className="font-bold text-3xl text-blue-500">
                        Edit Material
                    </h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundColor: "#ffffff",
                        // maxWidth: "700px",
                        // padding: "20px",
                        // borderRadius: "8px",
                        // border: "1px solid #ccc",
                        // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.4)",
                    }}
                >
                    <div style={{ marginBottom: "16px", width: "100%" }}>
                        <label
                            htmlFor="title"
                            style={{ marginBottom: "8px", display: "block" }}
                        >
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title || ""}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: "16px", width: "100%" }}>
                        <label
                            htmlFor="description"
                            style={{ marginBottom: "8px", display: "block" }}
                        >
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description || ""}
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        ></textarea>
                    </div>
                    <div style={{ marginBottom: "16px", width: "100%" }}>
                        <label
                            style={{ marginBottom: "8px", display: "block" }}
                        >
                            Current File:
                        </label>
                        {material.file_path && (
                            <p>{`public/materials/${material.file_path}`}</p>
                        )}
                    </div>

                    <div style={{ marginBottom: "16px", width: "100%" }}>
                        <label
                            htmlFor="file"
                            style={{ marginBottom: "8px", display: "block" }}
                        >
                            New File:
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "8px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                     className="bg-sky-200 shadow-lg px-3 py-2 hover:bg-sky-500 hover:text-white rounded"
                    >
                        Update Material
                    </button>
                </form>
            </div>
        </div>
        </TeacherLayout>

    );
};

export default EditMaterial;
