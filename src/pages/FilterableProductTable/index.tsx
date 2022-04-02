import { useForm } from "antd/lib/form/Form";
import { useState } from "react";
import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

/**
 *
 * todo 根据表单变化，设置路由
 */
const FilterableProductTable = () => {

    const [form] = useForm()

    const onFieldsChange = (changeFileds, allFileds) => {
        console.log(form.getFieldsValue())
    }

    const [count, setCount] = useState(0)
    const newState = count * 10
    return <div>
        {`count: ${count} newState: ${newState}`}
        <button onClick={() => setCount(count+1)}></button>
        <SearchBar onFieldsChange={onFieldsChange} form={form} ></SearchBar>
        <ProductTable products={PRODUCTS} form={form} ></ProductTable>
    </div>
}

export default FilterableProductTable