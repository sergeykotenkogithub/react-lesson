import React from 'react'

export default function List(props) {
  const {items = []} = props;
  if (!items.length) return null;
  return (
    <ul>
        {
            items.map(el => (
                <li key={el}>{el}</li>
            ))
        }
    </ul>
  )
}
