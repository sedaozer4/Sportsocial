import "./sidebar.css"
import {RssFeed, School, Group, PlayCircleFilledOutlined, Chat} from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Akış</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Mesajlar</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videolar</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Gruplar</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Kurslar</span>
                    </li>
                </ul>
                <button className="sidebarButton">Daha Fazla</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}