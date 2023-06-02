import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online";
import Profile from "../../pages/profile/Profile";
export default function Rightbar ({profile}) {
    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> ve <b>3 arkadaşının</b> bugün doğum günü.
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Çevrimiçi Arkadaşlar</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">Kullanıcı Bilgileri</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Yaşadığı Şehir:</span>
                        <span className="rightbarInfoValue">Sivas</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Memleketi:</span>
                        <span className="rightbarInfoValue">Malatya</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">İlişki Durumu:</span>
                        <span className="rightbarInfoValue">İlişkisi Var</span>
                    </div>
                    <h4 className="rightbarTitle">Arkadaşlar</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Eyüp Özer</span>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar /> }
            </div>
        </div>
    )
}