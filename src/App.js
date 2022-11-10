import React from 'react';
import './App.css';
import {RecoilRoot, atom, useRecoilState} from 'recoil';

const countState = atom({
  key : 'countState',
  default: 0,
})
const fontSizeState = atom({
  key: 'FontSizeState',
  default: 10,
})

function App() {
  return (
    <RecoilRoot>
      <Counter></Counter>
      <FontButton></FontButton>
    </RecoilRoot>
  );
}

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  const addCount = () => {
    setCount(count + 1);
  }
  const subCount=()=> {
    setCount(count - 1);
  }
  // wow zz
  return(
    <div>
      <button onClick={addCount}>up</button>
      <button onClick={subCount}>sub</button>
      <p>{count}</p>
    </div>
  );
}
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return(
    <div>
      <button onClick={()=> setFontSize((size)=> size + 1)} style={{fontSize}}>
        Click to Large
      </button>
      <button onClick={()=> setFontSize((size)=> size - 1)} style={{fontSize}}>
        Click to Small
      </button>
    </div>
  )
}

export default App;
