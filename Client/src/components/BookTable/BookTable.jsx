import React from 'react'
import '../BookTable/BookTable.css'
import BookTableLeft from './BookTableLeft'
import BookTableRight from './BookTableRight'


const BookTable = () => {
  return (
    <div className="book-table">
        <BookTableLeft />
        <BookTableRight />
    </div>
  )
}

export default BookTable