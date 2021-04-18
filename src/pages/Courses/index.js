import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getCourseByCategory} from 'src/actions/courses'

export default function Courses() {

    const dispatch = useDispatch();

    const {category} = useParams();

    const {courses,isLoading,error} = useSelector((state) => state.courses);

    // console.log(courses);
    // Được chạy lại mỗi khi categry đuoc chạy và thay đổi new data
    useEffect(() => {
        // dispatch action api lấy dskh 
       dispatch(getCourseByCategory(category));
    },[category])
    // console.log(courses)
    // const renderCourse = () => {
    //     return Object.entries(courses).map(([propcourses,danhmuc],index) => {
    //         const {maKhoaHoc,hinhAnh,moTa} = danhmuc;
    //         return <div className="card" key={index}>
    //             {/* <h1>Tên Khoá học : {biDanh}</h1> */}
    //             <img className="card-img-top" src={hinhAnh} alt=""/>
    //             <div className="card-body">
    //                 <h4 className="card-title">{maKhoaHoc}</h4>
    //                 <p className="card-text">{moTa}</p>
    //             </div>
    //         </div>
    //     })
    // }
    return (
        <div>
            <h1>Courses List by Catagory</h1>
            {/* <div className="d-flex">
            {renderCourse()}
            </div> */}
        </div>
    )
}
