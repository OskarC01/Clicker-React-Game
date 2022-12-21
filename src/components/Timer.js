import React from "react";

export default function Timer() {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [stopTimer, setStopTimer] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (stopTimer === false) {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  function StopTimer() {
    setStopTimer(true);
  }

  return (
    <div className="timer-div text-center">
      <h4 className="mt-2">Timer</h4>
      <h5>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h5>
    </div>
  );
}