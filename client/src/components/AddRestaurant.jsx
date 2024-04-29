import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='m-auto p-auto container'>
        <form action="">
            <div className="form row justify-content-md-center">
                <div className="col">
                    <input type="text" className='form-control' placeholder='Name'/>
                </div>
                <div className="col">
                    <input type="text" className='form-control' placeholder='Location' />
                </div>
                <div className="col">
                    <select className='custom-select my-1 mr-sm-2'>
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button className='btn btn-primary col'>Add</button>
            </div>
        </form>

    </div>
  )
}

export default AddRestaurant