import React from 'react';

export default function Marital_status({marital_status, handleChange}) {


  let list = ['single', 'married', 'divorced', 'widowed']
  let hardcode = list.filter(nat => nat !== marital_status)
  hardcode.unshift(marital_status);
  const options = hardcode.map(opt => <option value={opt} key={opt}>{opt}</option>)


  return (
    <p>
      <select name='marital_status' onChange={handleChange}>
        {options}
      </select>
    </p>
  )
}
