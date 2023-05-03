import { useState,FormEvent} from "react";




function ExpenseForm() {



  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()


  }



 

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Title
        </label>
        <input
          type='text'
          className='form-control'
         
          placeholder='Expense Title'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Price
        </label>
        <input
          type='number'
          className='form-control'
          
          placeholder='Expense Price'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Category
        </label>
        <select
          className='form-select'
          aria-label='Default select example'
          defaultValue='Family'
        >
          <option value='Family'>Family</option>
          <option value='Entertainment'>Entertainement</option>
          <option value='Utils'>Utils</option>
          <option value='Utils'>Bills</option>
        </select>
      </div>
      <div className='mb-3 d-grid'>
        <button type='button' className='btn btn-outline-success'>
          ADD
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
