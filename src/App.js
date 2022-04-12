import React from 'react';
import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import DropDown from './components/DropDown';
import Cards from './components/Cards';
import Slider from './components/Slyder';
import Button from './components/Button';
import OutPut from './components/OutPut';

function App() {
  const [data, setData] = useState([]);
  const [out, setOut] = useState([]);
  const [elements, setElements] = useState();
  const [sliderNone, setSliderNone] = useState('none');
  const [index, setIndex] = useState(0)

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
      changeOut(select, parsCards.length, parsCards)
      setSliderNone('slyder')
    };
    xhr.onerror = () => {setData(<p>ERROR</p>)}
    xhr.send()
  }

  function changeOut (max, len, data){
    if (data !== undefined){
      const arr = []
      for (let i = 0, step = 0; i < len/max ; i++, step = step + max*1){
        arr.push(<OutPut key = {i} data = {data.slice(step, step + max*1)} />)
      }
      setOut(arr)
      changeElements(len, max)
    }
    

  }

  function changeElements(max, min){
      const arr = []
      const index = Math.ceil(max/min)
      for (let i = 0; i < index; i++){
        arr.push(<Button changeIndex = {changeIndex} current = {i} key = {i} img = {i + 1}/>)
      }
      setElements(arr)
  }

  function changeIndex(position, current){
    if (position === 'rigth'){
      index < out.length-1? setIndex(index + 1): setIndex(0)
      } else if(position === 'left'){
        index === 0? setIndex(out.length -1): setIndex(index - 1)
    } else {setIndex(current)}
  }
  

  return (
    <div >
        <Search link = {api} />
        <div>
          <DropDown len = {data.length} data = {data} changeOut = {changeOut}/>
        </div>
        <div className='outPut'>
          <Slider sliderNone = {sliderNone} changeIndex = {changeIndex} elements = {elements}/>
          <div className="outPut-card">
            {out[index]}
          </div>
          <Slider sliderNone = {sliderNone} changeIndex = {changeIndex} elements = {elements}/>
        </div>
    </div> 
    

    );
}
export default App;
