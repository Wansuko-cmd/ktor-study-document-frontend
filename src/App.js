import './App.css';
import {MessagesProvider} from "./hook/MessagesProvider";
import MessagesList from "./index/MessagesList";
import MessageForm from "./index/MessageForm";

function App() {
    return (
        <MessagesProvider>
            <MessagesList/>
            <MessageForm/>
        </MessagesProvider>
    );
}

export default App;
