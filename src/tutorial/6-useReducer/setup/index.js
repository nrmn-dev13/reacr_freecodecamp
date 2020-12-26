import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispath] = useReducer(reducer, defaultState)
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(name) {
      const newItem = {id: new Date().getTime.toString(), name}
      dispath({type: 'ADD_ITEM', payload: newItem});
      setName('');
    } else {
      dispath({type: 'NO_VALUE'})
    }    
  }

  const closeModal = () => {
    dispath({type: 'CLOSE_MODAL'})
  }

  return (
  <>  
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
      <button type="submit" className="btn">Add</button>
    </form>
    {state.people.map((person) => {
      const {id, name} = person
      return (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button 
            className="btn"
            onClick={() => dispath({type: 'REMOVE_ITEM', payload: person.id})}
            >Remove</button>
        </div>
      )
    })}
  </>
  );
};

export default Index;
