import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import { publicRoutes } from './routes'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
