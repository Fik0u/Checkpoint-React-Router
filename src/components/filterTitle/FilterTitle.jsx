import React from 'react'
import { Form } from 'react-bootstrap'

// FilterTitle component
const FilterTitle = ({searchTitle, setSearchTitle}) => {
  return (
    <div className='container' style={{ width: '50%', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}>
        <Form.Control type="text" placeholder="Search a movie" value = {searchTitle} onChange = {(e) => setSearchTitle(e.target.value)} />
    </div>
  )
}

export default FilterTitle
