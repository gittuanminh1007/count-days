import React, { useState } from "react";
import "./App.css";

function App() {
  const startDate = new Date("2022-9-13");
  const nowDate = new Date(Date.now());

  function getDayOfTime(startDate: Date, endDate: Date) {
    let ms1 = startDate.getTime();
    let ms2 = endDate.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  }

  return (
    <div>
      <h1>Count days</h1>
      <p>{getDayOfTime(startDate, nowDate)}</p>
    </div>
  );
}

export default App;
