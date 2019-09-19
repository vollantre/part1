import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Anecdote = ({text, votes}) => (
    <div>
        {text}
        <br />
        has {votes} votes
    </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  const [mostVoted, setMost] = useState(0)

  const getAnecdote = () => setSelected(Math.floor(Math.random() * props.anecdotes.length))

  const vote = () => {
    let copy = [...votes]
    copy[selected] += 1
    if(copy[selected] > copy[mostVoted]){
        setMost(selected)
    }
    setVotes(copy)
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        <Anecdote text={props.anecdotes[selected]} votes={votes[selected]} />
        <Button handleClick={vote} text="vote" />
        <Button handleClick={getAnecdote} text="Next anecdote"/>
        <h1>Anecdote with most votes</h1>
        <Anecdote text={props.anecdotes[mostVoted]} votes={votes[mostVoted]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)