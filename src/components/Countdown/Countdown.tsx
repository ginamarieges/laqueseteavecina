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
    const finalDate = new Date("2024-12-31T00:00:00").getTime();

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

  return (
    <CountdownStyled className="countdown">
      <div className="controls">
        <span className="controls__name">days</span>
        <div className="digits">
          <span className="digits__top">{days}</span>
          <span className="digits__bottom">{days}</span>
        </div>
      </div>
      <div className="controls">
        <span className="controls__name">hours</span>
        <div className="digits">
          <span className="digits__top">{hours}</span>
          <span className="digits__bottom">{hours}</span>
        </div>
      </div>
      <div className="controls">
        <span className="controls__name">minutes</span>
        <div className="digits">
          <span className="digits__top">{minutes}</span>
          <span className="digits__bottom">{minutes}</span>
        </div>
      </div>
      <div className="controls">
        <span className="controls__name">seconds</span>
        <div className="digits">
          <span className="digits__top">{seconds}</span>
          <span className="digits__bottom">{seconds}</span>
        </div>
      </div>
    </CountdownStyled>
  );
};

export default Countdown;
