import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li >
      <a href={r.route}>
        {r.title}
      </a>

    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
