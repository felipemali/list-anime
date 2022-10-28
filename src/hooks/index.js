import { useEffect, useRef } from "react";

export const useKey = (key, fun) => {
  const callBackRef = useRef(fun);

  useEffect(() => {
    callBackRef.current = fun;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callBackRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
};
