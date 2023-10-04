import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  function tick() {
    setDate(new Date());
  }
  const daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <>
      {daysArray[date.getDay()]} {date.getHours()}:{date.getMinutes()}{" "}
      {date.toLocaleTimeString().slice(-2)}
    </>
  );
}
export default Clock;
