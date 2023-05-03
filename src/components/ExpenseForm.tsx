function ExpenseForm() {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Title
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleFormControlInput1'
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
          id='exampleFormControlInput1'
          placeholder='Expense Price'
        />
      </div>
      <div className='mb-3'>
      <label htmlFor='exampleFormControlInput1' className='form-label'>
          Category
        </label>
        <select className='form-select' aria-label='Default select example'>
          <option selected>Open this select menu</option>
          <option value='Family'>Family</option>
          <option value='Entertainment'>Entertainement</option>
          <option value='Utils'>Utils</option>
          <option value='Utils'>Bills</option>
        </select>
      </div>
    </form>
  );
}

export default ExpenseForm;
