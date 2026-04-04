import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';

const Login = lazy(() => import('./components/auth/Login'));
const Register = lazy(() => import('./components/auth/Register'));
const Upload = lazy(() => import('./components/upload'));
const Websites = lazy(() => import('./components/websites'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      }>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/" element={
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Website Navigator</h1>
                <p className="text-gray-600 text-lg mb-8">
                  Please <Link to="/login" className="text-purple-600 hover:text-purple-800 transition">log in</Link> or <Link to="/register" className="text-purple-600 hover:text-purple-800 transition">register</Link> to continue
                </p>
              </div>
            </div>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;