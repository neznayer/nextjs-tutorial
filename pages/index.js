import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { FaInstagram, FaGithub } from "react-icons/fa";
import ProjectCard from "../components/project-card";
import { getFrontMessage } from "../lib/front";

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData(locale);
  const frontMessage = await getFrontMessage(locale);

  return {
    props: {
      allPostsData,
      frontMessage,
    },
  };
}

export default function Home({ allPostsData, frontMessage }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <ul className={`${utilStyles.list} ${utilStyles.horizontalList}`}>
          <li>
            <Link
              className="flex flex-col items-center"
              href="https://instagram.com/nezneznezneznez"
            >
              <FaInstagram /> Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/neznayer"
              className="flex flex-col items-center"
            >
              <FaGithub />
              <span className="block">Github</span>
            </Link>
          </li>
        </ul>
      </section>
      <section
        className={`${utilStyles.headingMd} pt-4`}
        dangerouslySetInnerHTML={{ __html: frontMessage.contentHtml }}
      ></section>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>My projects</h2>
        <ul className={utilStyles.list}>
          <li>
            <ProjectCard
              title="My art portfolio website"
              link="https://art-portfolio-neznayer.vercel.app/"
              githubLink="https://github.com/neznayer/art-portfolio"
              description="A portfolio page for my drawings"
            />
          </li>
          <li>
            <ProjectCard
              title="Power of habits 🏗️"
              link="https://power-of-habits.vercel.app/"
              githubLink="https://github.com/neznayer/power-of-habits"
              description="A web app that helps to keep you following your goals in life (under construction)"
            />
          </li>
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
