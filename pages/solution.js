import React from "react";
import Router, { withRouter } from "next/router";

import Header from '../src/components/header';
import SolutionDetail from '../src/components/exercise-solution/solution-detail'

class Solution extends React.Component {
  constructor() {
    super()
    this.state = {
      solution: ""
    }
  }

  componentDidMount() {
		this.loadSolution();
	}
  async loadSolution(exerciseId) {
		let value;
		let response;
		const { jwt } = value;
		try {
			response = await fetchApi(`/courses/${exerciseId}/solution`, {}, { Authorization: jwt });
      console.log(response)
		} catch (e) {
			// TODO: Handle network error cases
			return e;
		}
    const solution = response.solution.replace(/```ngMeta[\s\S]*?```/, "")
		this.setState({
			solution,
		});
	}

  render() {
    const { solution } = this.state
    return (
      <div>
        <Header />
        <SolutionDetail solution={solution} />
      </div>
    );
  }
}

export default withRoot(withRouter(Solution));
