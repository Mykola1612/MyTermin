import { Route, Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/auth/authSelectors";
import { Loader } from "./components/Loader/Loader";

function App() {
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  return (
    <>
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
