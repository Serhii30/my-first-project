import loader from "../../../assests/images/loading.gif";
import React from "react";

let Preloader = (props) => {
    return  <div style = { { backgroundColor: "whitesmoke"} }>
        <img src={loader} />
    </div>
}

export default Preloader;