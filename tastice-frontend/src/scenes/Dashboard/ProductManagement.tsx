import { useMutation, useQuery } from '@apollo/react-hooks';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MaterialTable from 'material-table';
import React from 'react';
import { ALL_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT } from '../../graphql';
import { errorHandler, notificationHandler } from '../../utils';

interface UpdatedProductObject {
    id: string;
    name: string;
    company: string;
    category: string;
    subCategory: [string];
}
const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(3, 2),
        maxWidth: 700,
        margin: `${theme.spacing(1)}px auto`,
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        margin: theme.spacing(1),
    },
    root: {
        paddingTop: 30,
    },
}));

export const ProductManagement = (): JSX.Element | null => {
    const classes = useStyles('');

    const productsQuery = useQuery(ALL_PRODUCTS);
    const products = productsQuery.data.products;

    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        onError: errorHandler,
        refetchQueries: [{ query: ALL_PRODUCTS }],
    });

    const [updateProduct] = useMutation(UPDATE_PRODUCT, {
        onError: errorHandler,
        refetchQueries: [{ query: ALL_PRODUCTS }],
    });

    if (productsQuery.data.products === undefined) {
        return null;
    }

    const productsObjects = products.map((product: Product) => ({
        id: product.id,
        name: product.name,
        company: product.company,
        category: product.category[0],
        subCategory: product.subCategory,
    }));

    if (productsQuery.data.products === undefined) {
        return null;
    }

    const handleDeleteProduct = async (id: string): Promise<void> => {
        const result = await deleteProduct({
            variables: { id },
        });

        if (result) {
            notificationHandler({
                message: `Product ${result.data.deleteProduct.name} succesfully deleted`,
                variant: 'success',
            });
        }
    };

    const handleUpdateProduct = async (product: UpdatedProductObject): Promise<void> => {
        const subCategoryArray = product.subCategory.map((subCategoryUnit: any): string => {
            return subCategoryUnit.name;
        });

        const result = await updateProduct({
            variables: {
                id: product.id,
                name: product.name,
                company: product.company,
                category: product.category,
                subCategory: subCategoryArray,
            },
        });

        if (result) {
            notificationHandler({
                message: `Product ${result.data.updateProduct.name} succesfully updated`,
                variant: 'success',
            });
        }
    };

    return (
        <MaterialTable
            title="List of all products"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Company', field: 'company.name' },
                { title: 'Category', field: 'category.name' },
            ]}
            data={productsObjects}
            editable={{
                onRowUpdate: updatedProduct =>
                    new Promise(resolve => {
                        setTimeout((): void => {
                            resolve();
                            handleUpdateProduct(updatedProduct);
                        }, 600);
                    }),
                onRowDelete: oldProduct =>
                    new Promise(resolve => {
                        setTimeout((): void => {
                            resolve();
                            handleDeleteProduct(oldProduct.id);
                        }, 100);
                    }),
            }}
        />
    );
};