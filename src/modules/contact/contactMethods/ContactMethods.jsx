import React from "react";
import './ContactMethods.css'

const ContactMethods = ({image , method , medium1 , medium2 }) => {
    return(
<div className="col-lg-4">
    <img src={image} alt="" />
    <h2>{method}</h2>
    <h2>Toll free: {medium1}</h2>
    <h2>Fax : {medium2}</h2>

</div>
    )
}
export default ContactMethods;