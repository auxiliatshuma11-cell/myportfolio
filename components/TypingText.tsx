"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypingTextProps = { words: string[] };

// Types a word, pauses, deletes it, then moves on to the next one
export default function TypingText({ words }: TypingTextProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index];
    const finishedTyping = !deleting && text === word;
    const finishedDeleting = deleting && text === "";
    const delay = finishedTyping ? 1400 : finishedDeleting ? 300 : deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduce]);

  if (reduce) return <span>{words.join(", ")}</span>;

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-1 animate-pulse bg-iris" />
      </span>
    </>
  );
}