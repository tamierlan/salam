import React from 'react';

export default function Ethnicity({ethnicity, handleChange}) {

  let list = ['white', 'black', 'asian', 'indian', 'mix']
  let nations = list.filter(nat => nat !== ethnicity)
  nations.unshift(ethnicity);
  const options = nations.map(opt => <option value={opt} key={opt}>{opt}</option>)

  return (
    <p>
      <select name='ethnicity' onChange={handleChange}>
        {options}
      </select>
    </p>
  )
}
