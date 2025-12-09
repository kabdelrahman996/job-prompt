import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  const [cv, setCv] = useState(() => localStorage.getItem("cv") || "");

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-slate-950 text-slate-50">
      <Header cv={cv} setCv={setCv} />
      <Main cv={cv} />
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0c1929",
            color: "#d8e5f5",
            fontWeight: "500",
            borderRadius: "12px",
            padding: "12px 16px",
          },
        }}
      />
    </div>
  );
}

export default AppLayout;
