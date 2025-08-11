import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EmployeDetailse = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <h1>our user id is : {id}</h1>
        </>
    );
}
 
export default EmployeDetailse;