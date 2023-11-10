import Welcome from './welcome'
import About from './about'

import '../styles/details.css'

export default function Details() {
  return (
    <div className="details">
      <Welcome />
      <About />
    </div>
  )
}