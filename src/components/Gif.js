import { useState } from 'react';
function Gif(props) {
  return (
    <div className="gif">
      <img src={props.url} />
    </div>
  );
}

export default Gif;
