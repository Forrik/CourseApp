import { useEffect, useState, React } from "react";
import style from "./Generator.css";

const Generator = (props) => {
  const value = Math.random() > Math.random();

  const [num, setNum] = useState(50);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log(props);
    const interval = setInterval(() => {
      if (props.isError) {
        setNum(randomNumberInRange(90, 100));
      } else {
        setNum(randomNumberInRange(3.3, 6.6));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.isError]);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.card}></div>
      </div>

      <div className="block--bottom">
        <h2>{num}ммоль/л</h2>
        <div className="block--sensor" style={{ height: `${num}px` }}></div>
      </div>
    </div>
  );
};

export default Generator;
