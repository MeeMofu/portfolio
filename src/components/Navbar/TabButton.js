import React, { useEffect, useState } from 'react';
import {Animated} from "react-animated-css";

function TabBtn(props) {
    const {thisTab, currentTab, setTab} = props;
    const [isActive,setActive] = useState(false);

    useEffect(()=>{
        (thisTab === currentTab)? setActive(true):setActive(false);
    },[currentTab]);

    return (
        <div className="tabBtn text px-2 pb-2"
            onMouseEnter={() => {
                if (thisTab !== currentTab) setActive(true);
            }}
            onMouseLeave={() => {
                if (thisTab !== currentTab) setActive(false);
            }}
            onClick ={() => {
                setActive(true)
                setTab(thisTab)
            }}>
            
            {thisTab.name}

            <Animated animationIn="zoomIn" animationOut="zoomOut" 
                animationInDuration={500} animationOutDuration={500} 
                isVisible={isActive} 
                
                >
                    <div className="hl"></div>
            </Animated>
            
        </div>
    )
}

export default TabBtn;