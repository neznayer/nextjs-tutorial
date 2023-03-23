import styles from "./project-card.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FaGithub, FaPalette } from "react-icons/fa";

export default function ({ title, description, link, githubLink }) {
  return (
    <div className={styles.card}>
      <Link href={link} target="_blank">
        {title}
      </Link>
      <br />
      <small className={utilStyles.lightText}>{description}</small>
      <small className={styles["bottom-right-container"]}>
        <span className=" flex flex-col items-center">
          <FaGithub />
          <Link href={githubLink} className="block" target="_blank">
            Source code
          </Link>
        </span>
      </small>
    </div>
  );
}
