import React from 'react';
import { TextAreaScroll } from './styled-scrollTextarea';
const ScrollTextArea = (props) => {
  return (
      <>
        <TextAreaScroll>
            <textarea
                className="textarea"
                id="textarea"
                name ="content"
                rows= "6"
                cols = "37"
                value = {props.value}
                onChange={props.onChange}
                placeholder="Enter message"
                // maxLength="100"
            >
            </textarea>
        </TextAreaScroll>
      </>
  );
};

export default ScrollTextArea;