export function LoginForm(){
    return(
        <>
        <div className="LoginFormContainer">
         <button>Login with Facebook</button>
         <button>Login with Google</button>
       <h2>Oppure</h2>

       <form action="">
        <input type="email" />
        <input type="password" />
        <div>
            <button>Login</button>
            <p>or Sign Up</p>
            </div>
        
       </form>

        </div>
        </>
    )
}