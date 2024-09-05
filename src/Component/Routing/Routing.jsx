import {Routes,Route} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { lazy , Suspense } from "react";
import React from "react";
import PageLoader from "../PageLoader/PageLoader";
const Home = lazy(() => import("../Page/Home/Home"));
const CoinsDetailsPage = lazy(() => import("../Page/Coins/CoinsDetailPage"));
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

function Routing(){
    return(
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={
                        <Suspense fallback={<PageLoader/>}>
                            <Home/>
                        </Suspense>
                    }></Route>
                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<PageLoader/>}>
                            <CoinsDetailsPage/>
                        </Suspense>}></Route>
                </Route>
            </Routes>
        </CustomErrorBoundary>
    );
}

export default Routing;