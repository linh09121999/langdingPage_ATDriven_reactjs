import React, { Suspense} from 'react';
import {Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import '../src/assets/css/index.css'
import { Footer, Header } from './components';
import { BackToTop, ScrollProgress } from './action';


const Home = React.lazy(() => import('./view/index'));

const ProtectedRoute: React.FC = () => {
  // const { isMobile } = useGlobalContext();
  return (
    <div className='flex min-h-screen flex-col overflow-hidden'>
      {/* progress bar */}
      <ScrollProgress />

      {/* back to top */}
      <BackToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>

  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
};

export default App
