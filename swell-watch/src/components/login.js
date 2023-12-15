import { GoogleLogin } from 'react-google-login';

const clientId = '711257370451-c51493ed6nr7qtdmjndn4snhdos9l14b.apps.googleusercontent.com';

function Login() 
{

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    }
    
    return (
        <div id = "signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            /> 
        </div>
    )
}

export default Login; 