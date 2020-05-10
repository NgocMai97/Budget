import React, { useState } from 'react';
export default function BottomAdd({list,addNewList}){
  let [newList, setNewList]= useState({
    type: 'income',
    description: '',
    value: '',
  });
    
    function onChangeList(obj){
      return (e)=>{
        setNewList({
          ...newList,
          [obj]: e.target.value
        });
      }
    }
    function handleAdd(){
      return ()=>{
        addNewList(newList);
      }
    }
    return(
        <div className="add">
          <div className="add__container">
            <select className="add__type" onChange={onChangeList('type')}>
              <option value="income">+</option>
              <option value="expenses">-</option>
            </select>
            <input type="text" className="add__description" placeholder="Add description" value={newList.description} onChange={onChangeList('description')}/>
            <input type="number" className="add__value" placeholder="Value" value={newList.value} onChange={onChangeList('value')}/>
            <button className="add__btn" onClick={handleAdd()}><i className="ion-ios-checkmark-outline" /></button>
          </div>
        </div>
    )
}