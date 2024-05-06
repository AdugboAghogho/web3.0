import { Navbar, Welcome, Footer, Services, Transaction } from '../src/components';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-600">
      <div className="gradientbg-welcome">
        <Navbar />
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </div>
  )
}

export default App