import {Routes,Route} from "react-router-dom";
import Home from "../Page/Home/Home";
import CoinsDetailPage from "../Page/Coins/CoinsDetailPage";
import MainLayout from "../layout/MainLayout";
function Routing(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/details/:coinId" element={<CoinsDetailPage/>}></Route>
            </Route>
        </Routes>
    );
}

export default Routing;