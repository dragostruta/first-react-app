import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

// App components
import Home from "./components/Home";
import Feature from "./components/Feature";
import Header from "./components/Header";
import About from "./components/About";
import Teachers from "./components/Teacher";
import Courses from "./components/Courses";
import NotFound from "./components/NotFound";

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" render={ () => <About title='About' /> } />
                <Route exact path="/teachers" component={Teachers} />
                <Route path="/teachers/:topic/:name" component={Feature} />
                <Route path="/courses" component={Courses} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;

