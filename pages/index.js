import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { FaInstagram, FaGithub } from "react-icons/fa";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <ul className={`${utilStyles.list} ${utilStyles.horizontalList}`}>
          <li>
            <Link href="#">
              <FaInstagram /> Instagram{" "}
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaGithub /> Github{" "}
            </Link>
          </li>
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Anton. I'm a fullstack developer and illustrator. Sometimes a
          En/Ru/Jp translator as well. It's me who translated
          <a href="https://www.systemax.jp/en/sai/">
            {" "}
            Easy Paint Tool SAI
          </a>{" "}
          into Russian.
        </p>
      </section>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>My projects</h2>
        <ul>
          <div className={homeStyles.card}>
            <Link href="#">Power of habits</Link>
            <br />
            <small className={utilStyles.lightText}>
              A web app that helps to keep you following your goals in life
            </small>
          </div>
          <div className={homeStyles.card}>
            <Link href="#">My art store</Link>
            <br />
            <small className={utilStyles.lightText}>
              Stickers, Posters, etc., made by me, in a web shop, made by me
            </small>
          </div>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
