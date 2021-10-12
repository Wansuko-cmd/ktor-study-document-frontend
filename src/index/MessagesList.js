import {useMessages} from "../hook/MessagesProvider";

export default function MessagesList(){
    const { messages } = useMessages()
    return(
        <>
            {messages.map(message => <h1> {message.text} </h1>)}
        </>
    )
}
