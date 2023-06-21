import "./conversation.css"

export default function Conversation() {
    return (
        <>
            <div className="conversation">
                <img src="/assets/person/8.jpeg" alt="" className="conversationImg"/>
                <span className="conversationName">Seda Özer</span>
            </div>
            <div className="conversation">
                <img src="/assets/person/5.jpeg" alt="" className="conversationImg"/>
                <span className="conversationName">Tahsin Öğüt</span>
            </div>
            <div className="conversation">
                <img src="/assets/person/7.jpeg" alt="" className="conversationImg"/>
                <span className="conversationName">Mustafa Seven</span>
            </div>
            <div className="conversation">
                <img src="/assets/person/6.jpeg" alt="" className="conversationImg"/>
                <span className="conversationName">Funda Güngör</span>
            </div>
            <div className="conversation">
                <img src="/assets/person/10.jpeg" alt="" className="conversationImg"/>
                <span className="conversationName">Ebru İlkılıç</span>
            </div>
            <div className="conversation">
                <img src="/assets/person/3.jpeg" alt="" className="conversationImg"/>
                <span className="conversationName">Sema Aydemir</span>
            </div>
        </>
    )
}