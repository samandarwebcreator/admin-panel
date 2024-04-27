import { Form, Input, Button, Checkbox, Typography } from "antd";
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../../assets/images/dashboard-login.png";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { name, password } = values;
    if (password === "iamAdmin") {
      console.log(`Login successful for user: ${name}`);
      localStorage.setItem("auth", JSON.stringify(name));
      toast.success("Login successful!");
      dispatch(login(name));
      form.resetFields();
      navigate("/main/dashboard");
    } else {
      toast.error("Incorrect password");
    }
  };

  return (
    <div>
      <div className="login__main-box">
        <div className="login__image-site">
          <img src={loginImage} alt="computer" className="login__image" />
        </div>
        <div className="login__container">
          <div className="login__wrapper">
            <div className="login_header">
              <Title className="custom-title">Login to the Platform</Title>
            </div>
            <Form
              form={form} 
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              layout="vertical"
              requiredMark="optional"
            >
              <span className="label__span">
                Username <span className="label__star">*</span>
              </span>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Name!",
                  },
                ]}
              >
                <Input
                  prefix={<FaUser className="login__icons" />}
                  placeholder="Enter your username"
                />
              </Form.Item>
              <span className="label__span">
                Password <span className="label__star">*</span>
              </span>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<IoMdLock className="login__icons" />}
                  type="password"
                  placeholder="Enter your password"
                  className="custom-input"
                />
              </Form.Item>
              <div className="login_password-update">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="custom-checkbox">
                    {" "}
                    &nbsp; Remember me
                  </Checkbox>
                </Form.Item>
              </div>
              <Form.Item style={{ marginBottom: "0px" }}>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  className="custom-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>

          <p className="login__footer-text">
            Copyright ©Girgitton. All rights reserved
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
