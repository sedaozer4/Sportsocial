import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import AuthUser from './auth/AuthUser';
import Profile from "./profile/Profile";
import Messenger from "./messenger/Messenger";

function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/messenger" element={<Messenger />} />

                </Routes>
            </div>
        </>
    );
}

export default Auth;