import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
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