import React from 'react'

const BookTableRight = () => {
  return (
   <div className="book-table-right">
    <div className="book-table-right-box">
      <h3 className='reservation'>Reservation</h3>
      <h1 className='white'>Book A Table Online</h1>

      <div className="input-data">
          
      <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Date" name='date' />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Number of People" name='people' />
                </div>
            </div>
         
            <div className="row mb-3">
                <div className="col">
                  <input type="date" className="form-control" placeholder="Date" name='date' />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Number of People" name='people' />
                </div>
              </div>
         

          <textarea className='textarea' name="" id="" cols="60" rows="5" placeholder='Special Request'></textarea>

          <buttton className="btn1 booknow">Book Now</buttton>
      </div>

    </div>
   </div>
  )
}

export default BookTableRight