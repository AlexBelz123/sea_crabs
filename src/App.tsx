import Layout from './layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './layout/routes';

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route, i) => (
          <Route key={String(i + route.path)} {...route} />
        ))}
        <Route path="/" element={<Navigate to="/authform" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
