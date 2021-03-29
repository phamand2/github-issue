import Axios from "axios";
import React, { Component } from "react";
import Issues from "../../components/Issues/Issues";
import styles from './IssueList.module.css'

export default class IssueList extends Component {
  state = {
    issues: [],
  };

  fetchData = async () => {
    const { data } = await Axios.get(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    return data;
  };

  componentDidMount() {
    this.fetchData().then((data) => this.setState({ issues: data }));
  }

  render() {

    const issues = this.state.issues.map((issue) =>  <Issues issue={issue} key={issue.id}/>)


    return <div className={styles.container}>
      {issues}
    </div>;
  }
}
