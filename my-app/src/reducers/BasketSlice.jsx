import {createSlice} from "@reduxjs/toolkit"
import { json } from "react-router-dom"
import { toast } from "react-toastify"
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
                const item=JSON.parse(localStorage.getItem('item'))
                if(state.value.find(x=>x.data._id===actions.payload._id,)){
                    state.value.forEach((elem)=>{
                        if(elem.data._id===actions.payload._id){
                            elem.counter+=1;
                            elem.useremail=item.email
                            elem.username=item.firstname+item.lastname
                    }})
                }
                else{
                    state.value.push({counter:1,data:actions.payload,useremail:item.email,username:item.firstname+item.lastname})
                } 
                state.count+=1
                toast.success(`${actions.payload.ProductName} add to basket`,{
                    position:"bottom-left",
                })
            },
            DeleteFromBasket:(state,actions)=>{
                let current= state.value.find(x=>x.data._id === actions.payload).counter
                state.value=state.value.filter(x=>x.data._id!==actions.payload)
                state.count-=current
            },
            DecreaseItem:(state,actions)=>{
               state.value.forEach((elem)=>{
                if(elem.data._id==actions.payload){
                    if(elem.counter==1){
                        state.value=state.value.filter(x=>x.data._id!==actions.payload)
                        state.count-=1
                    }else{
                        elem.counter-=1
                        state.count-=1
                    }
                }
               }) 
            },
            IncreaseItem:(state,actions)=>{
                state.value.forEach((elem)=>{
                 if(elem.data._id==actions.payload){
                         elem.counter+=1
                         state.count+=1
                 }
                }) 
             },
            // IncrementByUser:(state,actions,count)=>{
            //     state.value.forEach((elem)=>{
            //         if(elem.data._id==actions.payload._id){
            //             elem.counter+=
            //             state.count+=count
            //         }})
            //     state.value=state.value+actions.payload
            // },
            // DecrementByUser:(state,actions)=>{
            //     state.value=state.value-actions.payload
            // }
    
        }
    }
)
export const { AddToBasket,DeleteFromBasket,DecreaseItem,IncreaseItem,IncrementByUser,DecrementByUser} =BasketSlice.actions
export default BasketSlice.reducer