"use client"
import { Button } from "@/components/ui/button";
import { Heading } from "../ui/Heading";
import { ScrollArea_MESSAGE } from "../ui/ScrollArea";
import { Upload } from "lucide-react";


// server function import
const ChatPage = () => {


    return (
        <div className="main-container flex flex-col justify-center items-center h-screen bg-[#19183B] p-4 mb-0 gap-1">
            <div className="banner bg-[#708993] w-full p-4 rounded shadow-xl-cyan-200 mb-4">
                <Heading />
            </div>
                <div className="chat-messages w-1/2 h-150 bg-[#A1C2BD] rounded shadow overflow-y-auto flex flex-col justify-end">
                    <div className="scroll-area w-inherit h-full p-4">
                        <ScrollArea_MESSAGE />
                    </div>
                </div>
                <div className="foot-area w-1/2 mt-4 flex items-center">
                    <input 
                        type="text"
                        placeholder="Type your message here..."
                        className="flex-1 p-2 rounded-xl border bg-white border-gray-300 field-sizing-content"
                    />
                    <Button 
                        className="mx-2 p-2 bg-gray-300 text-black rounded-xl shadow-amber-400" 
                        onClick={() => alert('Upload button clicked!')}
                    >
                        <Upload />
                    </Button>
                    <Button 
                        className="p-2 bg-blue-600 text-white rounded-xl shadow-amber-400" 
                        onClick={() => alert('Send button clicked!')}
                    >
                        Send
                    </Button>
                </div>
        </div>
    )
}

export default ChatPage;