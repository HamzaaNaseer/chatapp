import React from "react";
import axios from "axios";
const Chatpage = () => {
  const [chats, setChats] = React.useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
  };
  React.useEffect(() => {
    fetchChats();
  }, []);

  return <div>Chatpage</div>;
};

export default Chatpage;
