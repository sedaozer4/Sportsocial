import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import {Link} from "react-router-dom";

export default function Topbar () {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link className="nav-link" to="/"><span className="logo">SportSocial</span></Link>

            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Arkadaş, post veya kategori ara..." className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks"></span>
                </div>
                <div className="topbarIcons">
                    <Link to="/profile" className="nav-link">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </Link>
                    <Link to="/messenger" className="nav-link">
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarIconBadge">3</span>
                        </div>
                    </Link>
                    <Link to="/" className="nav-link">
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </Link>
                </div>
                <Link to="/profile">
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
                </Link>

            </div>
        </div>
    )
}