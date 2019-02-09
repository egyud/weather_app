import React from 'react';
import Day from './Day/Day';
import PropTypes from 'prop-types';
import classes from './DayList.module.css';

const DayList = ({ forecast }) => (
    <div>
      {forecast.map(day => 
        <Day 
          key={day.date}
          date={day.date}
          // condition={day.condition.text}
          high={day.day.maxtemp_f}
          low={day.day.mintemp_f}
          precip={day.day.totalprecip_in}
          sunrise={day.astro.sunrise}
          sunset={day.astro.sunset}
        />
      )}
    </div>
);

DayList.propTypes = {
  forecast: PropTypes.array.isRequired
}

export default DayList;