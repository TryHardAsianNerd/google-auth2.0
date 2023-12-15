import { GoogleLogout } from "react-google-login";

const clientId = "711257370451-c51493ed6nr7qtdmjndn4snhdos9l14b.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    alert("Logout made successfully");
    console.log("Logout made successfully");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );

}
export default Logout;