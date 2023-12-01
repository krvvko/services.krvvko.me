import React from "react";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
