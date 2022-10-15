import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '`/routes/index';
import { Fragment } from 'react';
import DefaultLayout from './layout/DefaultLayout';
import HeaderOnly from './layout/HeaderOnly';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = HeaderOnly;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
