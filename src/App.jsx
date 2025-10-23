import Home from './components/Home'
import CreateStudent from './components/CreateStudent';
import ReadStudent from './components/ReadStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import {BrowserRouter, Routes, Route } from 'react-router'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/create-student" element= {<CreateStudent/>}/>
        <Route path="/read-student/:id" element= {<ReadStudent/>}/>
        <Route path="/update-student/:id" element= {<UpdateStudent/>}/>
        <Route path="/delete-student/:id" element= {<DeleteStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;