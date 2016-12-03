import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App.js'
import Counter from './containers/Home/app.js'
import Notes from './containers/Note/app.js'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Notes}/>
        <Route path="counter" component={Counter}/>
    </Route>
)
