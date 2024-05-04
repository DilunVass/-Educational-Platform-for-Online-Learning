import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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
} from "antd";
import {
    EyeOutlined,
    DeleteOutlined,
    EditOutlined,
    UsergroupDeleteOutlined,
    CheckOutlined,
} from "@ant-design/icons";

const DefaultDashboard = () => {
    return (
        <>
            <div style={{height: "100%"}}>
                <img className="home-planet-img" src="/img/others/planet.png" />
                <div className="mars-rover-explanation">
                    <h3>Mars Rover Photos</h3>
                    <p>
                        This API is designed to collect image data gathered by
                        NASA's Curiosity, Opportunity, and Spirit rovers on Mars
                        and make it more easily available to other developers,
                        educators, and citizen scientists. This API is
                        maintained by Chris Cerami. Each rover has its own set
                        of photos stored in the database, which can be queried
                        separately. There are several possible queries that can
                        be made against the API. Photos are organized by the sol
                        (Martian rotation or day) on which they were taken,
                        counting up from the rover's landing date. A photo taken
                        on Curiosity's 1000th Martian sol exploring Mars, for
                        example, will have a sol attribute of 1000. If instead
                        you prefer to search by the Earth date on which a photo
                        was taken, you can do that, too. Along with querying by
                        date, results can also be filtered by the camera with
                        which it was taken and responses will be limited to 25
                        photos per call. Queries that should return more than 25
                        photos will be split onto several pages, which can be
                        accessed by adding a 'page' param to the query.
                    </p>
                    <br />
                    <h3>APOD</h3>
                    <p>
                        One of the most popular websites at NASA is the
                        Astronomy Picture of the Day. In fact, this website is
                        one of the most popular websites across all federal
                        agencies. It has the popular appeal of a Justin Bieber
                        video. This endpoint structures the APOD imagery and
                        associated metadata so that it can be repurposed for
                        other applications. In addition, if the concept_tags
                        parameter is set to True, then keywords derived from the
                        image explanation are returned. These keywords could be
                        used as auto-generated hashtags for twitter or instagram
                        feeds; but generally help with discoverability of
                        relevant imagery.
                    </p>
                </div>
                <img className="home-shuttle-img" src="/img/others/shuttle.png" />
            </div>
        </>
    );
};

export default DefaultDashboard;
