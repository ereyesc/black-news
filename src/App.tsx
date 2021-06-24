import Cover from './components/Cover';
import LatestNews from './components/LatestNews';
import MoreNews from './components/MoreNews';
import AllNews from './components/AllNews';
import Footer from './components/Footer';
import './App.less';

function App() {
  return (
    <>
      <Cover />
      <LatestNews />
      <MoreNews />
      <Footer />
      {/* <AllNews /> */}
    </>
  );
}

export default App;
