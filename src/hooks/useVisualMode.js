import { useState } from 'react'

export default function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    if (!replace) {
      setHistory([...history, mode]);
    } else {
      setHistory(prev => {
        return [...prev.slice(0, history.length - 1), mode]
      });
    };
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(prev => {
        return [...prev.slice(0, history.length - 1)];
      });
    };
  };

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
};