import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Button,
    Card,
    Col,
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
import { handleInput } from "concurrently/src/defaults";
const { Option } = Select;

const MarsRoverPhotos = () => {

    const { currentTheme } = useSelector((state) => state.theme);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [focusedData, setFocusedData] = useState(null);
    const [sol, setSol] = useState(1);

    const [filters, setFilters] = useState({
        rover: "curiosity",
        camera: null,
        sol: 1,
        page: 1,
    });

    const showModal = () => {
        setIsModalOpen(true);
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

    useEffect(() => {
        setLoading(true);

        let uri = `${API_BASE_URL}/mars-photos/api/v1/rovers/`;
        // uri += filters.rover !== "" ? filters.rover : "";
        uri += filters.rover !== "" ? `${filters.rover}/photos?sol=${filters.sol}&page=${filters.page}` : `photos?sol=${filters.sol}&page=${filters.page}`;
        uri += filters.camera !== null ? `&camera=${filters.camera}` : "";
        uri += `&api_key=${NASA_API_KEY}`;
        
        console.log("useeffect uri");
        console.log(uri);

        axios
            .get(uri, {
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
                setData(res.photos);
            })
            .catch((err) => {
                setLoading(false);
                setData([]);
            });
    }, [filters]);

    return (
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
            {
                !loading && data.length < 1 && 
                <div className="loading-spinner-wrapper">
                    No Data
                </div>
            }

            <div>
                <Row>
                    {/* breadcrumb ------------------------------------------------------------------- */}
                    <Col xs={24} sm={10}>
                        <BreadcrumbCustom
                            name="Mars Rover Photos"
                            level1="Mars"
                            level2="Mars Rovers"
                        />
                    </Col>
                    
                    {/* searching filters input fileds ---------------------------------------------------------------------------------------- */}
                    <Col className="filter-column" xs={24} sm={14} style={{display: "flex", justifyContent: "end"}}>
                        
                        {/* select rover name ---------------------------------------------------------------------------------------- */}
                        <Form className="filter-inputs" style={{width: "100px"}} layout="vertical">
                            <Form.Item label="Rover">
                                <Select
                                    style={{
                                        width: "100%",
                                    }}
                                    defaultValue={filters.rover}
                                    onChange={(value) => {
                                        setFilters({
                                            ...filters,
                                            rover: value,
                                            camera: null,
                                            sol: 1,
                                            page: 1,
                                        });
                                        setSol(1);
                                    }}
                                >
                                    <Option value="curiosity">
                                        <span
                                            style={{
                                                color:
                                                    currentTheme === "dark"
                                                        ? "white"
                                                        : "grey",
                                            }}
                                        >
                                            Curiosity
                                        </span>
                                    </Option>
                                    <Option value="opportunity">
                                        <span
                                            style={{
                                                color:
                                                    currentTheme === "dark"
                                                        ? "white"
                                                        : "grey",
                                            }}
                                        >
                                            Opportunity
                                        </span>
                                    </Option>
                                    <Option value="spirit">
                                        <span
                                            style={{
                                                color:
                                                    currentTheme === "dark"
                                                        ? "white"
                                                        : "grey",
                                            }}
                                        >
                                            Spirit
                                        </span>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Form>

                        {/* select camera type ------------------------------------------------------------------------------------- */}
                        <Form className="filter-inputs" style={{width: "120px"}} layout="vertical">
                            <Form.Item label="Camera" >
                                <Select
                                    style={{
                                        width: "100%",
                                    }}
                                    value={filters.camera}
                                    onChange={(value) => {
                                        setFilters({
                                            ...filters,
                                            camera: value,
                                            page: 1
                                        });
                                    }}
                                >
                                    <Option value={null}>
                                        <span
                                            style={{
                                                color:
                                                    currentTheme === "dark"
                                                        ? "white"
                                                        : "grey",
                                            }}
                                        >
                                            All
                                        </span>
                                    </Option>
                                    {
                                        data[0]?.rover.cameras.map((item, index) => {
                                            return(
                                                <Option value={item.name}>
                                                    <Tooltip title={item.full_name}>
                                                        <span
                                                            style={{
                                                                display: "block",
                                                                width: "100%",
                                                                color:
                                                                    currentTheme === "dark"
                                                                        ? "white"
                                                                        : "grey",
                                                            }}
                                                        >
                                                            {item.name}
                                                        </span>
                                                    </Tooltip>
                                                </Option>
                                            );
                                        })
                                    }
                                </Select>
                            </Form.Item>
                        </Form>

                        {/* select sol value -------------------------------------------------------------------------------------- */}
                        <Form className="filter-inputs" layout="vertical">
                            <Form.Item label="Sol(Mars Day)">
                                <InputNumber 
                                    style={{width: "100px"}} 
                                    addonAfter={<SearchOutlined className="search-icon" onClick={() => {setFilters({...filters, sol: sol, page: 1})}}/>} 
                                    value={sol}
                                    min={1}
                                    max={data[0]?.rover?.max_sol}
                                    onChange={(value) => {setSol(value)}}
                                    onKeyDown={(event) => {
                                        if (event.key !== 'Backspace' && !/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }} 
                                />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
            
            {/* image tiles --------------------------------------------------------------------------------- */}
            {!loading && (
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col style={{ marginBottom: "15px" }}>
                                <Button
                                    className="rounded-Button"
                                    icon={<MdMoreHoriz />}
                                    onClick={() => {
                                        showModal();
                                        setFocusedData(item);
                                    }}
                                    style={{
                                        backgroundColor:
                                            currentTheme === "light" && "white",
                                    }}
                                />
                                <Image
                                    src={item.img_src}
                                    style={{
                                        width: "200px",
                                        height: "200px",
                                        overflow: "hidden",
                                        boxShadow:
                                            currentTheme === "light" &&
                                            "0px 0px 5px 1px grey",
                                    }}
                                    className="img-tile"
                                    preview={{
                                        mask: (
                                            <>
                                                <div className="img-title-mask-wrapper">
                                                    <div>
                                                        <FaSpaceShuttle
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                        />
                                                        <span>
                                                            Rover:{" "}
                                                            <span className="label">
                                                                {
                                                                    item.rover
                                                                        .name
                                                                }
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <GiVideoCamera
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                        />
                                                        <span>
                                                            Camera:{" "}
                                                            <span className="label">
                                                                {
                                                                    item.camera
                                                                        .name
                                                                }
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <GiSpaceShuttle
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                        />
                                                        <span>
                                                            Landed on Mars:{" "}
                                                            <br />
                                                            <span className="label">
                                                                {
                                                                    item.rover
                                                                        .landing_date
                                                                }
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <IoMdPlanet
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                        />
                                                        <span>
                                                            Sol (Day on Mars):
                                                            <br />
                                                            <span className="label">
                                                                {item.sol}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <IoEarthSharp
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                marginRight:
                                                                    "10px",
                                                            }}
                                                        />
                                                        <span>
                                                            Earth Date:{" "}
                                                            <span className="label">
                                                                {
                                                                    item.earth_date
                                                                }
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        ),
                                    }}
                                />
                                <span style={{ color: "transparent" }}>AB</span>
                            </Col>
                        );
                    })}
                </Row>
            )}

            {/* {!loading && data.length > 1 && <Pagination style={{marginTop: "20px"}} defaultCurrent={1} total={500} showSizeChanger={false}/>} */}
            {/* pagination ------------------------------------------------------------------------------------- */}
            {
                !loading && data.length > 0 &&
                <div>
                    <Button 
                        style={{marginRight: "5px"}}
                        disabled={filters.page === 1 && true}
                        onClick={previousPage}
                    >
                        previous
                    </Button>
                    <Button
                        disabled={data.length < 25 && true}
                        onClick={nextPage}
                    >
                        Next
                    </Button>
                </div>
            }

            {/* image informatin modal ------------------------------------------------------------------------------------- */}
            <Modal
                title=""
                open={isModalOpen}
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={[null]}
            >
                <Row style={{ width: "100%" }}>
                    <Col xs={24} sm={14} style={{ marginBottom: "15px" }}>
                        <Image
                            src={focusedData?.img_src}
                            className="img-model"
                            style={{
                                width: "250px",
                                height: "230px",
                            }}
                        />
                    </Col>
                    <Col xs={24} sm={10}>
                        <span>taken by</span>
                        <h2
                            style={{
                                color: currentTheme === "light" && "black",
                            }}
                        >
                            {focusedData?.rover.name} Rover
                        </h2>
                        <h4
                            style={{
                                color: currentTheme === "light" && "black",
                            }}
                        >
                            {focusedData?.camera.name} Camera
                        </h4>
                        <p
                            style={{
                                color: currentTheme === "light" && "black",
                                marginTop: "-15px",
                            }}
                        >
                            ({focusedData?.camera.full_name})
                        </p>
                        <span>landed on</span>
                        <p
                            style={{
                                color: currentTheme === "light" && "black",
                                marginTop: "-5px",
                            }}
                        >
                            {focusedData?.rover.landing_date}
                        </p>
                        <span>taken on</span>
                        <p
                            style={{
                                color: currentTheme === "light" && "black",
                                marginTop: "-5px",
                            }}
                        >
                            {focusedData?.rover.landing_date} (sol{" "}
                            {focusedData?.sol} on Mars)
                        </p>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default MarsRoverPhotos;
