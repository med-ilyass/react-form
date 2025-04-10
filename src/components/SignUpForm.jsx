

function SignUpForm({username, setUsername, password, setPassword,token, setToken}){

    async function handleChange(event) {
        event.preventDefault();
        console.log("hello");
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username:username,
                password:password
            })
                });
            const result = await response.json();
            console.log(result)

            if (result.success) {
                setToken(result.token);
              } else {
                setError(result.message || "Signup failed");
              }





        } catch (error) {
            console.error(error);
        }
    }
    return(
        <>
        <h2>Sign Up!</h2>
        <form onSubmit={handleChange}>
            <label>UserName: 
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <button>
                Sign Up!
            </button>
        </form>
        </>
    )

}

export default SignUpForm;