import React from 'react';


function SliderSwitch(props) {

  return (
    <div>
      <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          checked={props.isChecked}
          id="customSwitch"
          onChange={props.onChange(1)}
          readOnly
        />
        <label className='custom-control-label' htmlFor="customSwitch"/>
      </div>
    </div>
  );
}

export default SliderSwitch;