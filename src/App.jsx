import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import AppLayout from "./AppLayout";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<AppLayout />}>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:productId" exact element={<ProductDetail />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
