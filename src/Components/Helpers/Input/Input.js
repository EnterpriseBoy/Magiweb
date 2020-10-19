import React from 'react';
import styles from "./SliderSwitch.module.css";


function Input(props) {
  return (
    <div>
        <label className={styles.switch}>
            <input type="checkbox" onChange={props.onChange}/>
            <div className={styles.slider}></div>
        </label>
    </div>
  );
}

export default Input;