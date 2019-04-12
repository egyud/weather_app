import React from 'react';
import classes from './Day.module.css';
import moment from 'moment';

const Day = (props) => (
  <div className={classes.Day}>
    <div className={classes.DayHead}>
      <span>{moment(props.date, 'YYYY-MM-DD').format('ddd MMM Do')}</span>
    </div>
    <div className={classes.DayLeft}>
      <p>High: {props.high}&#8457;</p>
      <p>Low: {props.low}&#8457;</p>
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