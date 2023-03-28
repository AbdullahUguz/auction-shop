import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Content from "./pages/Content/Content";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import ProtectedRouteAdmin from "./pages/ProtectedRoute/ProtectedRouteAdmin";
import { useAuth } from "./contexts/AuthContext";
import Profile from "./pages/Profile/Profile";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  const { loggedIn,user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Content />} />
          <Route path="admin" element={
            <ProtectedRouteAdmin loggedIn={loggedIn} user={user}>
              <AdminDashboard/>
            </ProtectedRouteAdmin>
          } />
          <Route path="products" element={<Content/>}/>
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
