import { useEffect, useState } from "react";
import CountdownStyled from "./CountdownStyled";

const Countdown = (): React.ReactElement => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const finalDate = new Date("2023-12-31T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = finalDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeRemaining;

  const renderDigitCards = (number: number) => {
    const digitString = number.toString().padStart(2, "0");
    return digitString.split("").map((digit, index) => (
      <div key={index} className="flip-card flip">
        <div className="top">
          <span>{digit}</span>
        </div>
        <div className="bottom">
          <span>{digit}</span>
        </div>
      </div>
    ));
  };

  return (
    <CountdownStyled className="countdown">
      <div className="controls">
        <span className="controls__name">days</span>
        <div className="container-segment">{renderDigitCards(days)}</div>
      </div>
      <div className="controls">
        <span className="controls__name">hours</span>
        <div className="container-segment">{renderDigitCards(hours)}</div>
      </div>
      <div className="controls">
        <span className="controls__name">minutes</span>
        <div className="container-segment">{renderDigitCards(minutes)}</div>
      </div>
      <div className="controls">
        <span className="controls__name">seconds</span>
        <div className="container-segment">{renderDigitCards(seconds)}</div>
      </div>
    </CountdownStyled>
  );
};

export default Countdown;
