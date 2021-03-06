import React, { useState } from "react";
import "./style.css";
import pic from "./emo 3.jfif";

// data base
var emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "โน๏ธ": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ณ": "Flushed Face",
  "๐ฅบ": "Pleading Face",
  "๐ฆ": "Frowning Face with Open Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ฅ": "Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Dizzy Face",
  "๐คฏ": "Exploding Head",
  "๐ค?": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face"
};

// to convert object into arrays, we use object.keys to access keys of object or then .values to access values of object

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiInput, setEmojiInput] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;
    setEmojiInput(emojiInput); // this will display the emoji entered by client

    if (emojiInput in emojiDictionary) {
      // how to access the key of object when we do not know which key it is from our database? so for it var emojiInput will have the emoji which client inputs, so that way we will access it

      setMeaning(emojiDictionary[emojiInput]);
      //this will display the meaning of the emoji entered by client
    } else if (emojiInput === "") {
      setMeaning("");
    } else {
      setMeaning("Unfortunately, its not a part of our database ");
    }
  }

  function emojiClickHandler(item) {
    setEmojiInput(item); // this will display the emoji entered by client
    setMeaning(emojiDictionary[item]); //this will display the meaning of the emoji entered by client
  }

  return (
    <div className="App">
      <nav className="nav">
        <h1>
          <i> Emoji Dictionary! ๐ </i>
        </h1>
      </nav>

      <div className="about">
        Do you also find hard to figure out meaning of emojis? ๐ค So here is
        emoji dictionary for you,wherein you can enter emoji and we will tell
        you its meaning in seconds! ๐ค
      </div>

      <header className="hero-img">
        <img className="hero" src={pic} />
      </header>
      <input
        id="emo-input"
        onChange={emojiInputHandler}
        placeholder="Enter or choose an emoji to know the meaning"
      />
      <h1 className="emojiweknow">
        <i>emojis we know ๐ </i>
      </h1>
      {/* emoji which client will enter  */}
      <h2>{emojiInput}</h2>
      <h3>
        {/* emoji meaning will be shown according to client's entered emoji */}
        <i>{meaning}</i>
      </h3>

      <div className="display-flex">
        {/* to show client the list of our emoji of our data base, we used .map  */}
        {emojiWeKnow.map(function emojiList(item) {
          return (
            <span
              className="flex-items"
              // onclick is used because client clicks on any emoji shown on screen, it's meaning will be displayed
              onClick={() => emojiClickHandler(item)}
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
