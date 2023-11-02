import { observer } from 'mobx-react-lite';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Search from './pages/Search/Search.tsx';
import Login from './components/Login.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default observer(App)
