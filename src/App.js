import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './section/index'
import { Home, About, Services, Team, Support, Clients,PostProject, ProjectDetail,Project,  Account , EditAccount, MyProjects , Login , Chat ,Contract} from './pages/index'

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
          <Route path='/project' element={<Project />} />
          <Route path='/postproject' element={<PostProject />} />
          <Route path='/project-detail' element={<ProjectDetail />} />
          <Route path='/account' element={<Account />} />
          <Route path='/edit-account' element={<EditAccount />} />
          <Route path='/myprojects' element={<MyProjects />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/contract' element={<Contract />} />
        </Routes>
        <Footer />
      </Router>
      <div className='container'>
      </div>

    </>
  )
}

export default App;
