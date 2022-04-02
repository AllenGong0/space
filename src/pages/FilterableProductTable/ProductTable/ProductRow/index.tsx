
const ProductRow = ({ product }) => {
    const { name, stocked, price } = product
    const nameComp = stocked ? name : <span style={{color: 'red'}}>{name}</span>
    return <tr>
        <td>{nameComp}</td>
        <td>{price}</td>
    </tr>
}
export default ProductRow