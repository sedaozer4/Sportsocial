import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import AuthUser from "../auth/AuthUser";
export default function Profile() {

        const {token} = AuthUser();
        const logoutUser = () => {
            if(token !== undefined){

            }
        }
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/post/4.jpeg" alt=""/>
                            <img className="profileUserImg" src="/assets/person/6.jpeg" alt=""/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Seda Özer</h4>
                            <span className="profileInfoDesc">Merhaba Arkadaşım Hoşgeldin!</span>
                            <span role="button" className="nav-link" to="/login" onClick={logoutUser}>Çıkış Yap</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </>
    );
}