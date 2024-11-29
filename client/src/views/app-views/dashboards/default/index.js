import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import {
    Avatar,
    Badge,
    Card,
    Table,
    Tag,
    Tooltip,
    message,
    Button,
    List,
    Popover,
    Row,
    Col,
    Select,
    Form,
    Divider,
    notification,
    Breadcrumb,
    Image,
} from "antd";
import {
    EyeOutlined,
    DeleteOutlined,
    EditOutlined,
    UsergroupDeleteOutlined,
    CheckOutlined,
} from "@ant-design/icons";
import BreadcrumbCustom from "components/custom-components/BreadcrumbCustom";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { VictoryPie } from "victory-pie";
import { current } from "@reduxjs/toolkit";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import { useCookies } from "react-cookie"

const DefaultDashboard = () => {

    const navigate = useNavigate();
    const {currentTheme} = useSelector(state => state.theme);
    const [data, setData] = useState([]);
    const [proggress, setProgress] = useState("")
    // const data = [];

    const [userId, setUserId] = useState(null);
    let courseId;

    const [cookies, setCookie, removeCookie] = useCookies([
        "isDefaultPassword",
        "token",
        "userId",
        "userRole",
        "userFirstName",
        "userLastName",
        "userImage",
        "isDarkMode"
      ]);
      
      useEffect(() => {
        // Get the userId from cookies
        const userIdFromCookies = cookies.userId;
        
        if (userIdFromCookies) {
          setUserId(userIdFromCookies);
        }
  
        console.log(userIdFromCookies);
      }, []);
  

    useEffect(() => {
        console.log("userId in enroll" + userId);
        axios.get(`http://localhost:8085/api/enrollments/${userId}`)
          .then(res => {
            console.log(res.data);
            setData(res.data);
            
          })
          .catch(err => {
            console.log(err);
          });
      }, [userId]);

    useEffect(() => {
        console.log("get progress endopint", userId);

        const courseId = "66440606ab871c76573eaa04";
        const url = `http://localhost:8085/api/progress?studentId=${userId}&courseId=${courseId}`;

        axios.get(url)
          .then(res => {
            console.log("rsponse of api/progress");
            console.log(res.data.data);
            setProgress(30);
            // console.log(res.data);
            // setData(res.data);
            
          })
          .catch(err => {
            console.log(err);
          });
      }, [userId]);
      

    // useEffect(() => {
    //     var options = {
    //         series: [44, 55],
    //         chart: {
    //             type: "donut",
    //             height: "40%",
    //             // width: "60px"
    //         },
    //         responsive: [
    //             {
    //                 breakpoint: 400,
    //                 options: {
    //                     chart: {
    //                         width: "100%",
    //                     },
    //                     legend: {
    //                         position: "bottom",
    //                     },
    //                 },
    //             },
    //         ],
    //     };

    //     var chart = new ApexCharts(document.querySelector("#chart"), options);
    //     chart.render();
    // }, []);

    //console.log("current user id: ", userId);
    console.log(`progress of the course ${proggress}`);
    return (
        <>
          <BreadcrumbCustom
            name="My Courses"
            level1="Profile"
            level2="My Courses"
          />
    
          {data.map((item, index) => (
            <Row key={index} gutter={[16, 16]} style={{ width: "100%", marginBottom: "16px" }} onClick={() => navigate(`${APP_PREFIX_PATH}/dashboards/course/enrolledCourse/${item.courseId}`)}>
              <Col span={24}>
                <Card title={item.courseName} bordered={false}>
                  <Row align="middle" style={{ width: "100%" }}>
                    <Col xs={24} sm={6} md={4} lg={4} style={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src="/img/avatars/noprofile.jpg"
                        style={{
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                        width={80}
                        height={80}
                        preview={{ mask: null }}
                      />
                    </Col>
                    <Col xs={24} sm={12} md={14} lg={14}>
                      <p style={{ margin: 0, fontSize: "14px" }}><strong>Category:</strong> {item.category}</p>
                      <p style={{ margin: 0, fontSize: "14px" }}><strong>Description:</strong> {item.description.substring(0, 80)}...</p>
                      <p style={{ margin: 0, fontSize: "14px" }}><strong>Duration:</strong> {item.courseDuration}</p>
                      <p style={{ margin: 0, fontSize: "14px" }}><strong>Price:</strong> ${item.price}</p>
                      <p style={{ margin: 0, fontSize: "14px" }}><strong>Certificate ID:</strong> {item.certificateId}</p>
                    </Col>
                    <Col xs={24} sm={6} md={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
                      <VictoryPie
                        padAngle={({ datum }) => datum.y}
                        innerRadius={40}
                        data={[
                          { x: 1, label: "Completed", y: proggress / 10 },
                          { x: 2, label: "Todo", y: (100 - proggress) / 10 },
                        ]}
                        height={140}
                        colorScale={["#20e62d", "#e33217", "#27AE60"]}
                        style={{
                          labels: {
                            fontSize: 14,
                            fontWeight: 'bold',
                            fill: currentTheme === "dark" ? 'white' : 'black'
                          }
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          ))}
        </>
      );
};

export default DefaultDashboard;
