import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";
import About from "./routes/About";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movie/:id" element={<Detail />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </div>
    );
}

export default App;
