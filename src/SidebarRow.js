import React from 'react';
import './SidebarRow.css';



function SidebarRow({selected, ICon, title}) {                       // we can deref prop here like  ({title})
    return (
        <div className={`sidebarRow ${selected && 'selected'} `} >
            <ICon  className="sidebarRow_icon"/>
            <h2 className="sidebarRow_title" > {title} </h2>              
        </div>
    )
}

export default SidebarRow;
