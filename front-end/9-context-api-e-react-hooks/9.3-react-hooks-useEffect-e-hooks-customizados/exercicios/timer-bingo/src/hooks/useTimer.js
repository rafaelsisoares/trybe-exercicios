import { useEffect } from "react";

function useTimer(callback, interval) {
  useEffect(() => {
    const timer = setInterval(() => {
      callback();
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [callback, interval]);
}

export default useTimer;
