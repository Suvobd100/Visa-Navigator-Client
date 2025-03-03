import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
// import { Routes } from "react-router";
import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyVisaApplications from "../pages/MyVisaApplications";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout Routes */}
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<Home/>} />
          <Route path="all-visas" element={<AllVisas/>} />
          <Route path="add-visa" element={<AddVisa/>} />
          <Route path="My-added-visas" element={<MyAddedVisas/>} />
          <Route path="My-Visa-applications" element={<MyVisaApplications/>} />
          <Route path="register" element={<Register/>} />
          {/* <Route path="lesson" element={<LessonPage/>} /> */}
          {/* <Route path="vtutorials" element={<TutorialAll/>} /> */}
          {/* <Route path="lesson/:id" element={<LessonDetail/>}/> */}
          {/* <Route path="myprofile" element={<MyProfile/>} /> */}
          <Route path="*" element={<NotFound/>} />
        </Route>

        {/* Private route */}
        {/* <Route path="/priv" element={<PrivateLayout/>}>
          <Route path="myprofile" element={<PrivateRoute><MyProfile/></PrivateRoute>}/>
          <Route path="tutorials" element={<PrivateRoute><Tutorials/></PrivateRoute>}/>
          <Route path="lesson/:id" element={<PrivateRoute><LessonDetail/></PrivateRoute>}/>
          <Route path="vtutorials" element={<PrivateRoute><TutorialAll/></PrivateRoute>}/>
        </Route> */}

        {/* AuthLayout Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
