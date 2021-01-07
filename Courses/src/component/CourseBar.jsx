import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';
import Tabbar from './Tabbar';


const CourseBar = () => {
    return (
        <>
        <div className="row crow">
                    <div className="col-md-10 cobox">
                        <h1 className="text2">Our Courses</h1>
                    </div>

                </div>
        <Tabbar />
        
        </>
    );
};

export default CourseBar;