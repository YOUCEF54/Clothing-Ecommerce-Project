import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const Sketch = () => {
  const [state, setState] = useState({
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  });

  const handleClick = () => {
    setState({ ...state, displayColorPicker: !state.displayColorPicker });
  };

  const handleClose = () => {
    setState({ ...state, displayColorPicker: false });
  };

  const handleChange = (color) => {
    setState({ ...state, color: color.rgb });
  };

  const divStyle = {
    border: '1px solid #ccc',
    backgroundColor: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
    borderRadius: '5px',
  };

  return (
    <div >
      <div style={divStyle} className="size-6" onClick={handleClick}>
        <div />
      </div>
      {state.displayColorPicker ? (
        <div className='mt-2 absolute'>
          <div onClick={handleClose} />
          <SketchPicker color={state.color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default Sketch;
