import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Label, FormGroup, Alert, Form } from "reactstrap";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { login } from "src/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import qs from "qs";

// Controlled Component: Control tất cả mọi thứ trên giao diện bằng state, props
// Uncontrolled Component:Control giao diện không thông qua state, props

// cả useState lẫn useRef đều dungf để lưu trữ data
// Khác: khi state thay đổi component bị render lại, ref thay đổi component không bị render lại

// Tạo schema validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không đucowj để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup
    .string()
    .required("Mật khẩu không đucowj để trống")
    .min(3, "Mật Khẩu  phải từ 3 đến 20 kí tự")
    .max(20, "Mật Khẩu phải từ 3 đến 20 kí tự"),
});
export default function LoginPage() {
  // const inpTaiKhoan = useRef();
  // const inpMatKhau = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // Sử dụng Khi UI coponent không load
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const handleLogin = (values) => {
    // console.log(inpTaiKhoan.current.value);
    // console.log(inpMatKhau.current.value);
    // console.log(values);
    // dispatch action đăng nhập
    dispatch(login(values));
  };
  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/" />;
  }
  return (
    //     <form onSubmit={handleSubmit(handleLogin)}>
    //       <h1>Login Page</h1>

    //       <div className="form-group">
    //         <label>Tài Khoản</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           {...register("taiKhoan", {
    //               required: {value: true , message: "Tài khoản không được để trống"} ,
    //               minLength: {
    //                   value: 5,
    //                   message: "Tài khoản phải từ 5 đến 20 kí tự",
    //               },
    //               maxLength: {
    //                 value: 20,
    //                 message: "Tài khoản phải từ 5 đến 20 kí tự",
    //             }
    //             })}
    //         />
    //       </div>
    //      {errors.taiKhoan && ( <div className="alert alert-danger">{errors.taiKhoan.message}</div>)}
    //       <div className="form-group">
    //         <label>Mật Khẩu</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           {...register("matKhau", { required: true })}
    //         />
    //       </div>
    //       <button className="btn btn-success">Đăng nhập </button>
    //     </form>
    //   );

    <div className="container-login">
      <div className="form-container">
        <Form className="ml-4 form-input" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <div className="header">
              <h2>Login</h2>
              <p>
                Don't have an account?<a href="/signup">Create your account</a>
              </p>
            </div>
            <FormGroup className="ml-2">
              <Label>Tài Khoản</Label>
              <Input
                type="text"
                className="form-control"
                {...register("taiKhoan")}
              />
            </FormGroup>
            {errors.taiKhoan && (
              <div className="alert alert-danger">
                {errors.taiKhoan.message}
              </div>
            )}
            <FormGroup className="ml-2">
              <Label>Mật Khẩu</Label>
              <Input
                type="password"
                className="form-control"
                {...register("matKhau")}
              />
            </FormGroup>
            {errors.matKhau && (
              <Alert className="alert alert-danger">
                {errors.matKhau.message}
              </Alert>
            )}

            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup className="d-flex ml-4 justify-content-between" >
              <div className="remember">
                <Input type="checkbox" />
                <Label>Remember me</Label>
              </div>
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
            </FormGroup>
            <FormGroup className="text-right">
              <Button className="btn btn-login">Đăng nhập </Button>
            </FormGroup>
          </div>
        </Form>
        <div className="form-image">
                <div className="text">
                  <h2>Well come to <br/>Courses</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
      </div>
      </div>
      
    </div>
  );
}
