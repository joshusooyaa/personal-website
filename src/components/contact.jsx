import SectionHeader from './section-header'

import '../styles/contact.css'

export default function Contact() {

  return (
    <div name="contact" className="contact-section">
      <SectionHeader title="Contact" />
      <div className="contact-info">
        <h3>Feel free to contact me!</h3>
        <p><a href="mailto:thejoshsawyer@gmail.com">thejoshsawyer@gmail.com</a></p>
      </div>
    </div>
  )
}