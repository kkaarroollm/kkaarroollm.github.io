import './App.css'
import weAreRecruiting from './assets/we_re_recruiting.png'

function App() {

  return (
      <>
          <div className="text-center">
              <h1 className="text-4xl font-bold">KAROL MARSZALEK PORTFOLIO</h1>
              <p className="text-lg text-gray-600 mt-2">Coming soon...</p>
              <p className="flex items-center justify-center"><img src={weAreRecruiting} alt="We are hiring" className="w-64 h-32 items" /></p>
          </div>
      </>
  )
}

export default App
