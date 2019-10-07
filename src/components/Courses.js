import React from "react";
import {NavLink, Route, Redirect} from "react-router-dom";
import CourseContainer from "../courses/CourseContainer";


const Courses = ({ match }) => {
    return (
        <div>
           <div>
               <h2>Courses</h2>
               <ul>
                   <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
                   <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
                   <li><NavLink to={`${match.url}/js`}>JS</NavLink></li>
               </ul>
           </div>

            <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/html`}/>}/>
            <Route path={`${match.path}/html`} render={() => <CourseContainer title="HTML"/>}/>
            <Route path={`${match.path}/css`} render={() => <CourseContainer title="CSS"/>}/>
            <Route path={`${match.path}/js`} render={() => <CourseContainer title="JS"/>}/>
        </div>
    );
};

export default Courses;