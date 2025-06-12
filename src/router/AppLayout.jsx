import { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import routes from './routes';
import LoadingSpinner from '../components/common/LoadingSpinner';
import NotFound from '../components/common/NotFound';
import { Toaster } from 'sonner';

import { useApp } from '../context/AppContext';

const AppLayout = () => {
  const { sidebarOpen } = useApp();
  const location = useLocation();
  
  // Calculate the left padding based on sidebar state
  const contentPadding = sidebarOpen ? '243px' : '82px';
  
  // Check if current route is home or empty
  const isHomeRoute = location.pathname === '/' || location.pathname === '';
  
  // Determine if we should show the sidebar and navbar
  const showNavigation = !isHomeRoute;

  return (
    <div className="flex h-screen" style={{ backgroundColor: 'var(--background-color, #f3f4f6)' }}>
      <Toaster position="bottom-right" richColors />
      {/* Conditionally render Sidebar */}
      {showNavigation && <Sidebar />}
      
      {/* Main Content */}
      <div 
        className="flex flex-col flex-1 overflow-hidden transition-all duration-300"
        style={{ paddingLeft: showNavigation ? contentPadding : 0 }}
      >
        {/* Conditionally render Navbar */}
        {showNavigation && <Navbar />}
        
        {/* Page Content */}
        <main 
          className={`flex-1 overflow-y-auto ${showNavigation ? 'mt-2 p-4' : 'p-0'}`} 
          style={{ backgroundColor: 'var(--background-color, #f3f4f6)' }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {routes.map((route, idx) => {
                // Handle nested routes
                if (route.children) {
                  return (
                    <Route key={idx} path={route.path} element={route.element}>
                      {route.children.map((childRoute, childIdx) => (
                        <Route 
                          key={`${idx}-${childIdx}`} 
                          path={childRoute.path} 
                          element={childRoute.element} 
                        />
                      ))}
                    </Route>
                  );
                }
                
                // Handle regular routes
                return (
                  <Route 
                    key={idx} 
                    path={route.path} 
                    element={route.element} 
                  />
                );
              })}
              
              
              {/* 404 Not Found route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
