import React from 'react';
import classes from './Day.module.css';

const Day = (props) => (
  <div className={classes.Day}>
    <div className={classes.DayHead}>
      <span>{props.date}</span>
    </div>
    <div className={classes.DayLeft}>
      <p>High: {props.high}</p>
      <p>Low: {props.low}</p>
      <p>Precipitation: {props.precip}in</p>
    </div>
    <div className={classes.DayRight}>
      <p>{props.condition}</p>
      <p>Sunrise: {props.sunrise}</p>
      <p>Sunset: {props.sunset}</p>
    </div>
  </div>
);

export default Day;