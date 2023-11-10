import Welcome from './welcome'
import About from './about'
import Projects from './projects'

import '../styles/body.css'

export default function Body() {
  return (
    <div className="body-section">
      <Welcome />
      <About />
      <Projects />
    </div>
  )
}