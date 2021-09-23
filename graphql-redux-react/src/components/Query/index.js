import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../redux/actions/message'

const Query = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMessages())
  },[dispatch])
  const messages = useSelector(state => state.message.messages.messages)
  return (
    <div>
      <h1>Query</h1>
      {messages && messages.map(message => {
        return (
          <div key={message.id}>
            {message.content}
          </div>
        )
      })}
    </div>
  )
}

export default Query


