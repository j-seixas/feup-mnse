import React from 'react'
import { ListGroup, ListGroupItem} from "shards-react"

const Suggestions = (props) => {
    const options = props.results.map(r => (
        <ListGroupItem theme="light">
            
                <a href={r.route}>
                {r.title}
            </a>
        
        </ListGroupItem>
    ))

    if (options.length === 0) {
        return <ListGroup>{options}</ListGroup>
    } else {
        return <ListGroup className="dropdown-content">{options}</ListGroup>

    }
}

export default Suggestions
