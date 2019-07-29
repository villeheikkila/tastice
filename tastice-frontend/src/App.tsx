import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { THEME } from './queries';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { BottomBar } from './components/BottomBar';
import { UserList } from './scenes/UserList';
import { ProductList } from './scenes/ProductList';
import { AddProduct } from './components/AddProduct';
import { Notifications } from './components/Notification';
import { MobileMenu } from './components/MobileMenu';
import { LogIn } from './scenes/LogIn';
import { SignUp } from './scenes/SignUp';
import { NavigationBar } from './components/NavigationBar/';
import { Discover } from './scenes/Discover';
import { Account } from './scenes/Account';
import { Activity } from './scenes/Activity';
import { Product } from './scenes/Product';
import { Profile } from './scenes/Profile';
import { FriendList } from './components/FriendList';

import { Box, createMuiTheme, Fade, CssBaseline } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue,
        secondary: pink,
    },
});

const whiteTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
    },
});

const App = (): JSX.Element => {
    const [token, setToken] = useState();
    const [userId, setUserId] = useState();
    const themeSwitcher = useQuery(THEME);
    const theme = themeSwitcher.data.theme ? 1 : 0;
    const themes = [darkTheme, whiteTheme];

    useEffect((): void => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token) {
            setToken(token);
            setUserId(userId);
        }
    }, [token]);

    return (
        <div>
            <ThemeProvider theme={themes[theme]}>
                <CssBaseline />
                <Router>
                    <Notifications />
                    {!token ? (
                        <Switch>
                            <Route exact path="/" render={() => <LogIn setToken={setToken} />} />
                            <Route exact path="/signup" render={() => <SignUp setToken={setToken} />} />
                            <Route render={() => <LogIn setToken={setToken} />} />
                        </Switch>
                    ) : (
                        <div style={{ paddingTop: 70 }}>
                            <NavigationBar setToken={setToken} />
                            <Fade timeout={300}>
                                <Switch>
                                    <Route exact path="/products" render={() => <ProductList />} />
                                    <Route exact path="/discover" render={() => <Discover />} />
                                    <Route exact path="/users" render={() => <UserList />} />
                                    <Route exact path="/activity" render={() => <Activity />} />
                                    <Route exact path="/product/new" render={() => <AddProduct />} />
                                    <Route exact path="/friends" render={() => <FriendList id={userId} />} />
                                    <Route exact path="/menu" render={() => <MobileMenu setToken={setToken} />} />
                                    <Route exact path="/account" render={() => <Account setToken={setToken} />} />
                                    <Redirect from="/profile" to={`/user/${userId}`} />
                                    <Route
                                        exact
                                        path="/product/:id"
                                        render={({ match }) => <Product id={match.params.id} />}
                                    />
                                    <Route
                                        exact
                                        path="/user/:id"
                                        render={({ match }) => <Profile id={match.params.id} />}
                                    />
                                    <Redirect from="/" to="/activity" />
                                    <Route render={() => <Activity />} />
                                </Switch>
                            </Fade>
                            <Box display={{ xs: 'block', md: 'none' }}>
                                <BottomBar />
                            </Box>
                        </div>
                    )}
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
