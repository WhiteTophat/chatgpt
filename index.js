const { Configuration, OpenAIApi } = require("openai");

class ChatMessage {
  message = "";
  role = "user";

  constructor(message, role) {
    this.message = message;
    this.role = role;
  }

  ToJson() {
    return {
      role: this.role,
      content: this.message
    };
  }
}
class Conversation {
  messages = [];
  openai;
  
  constructor(promptMessage, apiKey) {
    this.messages = [];
    const configuration = new Configuration({
      apiKey: apiKey
    });
    this.openai = new OpenAIApi(configuration);
    this.AddMessage(promptMessage, "system");
  }

  AddMessage(message, role) {
    var newMessage = new ChatMessage(message, role);
    this.messages.push(newMessage);
  }
  
  PromptMessage() {
    return this.messages[0];
  }

  async GetBotResponse() {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: this.ToJson()
    });
    const content = response.data.choices[0].message.content;
    this.AddMessage(content, "assistant");
    return response.data.choices[0].message.content;
  }

  ToJson() {
    var thing = [];
    for (let i = 0; i < this.messages.length; i++) {
      thing.push(this.messages[i].ToJson());
    }
    return thing;
  }
}

const chat = new Conversation("You are a royal guard. You keep your responses short. You will not let anyone pass unless they know the secret password, \"Magick\". If someone gets the password correct, you will begin your response with \"[correct]\".");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function Speak(prompt) {
  chat.AddMessage(prompt, "user");
  console.log("You: " + prompt);
  console.log("Bot: " + await chat.GetBotResponse());
}