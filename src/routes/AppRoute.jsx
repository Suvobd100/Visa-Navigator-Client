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
import PrivateRoute from "./PrivateRoute";
import PrivateLayout from "../layouts/PrivateLayout";
import VisaDetail from "../pages/VisaDetail";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout Routes */}
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<Home/>} />
          <Route path="all-visas" element={<AllVisas/>} />
          {/* <Route path="add-visa" element={<AddVisa/>} /> */}
          {/* <Route path="My-added-visas" element={<MyAddedVisas/>} /> */}
          {/* <Route path="My-Visa-applications" element={<MyVisaApplications/>} /> */}
          {/* <Route path="lesson" element={<LessonPage/>} /> */}
          {/* <Route path="vtutorials" element={<TutorialAll/>} /> */}

          {/* <Route path="lesson/:id" element={<LessonDetail/>}/> */}

          {/* <Route path="visa/:id" element={<VisaDetail/>}/> */}

          {/* <Route path="myprofile" element={<MyProfile/>} /> */}
          <Route path="*" element={<NotFound/>} />
        </Route>

        {/* Private route */}
        <Route path="/priv" element={<PrivateLayout/>}>
          <Route path="add-visa" element={<PrivateRoute><AddVisa/></PrivateRoute>}/>
          <Route path="My-added-visas" element={<PrivateRoute><MyAddedVisas/></PrivateRoute>}/>
          <Route path="My-Visa-applications" element={<PrivateRoute><MyVisaApplications/></PrivateRoute>}/>
          
          <Route path="visa/:id" element={<PrivateRoute><VisaDetail/></PrivateRoute>}/>


          {/* <Route path="lesson/:id" element={<PrivateRoute><LessonDetail/></PrivateRoute>}/>
          <Route path="vtutorials" element={<PrivateRoute><TutorialAll/></PrivateRoute>}/> */}
        </Route>

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
