import React from 'react'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Formvalid from './Formvalidation';
import TableData from './TableForm'
function Routing() {
    return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/'component={TableData}/>
                <Route path='/Form' component={Formvalid}/>
            </Switch>
            </Router>
        </div>
    )
}

export default Routing
