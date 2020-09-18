import React from 'react';
import Layout from './commponent/Layout/Layout';
import Burgerbuilder from './container/burger-builder';


function App() {
  return (
    <div className="App">
     <Layout>
       <Burgerbuilder></Burgerbuilder>
     </Layout>
    </div>
  );
}

export default App;
