document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");

    let userMessage; 

    const createChatLi = (message, className) => {
    // membuat pesan <li> dengan mengirim pesan dan className
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    };

    const handleChat = () => {
        userMessage = chatInput.value.trim();
        console.log(userMessage);
        if(!userMessage) return;

        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        
        chatInput.value = "";
        chatInput.focus();

        setTimeout(() => {
            // display "Berpikir..." sebelum admin menjawab
            chatbox.appendChild(createChatLi("Berpikir...", "incoming"));
            generateResponse();
        }, 600);
    };

    // ngirim pesan pake tombol
    sendChatBtn.addEventListener("click", handleChat);

    chatInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleChat();
        }
    })
});

document.querySelector(".back-btn").addEventListener("click", function() {
    window.history.back();
});

document.querySelector(".back img").addEventListener("click", function() {
    window.history.back();
});

