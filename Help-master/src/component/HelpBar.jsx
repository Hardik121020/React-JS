import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';
import Tabbar from './Tabbar';
import Footer from './footer';
import FAQ from './faq';


const CourseBar = () => {
    return (
        <>
        <div className="row crow">
                    <div className="col-md-10 cobox">
                        <h1 className="text2">How can we help you ?</h1>
                    </div>

                </div>
        <Tabbar />
        <FAQ />
        <Footer />
        
        </>
    );
};

export default CourseBar;