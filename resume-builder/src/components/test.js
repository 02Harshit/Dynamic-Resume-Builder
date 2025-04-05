import React from 'react';
import { forwardRef } from 'react';

const Test = React.forwardRef((_, ref) => (
    <div ref={ref}>
      <h1>Hello Resume</h1>
      <p>This is a test print</p>
    </div>
  ));

export default Test;
  