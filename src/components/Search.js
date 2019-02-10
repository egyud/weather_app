import React from 'react';
import PropTypes from 'prop-types';
import classes from './Search.module.css';

const Search = ({submit, zipUpdate}) => (
  <form className={classes.Search_form}>
    <input className={classes.Search} onChange={zipUpdate} type="text" placeholder="Get your local weather"/>
    <br></br>
    <button className={classes.Search_btn}onClick={submit}>Submit</button>
  </form>
);

Search.propTypes = {
  zipUpdate: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default Search;