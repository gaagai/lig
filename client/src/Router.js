import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import Home from './components/Home/Home';


export default function Router() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Layout>
    )
}
