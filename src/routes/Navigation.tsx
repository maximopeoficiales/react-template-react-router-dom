import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>cargando....</span>}>
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
            {routes.map(({ to, path, Component }) =>
              <Route key={to} path={path} element={<Component />} />
            )}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>

  );
}