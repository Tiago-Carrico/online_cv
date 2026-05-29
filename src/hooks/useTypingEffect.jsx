import { useState, useEffect } from 'react';

/**
 * Types out `text` character-by-character, then calls `onComplete` when done.
 * @param {string} text - The string to type out.
 * @param {number} speed - Milliseconds per character.
 * @param {number} startDelay - Milliseconds before typing begins.
 * @param {function} onComplete - Callback fired when typing is complete.
 * @returns {{ displayText: string, isDone: boolean }}
 */
export function useTypingEffect(text, speed = 70, startDelay = 300, onComplete = null) {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsDone(false);
    let index = 0;

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsDone(true);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay]);

  return { displayText, isDone };
}
