import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad, all}) => {
    if(all.length === 0){
        return (
            <div>
                <h1>statistics</h1>

                No feedback given
            </div>
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={all.length} />
                    <Statistic text="average" value={all.reduce((a, b) => a + b) / all.length} />
                    <Statistic text="positive" value={good * 100 / all.length + ' %'} />
                </tbody>
            </table>
            
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleGood = () => {
        setAll(allClicks.concat(1))
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setAll(allClicks.concat(0))
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setAll(allClicks.concat(-1))
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleClick={handleGood} text='good' />
            <Button handleClick={handleNeutral} text='neutral' />
            <Button handleClick={handleBad} text='bad' />
            <Statistics good={good} neutral={neutral} bad={bad} all={allClicks} /> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));