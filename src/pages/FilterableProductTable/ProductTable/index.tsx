import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, form  }) => {

    const [rows, setRows] = useState([])
    let lastCategoryRef = useRef()

    const {filterText, inStockOnly} = useParams()

    useEffect(() => {
      const newRows = []
      products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }

        if (inStockOnly && !product.stocked) {
          return;
        }

        if (product.category !== lastCategoryRef.current) {
          newRows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        newRows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategoryRef.current = product.category;
      });

      setRows(newRows)
    }, [filterText, inStockOnly])


    return <table>
        <thead>
            <tr>
                <td>name</td>
                <td>price</td>
            </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
    </table>
}

export default ProductTable