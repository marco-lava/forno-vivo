import { Route, Switch } from "wouter";
import Index from "./pages/index";
import { Provider } from "./components/provider";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
            {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      <div className="platform-badge"><RunableBadge /></div>
    </Provider>
  );
}

export default App;
