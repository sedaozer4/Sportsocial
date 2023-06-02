import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {<img className="shareProfileImg" src="/assets/person/1.jpeg" alt=""/>}
                    <input placeholder="Ne düşünüyorsun?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" classname="shareIcon"/>
                            <span className="shareOptionText">Fotoğraf ve Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" classname="shareIcon"/>
                            <span className="shareOptionText">Etiket</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" classname="shareIcon"/>
                            <span className="shareOptionText">Konum</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="orange" classname="shareIcon"/>
                            <span className="shareOptionText">Duygular</span>
                        </div>
                    </div>
                    <button className="shareButton">Paylaş</button>
                </div>
            </div>
        </div>
    )
}