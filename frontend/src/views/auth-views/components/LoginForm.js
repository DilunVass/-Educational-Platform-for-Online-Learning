import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Button, Form, Input, Divider, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import CustomIcon from "components/util-components/CustomIcon";
import {
    // signIn,
    setUser,
    setUserId,
	setUserImage,
    setUserFirstName,
    setUserLastName,
    setUserRole,
    setIsDefaultPassword,
    showLoading,
    stopLoading,
    showAuthMessage,
    hideAuthMessage,
    signInSuccess,
} from "store/slices/authSlice";
import {onSwitchTheme} from "store/slices/themeSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { API_AUTH_URL } from "configs/AppConfig";

export const LoginForm = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookies, setCookie, removeCookie] = useCookies([
        "isDefaultPassword",
        "token",
        "userId",
        "userRole",
        "userFirstName",
        "userLastName",
		"userImage",
		"isDarkMode",
    ]);

    //const savedUser = useSelector((state) => state.auth.user);
    const [showMessage, setShowMessage] = useState("");

    const {
        hideAuthMessage,
        showLoading,
        extra,
        loading,
    } = props;

    const initialCredential = {
        user_name: "",
        password: "",
    };

    const signIn = async (data) => {
        try {
            const response = await axios.post(
                `${API_AUTH_URL}/api/auth/signin`,
                {
                    "userCredentials" : {
                        user_name: `${data.user_name}`,
                        password: `${data.password}`,
                    }
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "text/plain",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
            console.log(response.data);

            if (response.data.status === "Fail") {
                setShowMessage("Invalid User name or Password !");
                setTimeout(() => {
                    setShowMessage("");
                    dispatch(stopLoading());
                }, 1500);
            } else if (response.data.status === "Success") {

                setCookie(
                    "isDefaultPassword",
                    response.data.isDefaultPassword === true? 'true' : 'false',
                    { path: "/", expires: new Date(Date.now() + 3600e3) }
                );
                setCookie("token", response.data.token, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });
                setCookie("userId", response.data.id, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });
                setCookie("userRole", response.data.role, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });
                setCookie("userFirstName", response.data.first_name, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });
                setCookie("userLastName", response.data.last_name, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });
				setCookie("userImage", response.data.profilePicture, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });
                setCookie("isDarkMode", response.data.isDarkMode === true? 'dark' : 'light'
				, {
                    path: "/",
                    expires: new Date(Date.now() + 3600e3),
                });

                dispatch(signInSuccess(response.data.token));
                dispatch(
                    setIsDefaultPassword(
                        response.data.isDefaultPassword === true? 'true' : 'false'
                    )
                );
                
				dispatch(setUserImage(response.data.profilePicture));
				dispatch(onSwitchTheme(response.data.isDarkMode === true? 'dark' : 'light'));
                dispatch(setUserId(response.data.id));
                dispatch(setUserFirstName(response.data.first_name));
                dispatch(setUserLastName(response.data.last_name));
                dispatch(setUserRole(response.data.role));

                navigate("/");
            } else {
                setShowMessage("Error Occured !");
                setTimeout(() => {
                    setShowMessage("");
                    dispatch(stopLoading());
                }, 1500);
            }
        } catch (error) {
            if (error.response.status === 401){

                if(error.response.data.message === "invalid username!"){
                    setShowMessage(`${error.response.data.message}`);
                    setTimeout(() => {
                        setShowMessage("");
                        dispatch(stopLoading());
                    }, 1500);
                }else if(error.response.data.message === "invalid passowrd!"){
                    setShowMessage(`${error.response.data.message}`);
                    setTimeout(() => {
                        setShowMessage("");
                        dispatch(stopLoading());
                    }, 1500);
                }else{
                    setShowMessage("Unauthorized!");
                    setTimeout(() => {
                        setShowMessage("");
                        dispatch(stopLoading());
                    }, 1500);
                }
            }else{

                setShowMessage("Error Occured !");
                setTimeout(() => {
                    setShowMessage("");
                    dispatch(stopLoading());
                }, 1500);
            }
        }
    };

    const onLogin = (values) => {
        showLoading();
        signIn(values);
    };

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => hideAuthMessage(), 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    });

    return (
        <>
            <motion.div
                initial={{ opacity: 0, marginBottom: 0 }}
                animate={{
                    opacity: showMessage ? 1 : 0,
                    marginBottom: showMessage ? 20 : 0,
                }}
            >
                <Alert type="error" showIcon message={showMessage}></Alert>
            </motion.div>
            <Form
                layout="vertical"
                name="login-form"
                initialValues={initialCredential}
                onFinish={onLogin}
            >
                <Form.Item
                    name="user_name"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your user name",
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined className="text-primary" />} />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="text-primary" />}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={loading}
                    >
                        Sign In
                    </Button>
                </Form.Item>
                {extra}
            </Form>
        </>
    );
};

LoginForm.propTypes = {
    otherSignIn: PropTypes.bool,
    showForgetPassword: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

// LoginForm.defaultProps = {
//     otherSignIn: true,
//     showForgetPassword: false,
// };

const mapStateToProps = ({ auth }) => {
    const { loading, message, showMessage, token, redirect } = auth;
    return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
    showAuthMessage,
    showLoading,
    hideAuthMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
