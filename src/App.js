import React, {Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

const Quotation = lazy(() => import('./views/Quotation'));
const PingPage = lazy(() => import('./views/PingPage'));

export default function App() {
  return (
    <Suspense fallback={'load...'}>
      <Switch>
        <Route exact path={'/'} component={Quotation} />
        <Route exact path={'/ping'} component={PingPage} />
      </Switch>
    </Suspense>
  );
}
