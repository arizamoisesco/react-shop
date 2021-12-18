import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../style/global.css'

//Syle Component
const App = () => {
    return(
        <Layout>
            <Login />
            <RecoveryPassword />
        </Layout>
    );
}

export default App;