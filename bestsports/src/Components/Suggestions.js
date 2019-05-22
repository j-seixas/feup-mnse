import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li >
      <a href={r.route}>
        {r.title}
      </a>

    </li>
  ))

  if(options.length === 0){
    return <ul>{options}</ul>
  }else{
    return <ul class="dropdown-content">{options}</ul>

  }
}

export default Suggestions
