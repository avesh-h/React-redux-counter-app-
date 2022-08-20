import redux from 'redux';
import {createStore} from 'redux';


//Action is always object and its have new state properties and have action.type with help we can output diffrent result by dispatch(action)

const initialState = {counter : 0 , showValue : true}

const counterReducer = (state = initialState ,action) =>{
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1 ,
            showValue : state.showValue
        }
    }
    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1,
            showValue : state.showValue
        }
    }

    if(action.type === 'increase'){
        return{
            counter : state.counter + action.payload,
            showValue : state.showValue
        }
    }

    if(action.type === 'reset'){
        return{
            counter : state.counter = 0,
            showValue : state.showValue
        }
    }
    if(action.type === 'toggle'){
        return{
            showValue : !state.showValue,
            counter : state.counter
        }
    }
    return state ;

    // switch (action.type)
    // {
    //     case 'increment' :
    //     return {
    //         counter : state.counter + 1 
    //     }
    //     default : return state
    // }
    
}


//redux store
const store = createStore(counterReducer);

export default store;