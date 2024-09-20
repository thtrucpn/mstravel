import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import HomePage from '../pages/HomePage';

const MainLayout = ({children}) => {
    console.log(children); // Kiểm tra giá trị của children
    return (
        <div> 
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};
export default MainLayout;
