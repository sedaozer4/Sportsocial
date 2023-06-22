import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from "./pages/auth/AuthUser";
import Auth from "./pages/auth";
import Guest from "./pages/guest";


function App() {
    const {getToken} = AuthUser();
    if(!getToken()){
        return <Guest />
    }
    return (
        <Auth />
    );
}

export default App;
