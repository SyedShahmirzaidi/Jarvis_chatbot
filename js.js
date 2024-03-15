
    .close {
      font-size: 24px;}
      "I'm sorry, I'm not able to help you with that.",
    "I'm not programmed to answer that question.",
    "I'm sorry, I don't have an answer to that question.",
    "I'm sorry, I'm not sure I understand what you're asking.",
    "I don't know the answer to that. Would you like me to look it up for you?",
    "I'm sorry, I don't have enough information to provide an answer.",
    "I'm not sure, but I'll do my best to find an answer for you."
    const botResponse = document.createElement("div");
    botResponse.className = "bot message";
    botResponse.textContent = botMessage;
    conversation.appendChild(botResponse);
    if (voiceGeneratorEnabled) {
      generateVoiceMessage(botMessage);
    }
    output.value = "";
    const voiceBtn = document.getElementById("voice-btn");
    const addEmoji = document.querySelector('#add-emoji');
 const emojiButton = document.querySelector('#emoji-button');
 const popup = document.querySelector ('popup');
 const closeButton = document.querySelector('#close-button');
 const emojiList = document.querySelectorAll('.emoji');