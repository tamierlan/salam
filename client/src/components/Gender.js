import React from 'react';

export default function Gender({gender, handleChange}) {


  let list = ['male', 'female', 'trans']
  let gens = list.filter(g => g !== gender)
  gens.unshift(gender);
  const options = gens.map(opt => <option value={opt} key={opt}>{opt}</option>)


  return (
    <p>
      <select placeholder='tommy' name='gender' onChange={handleChange}>
        {options}
      </select>
    </p>
  )
}
