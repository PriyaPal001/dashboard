import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.optionList}>
        <Link to="/collectfee" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-money-bill-wave" style={styles.icon}></i>
            <span style={styles.optionText}>Collect Fee</span>
          </li>
        </Link>
        <Link to="/generatereceipts" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-receipt" style={styles.icon}></i>
            <span style={styles.optionText}>Generate Receipts</span>
          </li>
        </Link>

        <Link to="/master" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-table" style={styles.icon}></i>
            <span style={styles.optionText}>Master Tab</span>
          </li>
        </Link>

        <Link to="/logout" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-sign-out-alt" style={styles.icon}></i>
            <span style={styles.optionText}>Logout</span>
          </li>
        </Link>
      </ul>
      <footer style={styles.footer}>
        <p style={styles.footerText}> Ⓒ GetFly Technologies</p>
      </footer>
    </aside>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    backgroundColor: "#f9f9f9",
    padding: "10px 45px",
  },
  optionList: {
    listStyleType: "none",
    padding: 0,
  },
  option: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px 0",
  },
  icon: {
    marginRight: "30px",
    width: "10px",
  },
  optionText: {
    fontSize: "16px",
  },
  footer: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  footerText: {
    fontSize: "12px",
    color: "#666",
    alignSelf: "flex-end",
    marginTop: "400px",
  },
};
