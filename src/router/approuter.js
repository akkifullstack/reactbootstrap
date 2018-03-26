import React from 'react'
import {BrowserRouter ,Route, Switch} from 'react-router-dom'
import Form from '../components/form/form'
import Button from '../components/button/button'
import Card from '../components/card/card'
import Header from '../components/header/header'

const Approuter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={Button} exact={true}/>
    <Route path="/form" component={Form} />
    <Route path="/card" component={Card}/>
    </Switch>
    </div>
    </BrowserRouter>
)


export default Approuter