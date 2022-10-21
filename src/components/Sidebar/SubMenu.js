import React,{useState} from "react";



 const SubMenu=({item})=>{
    const [subnav,setSubnav]=useState(false);
    //const showSubnav = () => setSubnav(!subnav);

    return(
        <>
        <div>
        {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
        </>
    )
}
export default SubMenu;