import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KafkaPublication from "./components/KafkaComponents/kafka";
import RabbitMq from "./components/rabbitMq/rabbitMq";
import Header from "./components/Headers/header";
import Home from "./components/Headers/home";
import IBMMQ from "./components/IbmMq/ibmMq";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoutes from "./components/Headers/protectedRouter";
import ProtectedLayout from "./components/Headers/protectedLayout";
import LoginNew from "./components/loginComp";

function App() {
  return (
    <>
      <GoogleOAuthProvider
        clientId={
          "984961973637-7lmndrv7f23q9j0ossa472t9hitm8jps.apps.googleusercontent.com"
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<LoginNew />} />
              <Route path="home" element={<LoginNew />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="kafka" element={<KafkaPublication />} />

                <Route path="rabbitMq" element={<RabbitMq />} />
                <Route path="ibmMQ" element={<IBMMQ />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}
//hello

export default App;
