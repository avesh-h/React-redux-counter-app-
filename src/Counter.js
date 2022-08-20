import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function Counter() {
   const counter =  useSelector((state)=>{
    //   console.log(state)
    return state.counter
})

const show = useSelector((state)=>{
    return state.showValue
})
    //Dispatch function is most use for conditional result or we can say to get conditional result or action 
   const dispatch = useDispatch()

   const incHandler = () =>{
    dispatch({
        type: 'increment'
    })
   }

   const decHandler = () =>{
    dispatch ({
        type : 'decrement'
    })
   }

   const resHandler = () =>{
    dispatch ({
        type : 'reset'
    })
   }
   const increseHandler = () =>{
    dispatch ({
        type : 'increase',
        payload : 5
    })
   }

   const toggleHandler = () =>{
    dispatch({
        type : 'toggle'
    })
   }

   console.log(counter)
  return (
    <div className='main-counter'>
        <div>
            <p>
            My counter
            </p>
        </div>
        {show && <div>Counter - {counter}</div>}
        <button onClick={incHandler}>
            inc
        </button>
        <button onClick={decHandler}>
            dec
        </button> <br />
        <button onClick={resHandler}>
            reset
        </button>
        <button onClick={increseHandler}>
            inc + 5
        </button> <br />
        <button onClick={toggleHandler}>
            show/hide
        </button>
    </div>
  )
}

export default Counter
