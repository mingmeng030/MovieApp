import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
//함수형 component
//Route 의 path는 변수처럼 실제 About과 이름이 달라도 된다.
//-> import {About as Potato} from "./routes/About";

function App(){
    return (
    <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
    );
}

export default App;