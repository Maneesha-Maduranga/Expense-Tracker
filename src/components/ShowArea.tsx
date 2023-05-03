interface Expense {
  id: number;
  title: string;
  price: number;
  catergory: string;
}

interface Props {
  expences: Expense[];
  onSelect: (id: number) => void;
}

function ShowArea({ expences, onSelect }: Props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Price</th>
          <th scope='col'>Category</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {expences.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>Rs:{item.price}</td>
            <td>{item.catergory}</td>
            <td>
              <button
                type='button'
                className='btn btn-outline-danger'
                onClick={() => {
                  onSelect(item.id);
                }}
              >
                Danger
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        {expences.length === 0 ? (
          null
        ) : (<tr>
        <td>Sub Total</td>
        <td>
          Rs:
          {expences.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            0
          )}
        </td>
      </tr>)}
      </tfoot>
    </table>
  );
}

export default ShowArea;
