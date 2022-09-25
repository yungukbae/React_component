import { useEffect, useState } from "react";

type Time = number;

export const useTimeCounter = (input: Time): number => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    console.log("time:", time, "||input:", input);
    if (typeof input === "number") setTime(input);
  }, [input]);

  if (typeof time !== "number") return 0;
  return time;
};
