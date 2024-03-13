import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./pages/Layout/Layout";

function App() {
    return (
        <div className="App w-full h-auto flex flex-col items-center bg-[#ffffff] pt-32 ">

            <Header/>

            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/layout'} element={<Layout/>}/>
            </Routes>

        </div>
    );
}

export default App;
