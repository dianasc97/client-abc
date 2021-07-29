import React from 'react';

import{BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './screens/dashboard';
import DataImportation from './screens/DataImportation'
import GenerateRelation from './screens/GenerateRelation'
import ListData from './screens/ListData'
import Users from './components/Users'


const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/DataImportation" component={DataImportation} />
        <Route exact path="/GenerateRelation" component={GenerateRelation} />
        <Route exact path="/ListData" component={ListData} />
        <Route exact path="/Users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;