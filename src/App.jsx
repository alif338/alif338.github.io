import { SocialMedia } from './components/SocialMedia'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-profile'></div>
        <h2>Muhammad Alif Darmamulia</h2>
        <p>Fullstack Developer</p>
      </header>
      <section className='app-section'>
        <h1 style={{color: 'white', fontSize: '20pt'}}>Under Development</h1>
        <div className='social-media'>
          <SocialMedia />
        </div>
        <div className='experiences'></div>
      </section>
    </div>
  )
}

export default App
