import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './section/index'
import { Home, About, Services, Team, Support, Clients, Project,  Account, Myproject } from './pages/index'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />

          <Route path='/support' element={<Support />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/account' element={<Account />} />
          <Route path='/myproject' element={<Myproject />} />
        </Routes>
        <Footer />
      </Router>
      <div className='container'>
      </div>

    </>
  )
}

export default App;
