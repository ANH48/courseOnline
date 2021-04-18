import React from 'react'
import {Link} from 'react-router-dom'

export default function AdminLayout({children}) {
    return (
        <div>
            {/* <h1>Admin Layout</h1> */}
            <div className="d-flex">
                <div className="w-25">
                    <h3>Cyber Learn </h3>
                    <Link to="/admin/courses">Courses</Link>
                    <Link to="/admin/users">Users</Link>
                </div>
                <div className="w-75">
                    {children}
                </div>
            </div>
        </div>
    )
}
