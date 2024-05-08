import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
// import {
//     Card,
//     Form,
//     Input,
//     Button,
//     Select,
//     InputNumber,
//     notification,
//     DatePicker,
//     Steps,
//     Row,
//     Col,
//     Checkbox,
//     Divider,
//     Tooltip,
// } from "antd";
import { Button, Card, Input, message, Steps, theme, Form } from "antd";
import { displayName } from "react-quill";

// const steps = [
//     {},
//     {},
//     {},
// ];

const NewCourse = () => {

    const { currentTheme } = useSelector(state => state.theme); 
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const [courseInfo, setCourseInfo] = useState({
        courseName: "",
        category: "",
        duration: "",
        description: "",
        price: "",
        instructor: ""
    })

    const items = [
        {
            title: "Course Information",
            content: (
                <>
                    <Card className={currentTheme === "light" && "ant-card-custom"} style={{width: 350}}>
                        <Form layout="vertical">
                            
                            <Form.Item
                                wrapperCol={{ xs: 24, sm: { span: 24 } }}
                                style={{ marginBottom: "-10px" }}
                            >
                                <Form.Item
                                    label="Course Name"
                                >
                                    <Input value={courseInfo.courseName} onChange={(e) => {setCourseInfo({...courseInfo, courseName: e.target.value})}}/>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{ xs: 24, sm: { span: 24 } }}
                                style={{ marginBottom: "-10px" }}
                            >
                                <Form.Item
                                    label="Course Category"
                                >
                                    <Input value={courseInfo.courseName} onChange={(e) => {setCourseInfo({...courseInfo, courseName: e.target.value})}}/>
                                </Form.Item>
                            </Form.Item>
                            
                            <Form.Item
                                wrapperCol={{ xs: 24, sm: { span: 24 } }}
                                style={{ marginBottom: "-10px" }}
                            >
                                <Form.Item
                                    label="Duration"
                                >
                                    <Input value={courseInfo.duration} onChange={(e) => {setCourseInfo({...courseInfo, duration: e.target.value})}}/>
                                </Form.Item>
                            </Form.Item>
                            
                            <Form.Item
                                wrapperCol={{ xs: 24, sm: { span: 24 } }}
                                style={{ marginBottom: "-10px" }}
                            >
                                <Form.Item
                                    label="Price"
                                >
                                    <Input value={courseInfo.price} onChange={(e) => {setCourseInfo({...courseInfo, price: e.target.value})}}/>
                                </Form.Item>
                            </Form.Item>
                            
                            <Form.Item
                                wrapperCol={{ xs: 24, sm: { span: 24 } }}
                                style={{ marginBottom: "-10px" }}
                            >
                                <Form.Item
                                    label="Description"
                                >
                                    <Input value={courseInfo.description} onChange={(e) => {setCourseInfo({...courseInfo, description: e.target.value})}}/>
                                </Form.Item>
                            </Form.Item>
                            
                            <Form.Item
                                wrapperCol={{ xs: 24, sm: { span: 24 } }}
                                style={{ marginBottom: "-10px" }}
                            >
                                <Form.Item
                                    label="Instructor"
                                >
                                    <Input value={courseInfo.instructor} onChange={(e) => {setCourseInfo({...courseInfo, instructor: e.target.value})}}/>
                                </Form.Item>
                            </Form.Item>
                        </Form>
                    </Card>
                </>
            ),
        },
        {
            title: "Content Management",
            content: "Second-content",
        },
        {
            title: "Certificate",
            content: "Last-content",
        },
    ]

    const contentStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: "260px",
        textAlign: "center",
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        paddingTop: 20,
        marginTop: 16,
        paddingLeft: 5,
        paddingRight: 5
    };

    return (
        <>
            <Steps current={current} items={items}/>

            <div style={contentStyle}>{items[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < items.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === items.length - 1 && (
                    <Button
                        type="primary"
                        onClick={() => message.success("Processing complete!")}
                    >
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: "0 8px",
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default NewCourse;
