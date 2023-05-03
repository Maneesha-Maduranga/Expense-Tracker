import {
  Formik,
 
  Form,
  Field,
 ErrorMessage
} from "formik";

import * as Yup from "yup";


interface MyFormValues {
  title: string;
  price: number;
  catergory: string;
}

interface Props{
  addExpences: (data:MyFormValues) => void
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
});


function ExpenseForm({addExpences}:Props) {
  const initialValues: MyFormValues = { title: "", price: 0 , catergory: "" };
  
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          // console.log(title,price,catergory);
          addExpences(values)
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        <Form>
          <div className='mb-3'>
            <label className='form-label' htmlFor="title">Title</label>
            <Field
              id='title'
              type='text'
              className='form-control'
              placeholder='Expences Title'
              name='title'
            />
            <div className='text-danger'>
              <ErrorMessage name='title' />
            </div>
              
          </div>
          <div className='mb-3'>
            <label className='form-label'>Price</label>
            <Field
              id='price'
              type='number'
              className='form-control'
              name='price'
            />
            <div className='text-danger'>
              <ErrorMessage name='price' />
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Catergory
            </label>
            <Field name='catergory' component='select' className='form-select'>
              <option value='Family'>Family</option>
              <option value='Entertainment'>Entertainement</option>
              <option value='Bills'>Bills</option>
              <option value='Utiils'>Utills</option>
            </Field>
            <div className='text-danger'>
              <ErrorMessage name='category' />
            </div>
          </div>
          <div className="mb-3">
          <div className="d-grid">
  <button className="btn btn-outline-success" type="submit">Add</button>
 
</div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ExpenseForm;
