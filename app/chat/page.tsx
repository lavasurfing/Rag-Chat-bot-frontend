import { Button } from "@/components/ui/button";
import { Heading } from "../ui/Heading";
import Head from "next/head";
const ChatPage = () => {

    return (
        <div className="main-container flex flex-col justify-center items-center h-screen bg-black p-4 mb-0 gap-1">
            <div className="banner bg-white w-1/2 p-4 rounded shadow mb-4">
                <Heading />
            </div>
                <div className="chat-messages w-1/2 h-150 bg-gray-600 rounded shadow overflow-y-auto flex flex-col justify-end">
                </div>
                <div className="foot-area w-1/2 mt-4 flex items-center">
                    <input
                        type="text"
                        placeholder="Type your message here..."
                        className="flex-1 p-2 rounded-xl border bg-white border-gray-300 field-sizing-content"
                    />
                    <Button className="p-2 bg-blue-600 text-white rounded-xl shadow-amber-400">Send</Button>
                </div>
        </div>
    )
}

export default ChatPage;