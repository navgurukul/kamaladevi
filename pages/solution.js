import React from "react";
import Router, { withRouter } from "next/router";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import withRoot from "../src/with-root";
import { fetchApi } from "../src/services/api";
import localforage from "localforage";

import Header from "../src/components/header";
import SolutionDetail from "../src/components/exercise-solution/solution-detail";

class Solution extends React.Component {
  constructor() {
    super();
    this.state = {
      solution: "",
    };
    this.loadSolution = this.loadSolution.bind(this);

  }

  componentDidMount() {
    this.loadSolution();
  }
  async loadSolution() {
    const { id } = this.props.router.query;
    let exerciseId = id;
    let value;
    let response;
    try {
      value = await localforage.getItem("authResponse");
      if (!value) {
        // No access tokens saved
        Router.replace("/");
        return null;
      }
    } catch (e) {
      // Do not remove this catch block, as the server side rendering
      // is taken care by this catch block. Couldn't figure out a way to stop
      // fetching of data on server side, hence, leaving it like this
      // TODO: Handle localforage error cases
      return;
    }
    const { jwt } = value;
    try {
      response = await fetchApi(`/courses/${exerciseId}/solution`,
        {},
        { Authorization: jwt }
      );
    } catch (e) {
      // TODO: Handle network error cases
      return;
    }

    const exerciseSolution = response[0].solution.replace(/```ngMeta[\s\S]*?```/, "");

    this.setState({
      solution:exerciseSolution
    });
  }

  render() {
    const { solution } = this.state;
    return (
      <div>
        <Header />
        <SolutionDetail solution={solution} />
      </div>
    );
  }
}

export default withRoot(withRouter(Solution));
