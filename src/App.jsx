import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage/CookiesPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage/PrivacyPage"));
const ConditionsPage = lazy(() =>
  import("./pages/ConditionsPage/ConditionsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
