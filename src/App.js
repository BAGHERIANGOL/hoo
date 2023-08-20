import './App.css';
import Cond from "./Cond"
import Props from "./Props"
import Click from "./click"
import Quu from "./Quu"
import Doctor from "./Doctor"
import Cors from "./Cors"
import { Icon } from '@iconify/react';
function App() {
  return (
    <div className='App'>
      <h1>HOO YAHOO</h1>
      <div>
        <Icon icon="carbon:chart-radar"   style={{
            width: '40px',
            height: '40px',
             color: 'red',
                   }} />
        <Icon icon="fluent-emoji-flat:school"    style={{
            width: '40px',
            height: '40px',
             color: 'red',
          }} />
        <Icon
          icon='twemoji:astronaut-medium-skin-tone'
          height='unset'
          style={{
            width: '40px',
            height: '40px',
                }}
        />
        <Icon icon="raphael:cart" style={{
            width: '40px',
            height: '40px',
               color:'green' }} />
      </div>
      <Cors/>
      <Doctor/>
       <Quu/>
      <Click/>
   <Props>
<Cond/>
   </Props>
    
     
 
  
    </div>
  );
}

export default App;
