import { useEffect, useState } from "react";

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const useTypewriter = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseTime = 2000,
}: UseTypewriterProps) => {
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopIndex, setLoopIndex] = useState<number>(0);

  useEffect(() => {
    const currentIndex = loopIndex % words.length;
    const fullText = words[currentIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => fullText.substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    loopIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};
