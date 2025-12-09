import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-slate-950 text-slate-50">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default AppLayout;
