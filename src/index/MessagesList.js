import {useMessages} from "../hook/MessagesProvider";
import MessageCard from "./MessageCard";

export default function MessagesList(){
    const { messages } = useMessages()
    return(
        <>
            {messages.map(message => <MessageCard text={message.text}/>)}
        </>
    )
}
