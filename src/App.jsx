import Home from './components/pages/Home'
import CreateStudent from './components/pages/CreateStudent';
import ReadStudent from './components/pages/ReadStudent';
import UpdateStudent from './components/pages/UpdateStudent';
import DeleteStudent from './components/pages/DeleteStudent';
import {BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './components/layouts/MainLayout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element= {<Home/>}/>
        <Route path="/create-student" element= {<CreateStudent/>}/>
        <Route path="/read-student/:id" element= {<ReadStudent/>}/>
        <Route path="/update-student/:id" element= {<UpdateStudent/>}/>
        <Route path="/delete-student/:id" element= {<DeleteStudent/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;