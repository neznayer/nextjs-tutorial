import styles from "./project-card.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ({ title, description, link, githubLink }) {
  return (
    <div className={styles.card}>
      <Link href={link}>{title}</Link>
      <br />
      <small className={utilStyles.lightText}>{description}</small>
      <small className={styles["bottom-right-container"]}>
        <span>
          <FaGithub />
          <Link href={githubLink}> Source code</Link>
        </span>
      </small>
    </div>
  );
}
