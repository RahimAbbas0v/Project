import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:[],
    count:0,
}
const BasketSlice =createSlice(
    {
        name:"basket",
        initialState,
        reducers:{
            AddToBasket:(state,actions)=>{
                if(state.value.find(x=>x.data._id===actions.payload._id)){
                    state.value.forEach((elem)=>{
                        if(elem.data._id===actions.payload._id){
                            elem.counter+=1;
                    }})
                }
                else{
                    state.value.push({counter:1,data:actions.payload})
                }
                state.count+=1
            },
        

        }
    }
)

export const { AddToBasket} =BasketSlice.actions
export default BasketSlice.reducer