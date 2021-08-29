import loader from "../../../assests/images/loading.gif";
import s from './Preloader.module.css'
import React from "react";

let Preloader = (props) => {
    return <div>
        <img src={loader} className={s.loadingPage}/>
    </div>
}

export default Preloader;