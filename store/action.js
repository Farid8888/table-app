import { DATA } from "../pages/api/data/data"
export const upHandler =(name)=>{
    return {type:'UP',name:name}
}


export const downHandler =(name)=>{
    return {type:'DOWN',name:name}
}

export const equalHandler =(name,value,data)=>{
    return async dispatch =>{
       async function contains() {
            for (let i = 0; i < data.length; i++) {
                if (data[i][name] == value) {
                    return true;
                }
            }
            return false;
        }
        const check = await contains()
        let newArr
        if(check){
            newArr = data.filter(item=>item[name] == value)
        }else{
            newArr = DATA
        }
        return dispatch({type:'EQUAL',data:newArr})
    }
    
}

export const includeHandler =(name,value)=>{
   return {type:'INCLUDE',name:name,value:value}
}
