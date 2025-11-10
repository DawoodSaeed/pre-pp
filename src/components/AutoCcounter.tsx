import { useEffect, useState } from "react";

const AutoCounter = () => {
  const [counter, setCounter] = useState(1);

  const startCounter = () => {
    const timer = setInterval(() => {
      setCounter((counter) => counter + 1);
      console.log(counter);
    }, 100);

    return timer;
  };

  useEffect(() => {
    //mounted.
    const timer = startCounter();

    //unmounted..
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>{counter}</p>;
};

export default AutoCounter;
