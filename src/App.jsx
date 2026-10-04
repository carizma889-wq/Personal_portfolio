import Home from './pages/Home'
import './App.css'
import { ContactProvider } from './context/ContactContext'
function App() {

 return (
  <div>
    <ContactProvider>
    <Home/>
    </ContactProvider>
  </div>
 )
}

export default App
