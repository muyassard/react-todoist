import Filter from "components/header/filter";
import Inbox from "components/header/inbox";
import Search from "components/header/search";
import Today from "components/header/today";
import Upcoming from "components/header/upcoming";
import Saidbar from "components/saidbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex ">
      <BrowserRouter>
        <Saidbar>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/project" element={<Inbox />} />
            <Route path="/today" element={<Today />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/filters-labels" element={<Filter />} />
          </Routes>
        </Saidbar>
      </BrowserRouter>
    </div>
  );
};

export default App;
