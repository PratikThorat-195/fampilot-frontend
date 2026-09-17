import {useState} from 'react'

function Welcome(props){
    const [name, setName] = useState('')

    return (
        <div>
            <h2>Wlecome to FamPilot</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event)=> setName(event.target.value)}
            />

            <p>Hello, {name}</p>
        </div>
    )
}

export default Welcome