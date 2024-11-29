import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Image } from "antd";
import { GOOGLE_BUCKET_URL } from "configs/AppConfig";
import axios from "axios";
import { isContainsOnlyWhiteSpace } from "helpers";

const ImageTile = ({ item }) => {
    const { currentTheme } = useSelector((state) => state.theme);

    const [isImageAvailable, setIsImageAvailable] = useState(false);
    const [fullName, setFullName] = useState(
        `${item?.first_name} ${item?.last_name}`
    );

    // useEffect(() => {
    //     axios
    //         .head(`${GOOGLE_BUCKET_URL}/${item?.image}`)
    //         .then((res) => {
    //             if (
    //                 res.status === 200 &&
    //                 `${GOOGLE_BUCKET_URL}/${item?.image}`.length >
    //                     GOOGLE_BUCKET_URL.length + 2
    //             ) {
    //                 //console.log(`img existenet for: ${props.name}`);
    //                 setIsImageAvailable(true);
    //             }
    //         })
    //         .catch((err) => {
    //             setIsImageAvailable(false);
    //         });
    // }, [item]);

    return (
        <>
            <div
                className={`img-tile-wrapper ${
                    currentTheme === "dark" && "img-tile-wrapper-dark"
                }`}
            >
                {/* <div className="img-text-info">
                    <p
                        className={`img-text-name ${
                            currentTheme === "dark" && "img-text-name-dark"
                        }`}
                    >
                        9090
                    </p>
                </div> */}
                {isImageAvailable && (
                    <Image
                        src={`${GOOGLE_BUCKET_URL}/${item?.image}`}
                        className="img-tile"
                        preview={{
                            mask: null
                        }}
                    />
                )}
                {!isImageAvailable && (
                    <Image
                        src="/img/avatars/noprofile.jpg"
                        className="img-tile"
                        preview={{
                            mask: null
                        }}
                    />
                )}
                <div className="img-text-info">
                    <p
                        className={`img-text-name ${
                            currentTheme === "dark" && "img-text-name-dark"
                        }`}
                    >
                        {item?.courseName}
                    </p>
                    <p
                        className={`img-text-name ${
                            currentTheme === "dark" && "img-text-name-dark"
                        }`} style={{fontSize: "12px", marginTop: "8px", fontWeight: 300}}
                    >
                        {item?.description?.substring(0, 50) + "..."}
                    </p>
                    <p
                        className={`img-text-name2 ${
                            currentTheme === "dark" && "img-text-name-dark2"
                        }`}
                    >
                        {item?.instructor? item.instructor : ""}
                    </p>
                    <p
                        className={`img-text-name2 ${
                            currentTheme === "dark" && "img-text-name-dark2"
                        }`}
                    >
                        {item?.courseDuration? item.courseDuration : ""}
                    </p>
                    <p
                        className={`img-text-name3 ${
                            currentTheme === "dark" && "img-text-name-dark3"
                        }`}
                    >
                        ${item?.price}
                    </p>
                    {/* <p className="img-text-date">
                        Expired at: 2024-9-10
                    </p> */}
                </div>
            </div>
        </>
    );
};

export default ImageTile;

//v1
