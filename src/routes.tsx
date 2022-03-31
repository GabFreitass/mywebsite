
import Home from "pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}

export default AppRoutes;