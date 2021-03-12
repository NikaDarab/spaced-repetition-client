import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicOnlyRoute from "../PublicOnlyRoute/PublicOnlyRoute";
import RegistrationRoute from "../../routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../routes/LoginRoute/LoginRoute";
import DashboardRoute from "../../routes/DashboardRoute/DashboardRoute";
import LearningRoute from "../../routes/LearningRoute/LearningRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import italingo2 from "../../assets/italingo-2.png";
import { ContextsProvider } from "../../contexts/LanguageContext";
import "./App.css";

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);

    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <BrowserRouter>
        <ContextsProvider>
          <div className="App">
            <main>
              <Header />
              {hasError && <p>There was an error! Oh no!</p>}

              <Switch>
                <PrivateRoute exact path={"/"} component={DashboardRoute} />

                <PrivateRoute path={"/learn"} component={LearningRoute} />
                <PublicOnlyRoute
                  path={"/register"}
                  component={RegistrationRoute}
                />
                <PublicOnlyRoute path={"/login"} component={LoginRoute} />
                <Route component={NotFoundRoute} />
              </Switch>
            </main>
            <div className="image">
              <img
                className="italingo-img"
                src={italingo2}
                alt="italingo logo, kids learning"
              />
            </div>
          </div>
        </ContextsProvider>
      </BrowserRouter>
    );
  }
}
