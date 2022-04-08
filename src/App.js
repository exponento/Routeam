import React from 'react';
import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import DropDown from './components/DropDown';
import Cards from './components/Cards';
import Slider from './components/Slider';
import Button from './components/Button';

function App() {
  const [data, setData] = useState([]);
  const [out, setOut] = useState([]);
  const [elements, setElements] = useState();
  const dataLen = data.length;
  const [sliderNone, setSliderNone] = useState('none')

  function api (url){
    const select = document.getElementById('select').value
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onprogress = () => {setData(<p>'Идет поиск проектов...'</p>)}
    xhr.onload = () => {
      const resalt = JSON.parse(xhr.response)
      const parsCards = resalt.items.map(e => {
        return(
          <Cards 
            key = {e.id} 
            html_url = {e.html_url} 
            stargazers_count = {e.stargazers_count} 
            watchers = {e.watchers} 
            autor = {e.owner.login} 
            name = {e.name}
            images = {e.owner.avatar_url}
          />
        )
      })
      setData(parsCards)
      setOut(parsCards.slice(0, select))
      changeElements(parsCards.length, select)
      setSliderNone('slyder')
    };
    xhr.onerror = () => {setData(<p>ERROR</p>)}
    xhr.send()
  }

  function changeOut (max){
    if (data !== undefined){
      const arr = []
      const index = Math.ceil(dataLen/max)
      const arrElem = []
      for (let i = 0; i < max; i++){
        arr.push(data[i])
      }
      setOut(arr)
      changeElements(dataLen, max)
    }
    

  }

    function changeElements(max, min){
      const arr = []
      const index = Math.ceil(max/min)
      for (let i = 0; i < index; i++){
        arr.push(<Button key = {i}/>)
      }
      setElements(arr)
    }
  

  return (
    <div >
        <Search link = {api} />
        <div>
          <DropDown changeOut = {changeOut}/>
        </div>
        <div className='outPut'>
          <Slider sliderNone = {sliderNone} elements = {elements}/>
          <div className="outPut-card">
            {out}
          </div>
          <Slider sliderNone = {sliderNone} elements = {elements}/>
        </div>
    </div> 
    

    );
}
export default App;
