import React from 'react';
import PropTypes from 'prop-types';
import classes from './Current.module.css';

const Current = (props) => (
  <div className={classes.Current}>
    <div className={classes.curHead}>
      <h2>Right now in {props.city}</h2>
      <p>{props.condition}</p>
    </div>
    <div className={classes.curLeft}>
        <p>Current Temp: {props.temp}</p>
        <p>Feels like: {props.feels}</p>
    </div>
    <div className={classes.curRight}>
        <p>UV Index: {props.uv}</p>
        <p>Humidity: {props.humidity}%</p>
    </div>
    <div className={classes.curFoot}>
      <p>Wind: {props.winSpd}mph {props.winDir}</p>
    </div>
  </div>
);

Current.propTypes = {
  condition: PropTypes.string,
  city: PropTypes.string,
  uv: PropTypes.number,
  winSpd: PropTypes.number,
  winDir: PropTypes.string,
  temp: PropTypes.number,
  feels: PropTypes.number,
  humidity: PropTypes.number
}

export default Current;