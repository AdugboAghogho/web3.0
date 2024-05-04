import { Navber, Welcome, Footer, Services, Transaction } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navber />
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </div>
  )
}

export default App