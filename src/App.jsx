import { useState } from 'react'
import '@mantine/core/styles.css';
import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Posts from './pages/Posts';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='posts' element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
