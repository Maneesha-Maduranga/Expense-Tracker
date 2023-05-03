function Selection() {
  return (
    <>
      <label htmlFor='exampleFormControlInput1' className='form-label'>
        Search By Category
      </label>
      <select
        className='form-select'
        aria-label='Default select example'
        defaultValue=''
      >
        <option value='Family'>Family</option>
        <option value='Entertainment'>Entertainement</option>
        <option value='Utils'>Utils</option>
        <option value='Utils'>Bills</option>
      </select>
    </>
  );
}

export default Selection;
