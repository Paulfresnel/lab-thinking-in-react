import ProductRow from "./ProductRow"

function ProductTable (props) {
  const { setProducts, products } = props
  return(
      <div>
        <h1>IronStore</h1>

        <table>
            <thead>
                <tr>
                    <td className="orange">Name</td>
                    <td className="orange">Price</td>
                </tr>
            </thead>
            <tbody>
                <ProductRow setProducts={setProducts} products={products}/>
            </tbody>
        </table>
      </div>    
  )
}

export default ProductTable