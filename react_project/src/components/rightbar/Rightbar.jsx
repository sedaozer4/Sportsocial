import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online";
//import Profile from "../../pages/profile/Profile";
export default function Rightbar ({profile}) {
    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Tahsin Öğüt</b> ve <b>3 arkadaşının</b> bugün doğum günü.
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad2.png" alt=""/>
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
                            <span className="rightbarFollowingName">Tahsin Öğüt</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">İlker Canikligil</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Mustafa Seven</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Funda Güngör</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Ebru İlkılıç</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">İpek Bayındır</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Buse Varol</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Sema Aydemir</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Barış Özcan</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Cem Karaca</span>
                        </div>
                    </div>

                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <ProfileRightbar /> }
            </div>
        </div>
    )
}