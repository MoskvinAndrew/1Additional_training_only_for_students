import React from 'react';
import Accordion from "./components/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";



function App() {

    return (
        <div className="App">
            <PageTitle title={"Zagolovok"}/>

            <Accordion titleValue ={"Menu" } collapsed={true}/>
            <Accordion titleValue ={"Users" } collapsed={true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}



type PageTitlePropsType = {
    title:string
};
function PageTitle(props:PageTitlePropsType) {
    return <h1>{props.title}</h1>

};


export default App;

