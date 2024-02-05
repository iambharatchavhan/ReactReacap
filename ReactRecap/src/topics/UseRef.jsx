import React ,{useState, useEffect, useRef}from 'react'



export const UseRef = () => {

    const [name, setName] = useState(0)
    const countRef = useRef(0)
   


useEffect(()=>{
    countRef.current = countRef.current + 1
})


  return (

    <div className='home'>

 <input type='text' onChange={(e)=> setName(e.target.value)}/> 
Counting Re-renders : {countRef.current}

   </div>
  )
}
