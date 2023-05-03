function ShowArea() {
    return ( 
        <table className="table">
  <thead>
  <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Movie</td>
      <td>450</td>
      <td>Entertainement</td>
      <td>remove</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
        <td>Sub Total</td>
        <td>$ 54</td>
    </tr>
  </tfoot>
</table>
     );
}

export default ShowArea;