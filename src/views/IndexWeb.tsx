import { useLocation } from "react-router-dom";
import WebRouter from "src/views/Web/Router";
import AppRouter from "src/views/App/Router";
import { useEffect } from "react";
const WEB_ROUTES = ["/", "/login"];

function IndexWeb() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  let currentPath = location.pathname;
  let web = false;
  let app = true;
  if (WEB_ROUTES.includes(currentPath)) {
    web = true;
    app = false;
  }

  return (
    <>
      {/* <Header /> */}
      {app && <AppRouter />}
      {web && <WebRouter />}
    </>
  );
}

export default IndexWeb;
