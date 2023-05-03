interface Props{
  onChange:(name:string) => void
}


function Selection({onChange}:Props) {
  return (
    <>
      <label htmlFor='exampleFormControlInput1' className='form-label'>
        Search By Category
      </label>
      <select
        className='form-select'
        aria-label='Default select example'
        defaultValue=''
        onChange={(e) => onChange(e.target.value)}
      > <option value=''>Select</option>
        <option value='Family'>Family</option>
        <option value='Entertainment'>Entertainement</option>
        <option value='Utils'>Utils</option>
        <option value='Bills'>Bills</option>
      </select>
    </>
  );
}

export default Selection;
