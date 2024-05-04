import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Button,
    Card,
    Col,
    DatePicker,
    FloatButton,
    Form,
    Image,
    InputNumber,
    Modal,
    Pagination,
    Row,
    Select,
    Tooltip,
} from "antd";
import {
    SearchOutlined
} from '@ant-design/icons';
import { FaSpaceShuttle } from "react-icons/fa";
import { GiVideoCamera } from "react-icons/gi";
import { GiSpaceShuttle } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import { IoEarthSharp } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import BreadcrumbCustom from "components/custom-components/BreadcrumbCustom";
import { API_BASE_URL, NASA_API_KEY } from "configs/AppConfig";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";
const { Option } = Select;

const AstronomyPhotoOfDay = () => {

    const { currentTheme } = useSelector((state) => state.theme);
    const [apod, setApod] = useState(null);
    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [focusedData, setFocusedData] = useState(null);
    const [date, setDate] = useState(`${dayjs().format("YYYY-MM-DD")}`)

    const [filters, setFilters] = useState({
        rover: "curiosity",
        camera: null,
        sol: 1,
        page: 1,
    });

    const showModal = (item) => {
        setIsModalOpen(true);
        setFocusedData(item);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setFocusedData(null);
    };

    const nextPage = () => {
        setFilters({...filters, page: filters.page + 1});
    }

    const previousPage = () => {
        setFilters({...filters, page: filters.page - 1});
    }

    //sync date values
    const onChangeDate = (date, dateString) => {
        setDate(dateString);
    };

    useEffect(() => {
        // ${dayjs().format("YYYY-MM-DD")}
        axios
        .get(`${API_BASE_URL}/planetary/apod?date=${date}&api_key=${NASA_API_KEY}`, {
            headers: {
                Accept: "text/plain",
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then((res) => {
            return res.data;
        })
        .then((res) => {
            setLoading(false);
            setApod(res);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
            setApod(null);
        });

    }, [date])

    console.log(apod);
    return(
        <>
            {/* loading spinner ------------------------------------------------------------------- */}
            {loading && (
                <div className="loading-spinner-wrapper">
                    {currentTheme === "light" ? (
                        <img
                            src="/img/spinner-light.gif"
                            style={{ width: "70px", height: "70px" }}
                        />
                    ) : (
                        <img
                            src="/img/spinner-dark.gif"
                            style={{ width: "70px", height: "70px" }}
                        />
                    )}
                </div>
            )}
            
            {/* no data message ------------------------------------------------------------------- */}
            {/* {
                !loading && data.length < 1 && 
                <div className="loading-spinner-wrapper">
                    No Data
                </div>
            } */}

            <div>
                <Row>
                    {/* breadcrumb ------------------------------------------------------------------- */}
                    <Col xs={24} sm={10}>
                        <BreadcrumbCustom
                            name="Astronomy Pictures"
                            level1="Picture Of The Day"
                            level2="Imagery"
                        />
                    </Col>
                    
                    {/* searching filters input fileds ---------------------------------------------------------------------------------------- */}
                    <Col className="filter-column" xs={24} sm={14} style={{display: "flex", justifyContent: "end"}}>
                        <Col xs={0} sm={8} style={{maxWidth: "150px"}}>                        
                            <Form className="filter-inputs" style={{width: "100%"}} layout="vertical">
                                <Form.Item label="Date" style={{width: "100%"}}>
                                    <DatePicker placement="bottomRight" onChange={onChangeDate} style={{width: "100%"}}/>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col xs={24} sm={0}>                        
                            <Form className="filter-inputs" style={{width: "150px"}} layout="vertical">
                                <Form.Item label="Date">
                                    <DatePicker placement="bottomLeft" onChange={onChangeDate}/>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Col>
                    {/* <Col className="filter-column" xs={24} sm={0} style={{ justifyContent: "end"}}>
                        <Form className="filter-inputs" style={{width: "150px"}} layout="vertical">
                            <Form.Item label="Date">
                                <DatePicker placement="bottomLeft" onChange={onChangeDate}/>
                            </Form.Item>
                        </Form>
                    </Col> */}
                </Row>
            </div>

            <Card className={`${currentTheme === "light" && "ant-card-custom"} apod-card`}>
                <Row className="imagery-card-row">
                    <Col xs={24} sm={18} className="imagery-card-row-col-1">
                        <img
                            src={apod?.url}
                            width={"100%"}
                            height={"100%"}
                        />
                    </Col>
                    <Col xs={24} sm={6} className="imagery-card-row-col-2">
                        <div>
                            <h3 style={{paddingTop: "5%"}} className="apod-text">{apod?.title}</h3>
                            <p style={{cursor: "pointer"}} onClick={() => {showModal(apod)}} className="apod-text">{apod?.explanation.substring(0, 400)}...</p>
                            <p style={{marginTop: "10%"}} className="apod-text">{apod?.date}</p>
                        </div>
                    </Col>
                    
                </Row>
            </Card>

            {/* image informatin modal ------------------------------------------------------------------------------------- */}
            <Modal
                title=""
                open={isModalOpen}
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={[null]}
            >
                <span>{focusedData?.explanation}</span>
            </Modal>
        </>
    );
}

export default AstronomyPhotoOfDay;