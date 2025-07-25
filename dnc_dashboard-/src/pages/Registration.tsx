import styled from "styled-components";

 const RegistrationArea = styled.div`
     background:#666;  
`
const LoginImage = styled.div`
     background-image: url(/Login-image.svg);
     background-size: cover;
     height: 100vh;
     width: 50vw;
`
function Login(){
     return(
         <>
            <RegistrationArea>Login</RegistrationArea>
            <LoginImage/>
         </>
     )
}
export default Login