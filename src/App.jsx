import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <Navbar />
        {/* <DaisyNav /> */}
      </header>
      <main>
        {/* <Suspense fallback={<span className='loading loading-bars loading-primary'></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense> */}
        <ResultsChart></ResultsChart>
      </main>
    </>
  )
}

export default App
