import React from 'react';


function SliderSwitch(props) {
  return (
    <div>
      <div className='custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          checked={props.isChecked}
          id='customSwitches'
          onChange={props.onChange(1)}
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'/>
      </div>
    </div>
  );
}

export default SliderSwitch;