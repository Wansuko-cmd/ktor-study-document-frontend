import './App.css';
import {MessagesProvider} from "./hook/MessagesProvider";
import MessagesList from "./index/MessagesList";

function App() {
  return (
      <MessagesProvider>
        <MessagesList />
      </MessagesProvider>
  );
}

export default App;
