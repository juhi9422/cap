import { React, useState, useEffect } from "react";
import "../Style/ChatBot.css";
import Chatbot from "../Images/Chatbot.png";
import im from "../Images/profi.webp";

const ChatBot = () => {
  const [show, setShow] = useState(false);

  const [chat, setChat] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setbotTyping] = useState(false);

  useEffect(() => {
    if (show) {
      console.log("called");
      const objDiv = document.getElementById("messageArea");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, [chat]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = "CAP";
    const request_temp = { sender: "user", sender_id: name, msg: inputMessage };

    if (inputMessage !== "") {
      setChat((chat) => [...chat, request_temp]);
      setbotTyping(true);
      setInputMessage("");
      rasaAPI(name, inputMessage);
    } else {
      window.alert("Please enter valid message");
    }
  };

  const rasaAPI = async function handleClick(name, msg) {
    await fetch("http://localhost:5005/webhooks/rest/webhook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      credentials: "same-origin",
      body: JSON.stringify({ sender: name, message: msg }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          const temp = response[0];
          const recipient_id = temp["recipient_id"];
          const recipient_msg = temp["text"];

          const response_temp = {
            sender: "bot",
            recipient_id: recipient_id,
            msg: recipient_msg,
          };
          setbotTyping(false);

          setChat((chat) => [...chat, response_temp]);
        }
      });
  };

  console.log(chat);

  return (
    <>
      <div className="chat">
        {show ? (
          <div className="main_box">
            <div className="headChat">
              <div>
                <img className="chatic" src={Chatbot} alt="" />
              </div>
              <div>
                <div>
                  <span className="ctW">Chat with</span>
                </div>
                <span className="CapVA">CAP Virtual Assistant</span>
                <span> {botTyping ? <p>Bot Typing....</p> : null}</span>
              </div>
            </div>
            <div id="messageArea" className="main">
              <div>
                {chat.map((user, key) => (
                  <div key={key}>
                    {user.sender === "bot" ? (
                      <div className="smdB">
                        <div className="bImg">
                          <img src={Chatbot} alt="" />
                        </div>
                        <div className="bot">
                          <span>{user.msg}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="smdU">
                        <div className="user">
                          <span>{user.msg}</span>
                        </div>
                        <div className="usImg">
                          <img src={im} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="foot">
              <div>
                <form onSubmit={handleSubmit} className="inp">
                  <input
                    type="search"
                    onChange={(e) => setInputMessage(e.target.value)}
                    value={inputMessage}
                  />
                  <button type="submit" className="sbtn">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.03516 20.5853L20.9641 13L5.03516 5.41479L8.06925 13L5.03516 20.5853ZM9.96947 11.9166L9.10358 9.75192L16.2493 13H14.6243H12.9993L9.96947 11.9166ZM9.9695 14.0833L12.9993 13H14.6243H16.2493L9.10358 16.2481L9.9695 14.0833Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </form>
                {/* <button className="sbtn">
                 Send
                  </button> */}
              </div>
            </div>
          </div>
        ) : null}
        <div className="chatBotIcon" onClick={() => setShow(!show)}>
          <img className="chatBotIconImg" src={Chatbot} alt="Chatbot logo" />
        </div>
      </div>
    </>
  );
};
export default ChatBot;
