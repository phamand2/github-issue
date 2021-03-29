import Moment from "react-moment";
import { Link } from "react-router-dom";
import styles from "./Issues.module.css";

const Issues = ({ issue }) => {


  return (
    <div className={styles.container}>
      <Link  className={styles.title} to={issue.url}>
        <p>{issue.title}</p>
      </Link>
      <div>
        <small>#{issue.number}
          {" "}
          open{" "}
          <Moment fromNow>{issue.created_at}</Moment> by {issue.user.login}
        </small>
      </div>
    </div>
  );
};

export default Issues;
