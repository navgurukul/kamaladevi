import React from "react";
import Router, { withRouter } from "next/router";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import withRoot from '../src/with-root';

import Header from '../src/components/header';
import SolutionDetail from '../src/components/exercise-solution/solution-detail';

import {
  fetchApi,
} from "../src/services/api";

class Solution extends React.Component {
  constructor() {
    super()
    this.state = {
      solution:"hdgffvdhvchgvhgc"
    }
    // console.log(this.state.solution)
  }

  // componentDidMount() {
	// 	this.loadSolution();
	// }
  // async loadSolution() {
  //   let exerciseId = 2032;
	// 	let value;
	// 	let response;
	// 	const { jwt } = value;
	// 	try {
	// 		response = await fetchApi(`/courses/${exerciseId}/solution`, {}, { Authorization: jwt });
  //     console.log(response)
	// 	} catch (e) {
	// 		// TODO: Handle network error cases
	// 		return ;
	// 	}
  //   const solution = response.solution.replace(/```ngMeta[\s\S]*?```/, "")
	// 	this.setState({
	// 		solution
	// 	});
	// }

  render() {
    const { solution } = this.state
    console.log(solution)
    return (
      <div>
        <Header />
        <SolutionDetail solution={solution} />
      </div>
    );
  }
}

export default withRoot(withRouter(Solution));
