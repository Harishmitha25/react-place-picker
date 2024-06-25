import { useEffect, useState } from "react";

export default function Progress() {
  const [remainingTime, setRemainingTime] = useState(3000);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={3000}></progress>;
}
