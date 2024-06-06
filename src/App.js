import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Birds from "./pages/Birds/Birds";
import Cats from "./pages/Cats/Cats";
import Dogs from "./pages/Dogs/Dogs";
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
    return (
        <div className="body">
            <div className="navbar-wrapper">
                <Navbar />
            </div>

            <div className="content">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/dogs" element={<Dogs />} />
                    <Route path="/birds" element={<Birds />} />
                    <Route path="/cats" element={<Cats />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
