import { DATA } from "../pages/api/data/data";


const initialState = {
    data:DATA,
    includeArr:[],
    
}

export const Reducer =(state=initialState,action)=>{
if(action.type === 'UP'){
    function compare( a, b ) {
        if ( a[action.name] > b[action.name] ){
            return 1;
          }
        if ( a[action.name] < b[action.name] ){
          return -1;
        }
        return 0;
      }
      
const newArr = state.data.slice().sort(compare)
return {...state,data:newArr}
}
if(action.type === 'DOWN'){
    function compare(a,b){
        if ( a[action.name] > b[action.name] ){
            return -1;
          }
        if ( a[action.name] < b[action.name] ){
            return 1;
          }
          return 0;
    }
    const newArr = state.data.slice().sort(compare)
    return {...state,data:newArr}
}
if(action.type === 'EQUAL'){
    return {...state,data:action.data}
}
if(action.type === 'INCLUDE'){
    const newArr = state.data.filter(item=>item[action.name].includes(action.value.trim()))
    return {...state,includeArr:newArr}
}
return state
}
