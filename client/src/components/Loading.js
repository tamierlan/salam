import React from 'react';
import loadingGif from '../image/loading.gif';

export default function Loading() {
  return (
    <div className="form">
      <div className='loading'>
        <img src={loadingGif} alt="load" />
        <h3>Please Wait . . .</h3>
      </div>
    </div>
  );
}
