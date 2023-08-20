import './App.css';
import Cond from "./Cond"
import Props from "./Props"
function App() {
  return (
    <div className='App'>
      <h1>HOO YAHOO</h1>

      <iconify-icon
        icon='twemoji:astronaut-medium-skin-tone'
        height='unset'
        style={{
          width: '40px',
          height: '40px',
        
          color: 'red',
        }}
      />
      <Cond/>
      <Props/>
  
    </div>
  );
}

export default App;
