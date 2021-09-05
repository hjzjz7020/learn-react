import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
