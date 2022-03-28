import React from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';
import OutPut from './components/OutPut';

function App() {
  const [data, setData] = useState({items: []});
  const [inquiry, setInquiry] = useState();
  


  function api (){
    if (inquiry !== undefined) {
      fetch(`https://api.github.com/search/repositories?q=${inquiry}`)
      .then((response) => {response.json().then((data) => {setData(data)})})
    } 
  };

  function callBack(value){
    setInquiry(value)
  };

  return (
    <div className="outPut">
      <div className='outPut-search'>
        <Input callBack = {callBack}/>
        <Button link = {api} />
      </div>
      <OutPut data={data} />
    </div>
    

    );
}
export default App;
