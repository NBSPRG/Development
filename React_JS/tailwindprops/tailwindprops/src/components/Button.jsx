import React, {useState} from 'react'

const Button = () => {
    const [counter, setCounter] = useState(15);
    const addValue = () => {
        setCounter((prevCounter) => prevCounter + 1)        
        // if we pass callback function in setCounter then each function is called, 
        // after its complete execution, it is next passed, thus value will be updated to 4 + x.
        // but if we pass just value to it, anc call it 4 times, then these are passed in a patch to update, 
        // since all the update are same, it will be just updated once.

        // setCounter((prevCounter) => prevCounter + 1)
        // setCounter((prevCounter) => prevCounter + 1)
        // setCounter((prevCounter) => prevCounter + 1)
    }

    const removeValue = () => {
        setCounter(counter - 1)
    }
  return (
    <div>
      <h1>Chai and React</h1>
      <br />
      <h2>Counter value : {counter}</h2>
      <br />
      <button onClick={addValue}>Add Value : {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>Decrease Value : {counter}</button>
    </div>
  )
}

export default Button
