import "./messenger.css"
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/chatOnline";

export default function Messenger() {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Arkadaşlarını ara" className="chatMenuInput" />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true}/>
                            <Message />
                            <Message />
                            <Message own={true}/>
                            <Message own={true}/>
                            <Message />
                            <Message own={true}/>
                            <Message />
                            <Message own={true}/>
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Mesaj..." ></textarea>
                            <button className="chatSubmitButton">Gönder</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}