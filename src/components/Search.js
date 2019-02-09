import React from 'react';
import PropTypes from 'prop-types';

const Search = ({submit, zipUpdate}) => (
  <form>
    <input onChange={zipUpdate} type="text" placeholder="Get your local weather"/>
    <button onClick={submit}>Submit</button>
  </form>
);

Search.propTypes = {
  zipUpdate: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default Search;