import { useState } from "react";

function Authenticate({token}){

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
            method: "GET",
            headers: {
                "Content-Text":"application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const result = await response.json();
        console.log(result);
        if (result.success) {
            setSuccessMessage(result.message);
            setError(null);
          } else {
            setError(result.message || "Authentication failed");
            setSuccessMessage(null);
          }
    } catch (error) {
        console.error(error.message)
        setSuccessMessage(null)
    }
    }

    
    return (
        <>
        <h2>Authenticate!</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}

export default Authenticate;