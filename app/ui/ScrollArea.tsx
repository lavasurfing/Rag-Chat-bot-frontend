import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import ChatData from "../data/ChatData"
import ChatBubble from "./ChatBubble"

// import message
// use chat bubble for message display


export function ScrollArea_MESSAGE() {
  return (
    <ScrollArea className="h-inherit w-inherit rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Let's begin</h4>
        {ChatData.map((message) => (
          <React.Fragment key={message.id}>
            <ChatBubble key={message.id} message={message} />
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
} 
