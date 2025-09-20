const ChatBubble2 = (message: any) => {

    return (
        <>
            <div className="chat chat-start" >
                <div className="chat-bubble">
                    {/* recipient */}
                    {message.recipient ? message.recipient : "Recipient said nothing"}
                </div>
            </div>
            <div className="chat chat-end">
                {/* sender */}
                <div className="chat-bubble">{message.sender ? message.sender : "You said nothing"}</div>
            </div>
        </>
    )
}

export default ChatBubble2;