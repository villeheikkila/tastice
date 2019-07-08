import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ALL_USERS, ALL_PRODUCTS, LOGIN } from './queries'

import { UserList } from './components/UserList'
import { ProductList } from './components/ProductList'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { AddProduct } from './components/AddProduct'
import { Index } from './components/Index'
import { LogIn } from './components/LogIn'
import { Navbar } from './components/Navbar'



const App = () => {
    const [token, setToken] = useState(null)
    const usersQuery = useQuery(ALL_USERS)
    const productsQuery = useQuery(ALL_PRODUCTS)

    useEffect(() => {
        const token: any = localStorage.getItem('token')
        if (token) {
            setToken(token)
        }
    })

    const handleError = (error: any) => {
        console.log('error: ', error);
    }
    const [login] = useMutation(LOGIN, {
        onError: handleError
    })

    const logout = async (event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault()
        setToken(null)
        localStorage.clear()
    }

    if (!token) {
        return (
            <LogIn login={login} setToken={setToken} />
        )
    }

    if (usersQuery.data.users === undefined || productsQuery.data.products === undefined) {
        return (
            <div><p>Loading...</p></div>
        )
    }


    return (
        <div>
            <Router>
                <Navbar logout={logout} />
                <Route exact path="/" render={() => <Index />} />
                <Route exact path="/products" render={() => <ProductList products={productsQuery.data.products} />} />
                <Route exact path="/users" render={() => <UserList users={usersQuery.data.users} />} />
                <Route exact path="/addproduct" render={() => <AddProduct />} />
            </Router>
        </div>
    )
}

export default App