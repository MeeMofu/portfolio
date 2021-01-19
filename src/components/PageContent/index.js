import React from 'react';
import CurrentTab  from "./CurrentTab";
import About from "../Tabs/About";
import Portfolio from "../Tabs/Portfolio"
function Content(props) {
    const {currentTab} = props;

    const renderPage = ()=>{
        switch (currentTab.name) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            //  case 'Contact':
            //     return <Contact />;
            //  case 'Resume':
            //     return <Resume />;
            default:
                return <About />;
            
        }
        
    }

    return (
        <div className="container py-5"  style={{color: "var(--text)", textShadow:" 1px 1px var(--header)"}}>
            <h2 className="text-center text-md-left px-1 px-md-3 px-lg-5" style={{ fontSize: "2.5rem", }} >{currentTab.name} </h2>
            <CurrentTab>{renderPage()}</CurrentTab> 
        </div>
    )
}

export default Content