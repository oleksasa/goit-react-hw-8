import { useEffect, useState } from "react";
import * as S from "./HomePageTitle.styled";

const HomePageTitle = () => {
  const text = "A personal contact book is always at hand";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let typingInterval;
    let index = 0;

    const typing = new Promise((resolve) => {
      typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prevText) => prevText + text[index]);
          index++;
        } else {
          clearInterval(typingInterval);
          resolve();
        }
      }, 100);
    });

    typing.then(() => {
      setDisplayText(text);
    });

    // Функція очищення тепер може отримати доступ до typingInterval
    return () => clearInterval(typingInterval);
  }, [text]);

  return <S.TypingText>{displayText}</S.TypingText>;
};

export default HomePageTitle;
