import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Label, FormGroup, Alert, Form } from "reactstrap";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { registers } from "src/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import qs from "qs";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Controlled Component: Control tất cả mọi thứ trên giao diện bằng state, props
// Uncontrolled Component:Control giao diện không thông qua state, props

// cả useState lẫn useRef đều dungf để lưu trữ data
// Khác: khi state thay đổi component bị render lại, ref thay đổi component không bị render lại

// Tạo schema validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(3, "Mật Khẩu  phải từ 3 đến 20 kí tự")
    .max(20, "Mật Khẩu phải từ 3 đến 20 kí tự"),
  hoTen: yup
    .string()
    .required("Họ tên không được để trống")
    .min(3, "Họ tên  phải từ 3 đến 20 kí tự")
    .max(20, "Họ tên phải từ 3 đến 20 kí tự"),
  soDT: yup
    .string()
    .matches(phoneRegExp, "Số điện thoại không đúng")
    .min(10, "Số điện thoại không đúng")
    .max(11, "Số điện thoại không đúng")
    .required("Số điện thoại không được để trống"),
  maNhom: yup
    .string()
    .required("Mã nhóm không được để trống")
    .min(3, "Mã nhóm  phải từ 3 đến 20 kí tự")
    .max(20, "Mã nhóm phải từ 3 đến 20 kí tự"),
  email: yup
    .string()
    .email("Vui lòng điền đầy đủ email")
    .required("Email không được để trống")
    .min(3, "Email  phải từ 3 đến 20 kí tự")
    .max(20, "Email phải từ 3 đến 20 kí tự"),
});
export default function SignUp() {
  // const inpTaiKhoan = useRef();
  // const inpMatKhau = useRef();
  const { result,  error} = useSelector((state) => state.auth);
//   useEffect(() => {
//     if(result.length != 0 && result.status === 201) {
//       const messageText = (result.statusText === "Created") ? "Tạo thành công" : "";
//       alert(messageText);
//     }
//   // setValues(initialValue);
// }, [result]);
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
  const handleLogin = (values) => {
    dispatch(registers(values));
    console.log(values);
  };
  if(result) {
    return  <Redirect to="/login" />;
}
  return (
    <div className="container-login singup">
      <div className="form-container">
        <Form
          className="ml-4 form-input form-input-signUp"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div>
            <div className="header">
              <h2>Sign Up </h2>
            </div>
            <div className="form-row ml-2">
              <FormGroup className="col-6">
                <Input
                  type="text"
                  className="form-control"
                  {...register("taiKhoan")}
                  placeholder="Tài Khoản"
                />
              </FormGroup>
              {errors.taiKhoan && (
                <div className="alert alert-danger">
                  {errors.taiKhoan.message}
                </div>
              )}
              <FormGroup className="col-6">
                <Input
                  type="text"
                  className="form-control"
                  {...register("hoTen")}
                  placeholder="Họ Tên"
                />
              </FormGroup>
              {errors.hoTen && (
                <Alert className="alert alert-danger">
                  {errors.hoTen.message}
                </Alert>
              )}
            </div>
            <FormGroup className="ml-2">
              <Input
                type="password"
                className="form-control"
                {...register("matKhau")}
                placeholder="Mật Khẩu"
              />
            </FormGroup>
            {errors.matKhau && (
              <Alert className="alert alert-danger">
                {errors.matKhau.message}
              </Alert>
            )}
            <FormGroup className="ml-2">
              <Input
                type="text"
                className="form-control"
                {...register("email")}
                placeholder="Email"
              />
            </FormGroup>
            {errors.email && (
              <Alert className="alert alert-danger">
                {errors.email.message}
              </Alert>
            )}
            <div className="form-row ml-2">
              <FormGroup className="col-6">
                <Input
                  type="text"
                  className="form-control"
                  {...register("soDT")}
                  placeholder="SĐT"
                />
              </FormGroup>
              {errors.soDT && (
                <Alert className="alert alert-danger">
                  {errors.soDT.message}
                </Alert>
              )}
              <FormGroup className="col-6">
                <Input
                  type="text"
                  className="form-control"
                  {...register("maNhom")}
                  placeholder="Mã Nhóm"
                />
              </FormGroup>
              {errors.maNhom && (
                <Alert className="alert alert-danger">
                  {errors.maNhom.message}
                </Alert>
              )}
            </div>

            {error && <Alert color="danger">{error}</Alert>}

            <FormGroup className="text-right">
              <Button className="btn btn-login">Đăng Kí </Button>
            </FormGroup>
          </div>
        </Form>
        <div className="form-image">
          <div className="text">
            <h2>
              Well come to <br />
              Courses
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
