import axiosClient from './axiosClient'

const coursesAPI = {
    getCourses: () => {
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    },

    getCoursesByCategory: (category) => {
        const params = {
            maDanhMuc: category,
            maNhom: "GP01",
        };

        
        // return axiosClient.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc?maDanhuc=${category}`);
        return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc",{params});
    }
};

export default coursesAPI;

// Cách sử dụng 

// import coursesAPI from 'src/services/coursesAPI'

// const {data} = await coursesAPI.getCourses();