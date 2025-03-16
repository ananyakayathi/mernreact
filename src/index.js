import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App16 from './App16';
import App17 from './App17';

const sqrfunction=(n)=>{
    return n*n;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<App16 val={5} fn={sqrfunction}/>//sending callback as a property
<App17 val={7} fn={sqrfunction}/>
</>);

// root.render(<App16 val={5} fn={sqrfunction}/>)

// root.render(<App15 result={{'john':40,'cathy':50}}/>)
// root.render(<App14 marks={[34,21,56]}/>)
// root.render(<Main1 flag={true}/>);
// root.render(<App5 name="Cathy"/>);
// root.render(<App4 n={5}/>);
// root.render(<App3/>);
// root.render(<App flag={true}/>);

