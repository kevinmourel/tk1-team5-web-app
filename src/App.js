import Table from "./components/Table";
import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

function App() {

  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <div className="App">     
        <Form setRefresh={setRefresh} />
        <Table setRefresh={setRefresh} isRefresh={isRefresh}/>
    </div>
  );
}

export default App;