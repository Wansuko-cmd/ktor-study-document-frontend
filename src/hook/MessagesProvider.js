import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const MessagesContext = createContext([])
export const useMessages = () => useContext(MessagesContext)

export function MessagesProvider({children}) {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        axios.get('http://localhost:8000')
            .then(response => {
                setMessages(response.data)
            })
    }

    useEffect(
        () => { getMessages() },
        []
    )

    return (
        <MessagesContext.Provider value={{messages, getMessages}}>
            { children }
        </MessagesContext.Provider>
    )
}
