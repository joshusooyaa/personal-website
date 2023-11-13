import '../styles/section-header.css'

export default function SectionHeader( {title} ) {

  return (
    <>
      <div className="section-header">
        <h3 className='title'>{title}</h3>
      </div>
    </>
  )
}