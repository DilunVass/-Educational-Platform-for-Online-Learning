import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Carousel, Col, Row } from 'antd';
import { image } from "d3-fetch";
import { useNavigate } from "react-router-dom";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoginOutlined
} from '@ant-design/icons';
import ImageTile from "./ImageTile";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const LandingPage = () => {

    const navigate = useNavigate();
    const { currentTheme } = useSelector(state => state.theme);

    useEffect(() => {
        const leftNav = document.getElementsByClassName("ant-layout-sider");
        leftNav[0].style.display="none";
        
        const mainContent = document.getElementsByClassName("ant-layout");
        mainContent[0].style.paddingLeft="0px";
        mainContent[1].style.paddingLeft="0px"
        mainContent[2].style.paddingLeft="0px"
        
        const unfoldIcon = document.getElementsByClassName("css-k008qs");
        unfoldIcon[0].style.display="none";
        unfoldIcon[1].style.marginLeft='30px';

        const mainWrapper = document.getElementsByClassName("css-7b9zg2");
        mainWrapper[0].style.padding="0px";

    }, [])

    const data = [
        {},{}, {},{}, {},{}, {},{}, {},{}, {},
    ]

    return(        
        <>
            <Carousel autoplay>
                <div>
                    <div style={{backgroundImage: "url(/img/others/img-18.jpg)"}} className="landing-page-carousel-slides">
                        <Row style={{width: "100%", height: "100%"}}>
                            <Col xs={24} sm={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div className="landing-page-carousel-text-wrapper light-text">
                                    <span style={{fontSize: "200%", fontWeight: 900}}>Online Education</span><br/>
                                    <span>Is like a rising tide,</span><br/>
                                    <span style={{fontSize: "110%", fontWeight: 300}}>It's going to lift all boats.</span><br/><br/>
                                    <Button type="primary" icon={<LoginOutlined />}><a href={`${APP_PREFIX_PATH}/dashboards/home`}> Explore</a></Button>
                                </div>
                            </Col>
                            <Col xs={24} sm={12}>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div style={{backgroundImage: "url(/img/others/img-19.jpg)"}} className="landing-page-carousel-slides">
                        <Row style={{width: "100%", height: "100%"}}>
                            <Col xs={24} sm={12}>
                            </Col>
                            <Col xs={24} sm={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div className="landing-page-carousel-text-wrapper light-text">
                                    <span style={{fontSize: "200%", fontWeight: 900}}>Learn Yourself</span><br/>
                                    <span>Be your own guider,</span><br/>
                                    <span style={{fontSize: "110%", fontWeight: 300}}>Leads to the path of success.</span><br/><br/>
                                    <Button type="primary" icon={<LoginOutlined />}><a href={`${APP_PREFIX_PATH}/dashboards/home`}> Explore</a></Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div style={{backgroundImage: "url(/img/others/img-20.jpg)"}} className="landing-page-carousel-slides">
                        <Row style={{width: "100%", height: "100%"}}>
                                <Col xs={24} sm={12}>
                                </Col>
                                <Col xs={24} sm={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div className="landing-page-carousel-text-wrapper light-text">
                                        <span style={{fontSize: "200%", fontWeight: 900}}>It's a Fact That</span><br/>
                                        <span>Online learning is the future and will undoubtedly replace</span><br/>
                                        <span style={{fontSize: "110%", fontWeight: 300}}>Land-based learning in the future.</span><br/><br/>
                                        <Button type="primary" icon={<LoginOutlined />}><a href={`${APP_PREFIX_PATH}/dashboards/home`}> Explore</a></Button>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                </div>
            </Carousel>
            <Card className={`img-tiles-parent-wrapper-card ${currentTheme === "light" && "ant-card-custom"}`}>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    {data.map((item, index) => {
                        return (
                            <Col style={{ marginBottom: "15px" }} className="img-tiles-wrapper-column">
                                <ImageTile item={item}/>
                            </Col>
                        );
                    })}                    
                </Row>
                {/* <Spin tip="Loading" size="large" id="spinning">
                    <div
                        ref={targetRef}
                        style={{
                            padding: '50px',
                            background: 'rgba(0, 0, 0, 0.05)',
                            borderRadius: '4px',
                        }}
                    />
                </Spin> */}
            </Card>
            <br/>
        </>
    );
}

export default LandingPage;