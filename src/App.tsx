import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/button/button'
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Button>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello </Button>
    </div>
  );
}

export default App;
