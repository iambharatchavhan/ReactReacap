React Recap 
- useMemo
-- Memoization: 
The Memoization in React, achieved through the useMemo hook, is a technique used to optimize performance by memoizing (caching) the results of expensive calculations. This is particularly useful when dealing with computations that don't need to be recalculated on every render, preventing unnecessary recalculations and re-renders.
 
In the context of minimizing re-renders, useMemo is often employed to memoize the results of computations derived from state or props. By doing so, you can ensure that the expensive computation is only performed when the dependencies (specified as the second argument to useMemo) change.

```javascript 

import { useState,memo } from 'react'
import './App.css'

function App() {
  const [firstTitle, setFirstTitle] = useState("My name is Bharat");

const changeTitle = ()=> {
setFirstTitle("My name is " + Math.random())

}

  return (


    <>
    <div>
      <button onClick={changeTitle}>Click me to change Title</button>
      <br/>
    <Header title={firstTitle}/>
    <Header title="My name is ram"/>
    <Header title="My name is ram"/>
    <Header title="My name is ram"/>
    <Header title="My name is ram"/>
    <Header title="My name is ram"/>

    </div>
    </>
  )
}


const Header = memo (({title})=>{
  return <div>
    {title}
  </div>
})
export default App


```

-- useRef() Hook when to use it ?

`useRef()` is a React hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The ref object persists for the full lifetime of the component.
Accessing DOM elements: You can use useRef() to reference DOM elements directly. This is particularly useful when you need to manipulate the DOM imperatively, such as focusing an input element or measuring its dimensions.

Storing mutable values without triggering re-renders: Since the ref object persists between renders and doesn't trigger re-renders when its value changes, you can use useRef() to store mutable values without causing unnecessary renders.

Storing previous values between renders: You can store values that need to persist between renders without triggering re-renders. This is often used to keep track of previous state or props values for comparison.

is like  const ref = useRef(0) == const ref = useRef({current:0})