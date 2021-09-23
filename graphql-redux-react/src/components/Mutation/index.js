import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postMessageRequested } from '../../redux/actions/message';

const Mutation = () => {
  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!input) return
    dispatch(postMessageRequested(input))
    setInput('')
  }


  return (
    <div>
      <h1>Mutation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Post Dummy Message</button>
      </form>
    </div>
  )
}

export default Mutation
