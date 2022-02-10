import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(e =>
              <li key={e.to}>
                <NavLink to={e.to} className={({ isActive }) => isActive ? "nav-active" : ""}>{e.name}</NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {routes.map(e =>
            <Route path={e.path} element={<e.component />} />
          )}
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </Router>
  );
}