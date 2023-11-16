import { Link } from 'react-router-dom'

import '../styles/resume.css'

export default function Resume() {
  return (
    <>
      <div>
        Resume soon
      </div>
      <button><Link to="/" className="go-back">Go Back</Link></button>
    </>
  )
}