import { useEffect, useState } from "react";

export function useTypewriter(fullText, { delay = 0, speed = 100 } = {}) {
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let intervalId;

    const start = () => {
      intervalId = setInterval(() => {
        index += 1;
        setText(fullText.slice(0, index));
        if (index >= fullText.length) {
          clearInterval(intervalId);
        }
      }, speed);
    };

    const timeoutId = setTimeout(start, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [fullText, delay, speed]);

  return text;
}
