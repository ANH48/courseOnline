import React from 'react'
import {Redirect, Route} from 'react-router-dom'

import {useSelector} from 'react-redux'
export default function AdminRoute({children, ...props}) {
    const {userInfo} = useSelector((state) => state.auth);
    // Chưa đăng nhập 
    if(!userInfo){
        return <Redirect to={`/login?redirectTo=${props.path}`} />
    }
    // đăng nhập nhưng không phải là giảng viên 
    if(userInfo.maLoaiNguoiDung !== "GV") {
        return <Redirect to="/" />
    }

   return <Route {...props}>{children}</Route>;
}
