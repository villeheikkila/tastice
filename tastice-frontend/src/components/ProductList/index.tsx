import React from "react";
import { ALL_PRODUCTS, UPDATE_PRODUCT, DELETE_PRODUCT } from "./queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import MaterialTable from "material-table";

export const ProductList = () => {
  const productsQuery = useQuery(ALL_PRODUCTS);
  const products = productsQuery.data.products;

  const handleError = (error: any) => {
    console.log("error: ", error);
  };

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    onError: handleError,
    refetchQueries: [{ query: ALL_PRODUCTS }]
  });

  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    onError: handleError,
    refetchQueries: [{ query: ALL_PRODUCTS }]
  });

  if (productsQuery.data.products === undefined) {
    return null;
  }

  const handleDeleteProduct = async (id: any) => {
    const result = await deleteProduct({
      variables: { id }
    });
    if (result) {
      console.log("result: ", result);
    }
  };

  const handleUpdateProduct = async (product: any) => {
    const result = await updateProduct({
      variables: {
        id: product.id,
        name: product.name,
        producer: product.producer,
        type: product.type
      }
    });

    if (result) {
      console.log("result: ", result);
    }
  };

  return (
    <MaterialTable
      title="List of all products"
      columns={[
        { title: "Name", field: "name" },
        { title: "Producer", field: "producer" },
        { title: "Type", field: "type" },
        { title: "ID", field: "id" }
      ]}
      data={products}
      editable={{
        onRowUpdate: (updatedProduct, oldProduct) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              handleUpdateProduct(updatedProduct);
            }, 600);
          }),
        onRowDelete: oldProduct =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              handleDeleteProduct(oldProduct.id);
            }, 100);
          })
      }}
    />
  );
};
