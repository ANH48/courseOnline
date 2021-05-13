import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
// import logo from "./logo.svg";
import "./styles";
// import routes from "./routes";

// Pages
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Course from "./pages/Course";
// import AdminCourses from "./pages/AdminCourses";
// import AdminUsers from "./pages/AdminUsers";
// import LoginPage from "./pages/LoginPage";

// Layout
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "./auth/AdminRoute";
import IsLoading from "./components/IsLoading";
import Cart from "./pages/Cart";

// // Sử dụng lazy load : không import trực tiếp
const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Course = lazy(() => import("./pages/Course"));
const AdminCourses = lazy(() => import("./pages/AdminCourses"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUp = lazy(() => import("./pages/SingUp"));

function App() {
  return (
    <Suspense fallback={<IsLoading></IsLoading>}>
      <BrowserRouter>
        <Switch>
          {/* Route Admin  */}
          <Route path="/admin">
            <AdminLayout>
              <Switch>
                <Redirect exact from="/admin" to="/admin/courses" />
                <AdminRoute path="/admin/courses">
                  <AdminCourses />
                </AdminRoute>
                <AdminRoute path="/admin/users">
                  <AdminUsers />
                </AdminRoute>
              </Switch>
            </AdminLayout>
          </Route>
          {/* Route Main  */}
          <Route path="/">
            <Switch>
              {/* <Route path="/login">
            <LoginPage />
            </Route>
            <AppLayout>
            <Switch>
            {showContentMenu(routes)}
            </Switch>
            </AppLayout> */}
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <AppLayout>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/courses/:category">
                    <Courses />
                  </Route>
                  <Route path="/course/:id">
                    <Course />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>{" "}
                  {/* Default  */}
                  <Route path="*">
                    <Home />
                  </Route>
                </Switch>
              </AppLayout>
            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
// const showContentMenu = (propsroutes) => {
//   let result = null ;
//   if(propsroutes.length > 0) {
//     result = propsroutes.map ((route, index) => {
//       return(
//         <Route
//         key={index}
//         path={route.path}
//         exact={route.exact}
//         >
//           {route.main}
//         </Route>
//       )
//     })
//   }
// }

export default App;
