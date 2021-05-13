import React from 'react'
import Cart from './pages/Cart';
import Course from './pages/Course';
import Courses from './pages/Courses';
import Home from './pages/Home';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/courses/:category',
    exact: false,
    main: () => <Courses />
  },
  {
    path: '/course/:id',
    exact: false,
    main: () => <Course />
  },
  {
    path: '/cart',
    exact: false,
    main: () => <Cart />
  },
  {
    path: '',
    exact: false,
    main: () => <Home />
  },
  {
    path: '*',
    exact: false,
    main: () => <Home />
  }
];
export default routes;

{/* <Route path="/login">
<LoginPage />
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
  </Route> }
  {/* Default  */}
//    <Route path="*">
//      <Home />
//    </Route>
//  </Switch>
//  </AppLayout> */}
