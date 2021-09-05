import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
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
