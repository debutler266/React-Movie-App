import React from 'react';

const SearhBox = (props) => {
  return (
    <div className='col col-sm-4'>
    <input
    className='form-control'
    value={props.value}
    onChange={(event) => props.setSearchValue(event.target.value)}
    placeholder='Start typing to search...'
    ></input>
    </div>
  );
};

export default SearhBox;
