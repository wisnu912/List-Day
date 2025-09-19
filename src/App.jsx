import { useState } from 'react'
import './App.css'
import FormDate from './component/FormDate'
import ListDate from './component/ListDate';

function App() {

  const [Jam , SetJam] = useState([])



const Addjam = (jamMasuk, jamPulang) => {
  const newDate = { jamMasuk, jamPulang, id: Date.now() };
  SetJam([...Jam, newDate]); 
};

  return (
    <>
      <div className=''>
     <FormDate Add={Addjam}/>
     <ListDate Jam={Jam}/>
      </div>
    </>
  )
}

export default App
