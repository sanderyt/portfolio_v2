import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCertificate,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";

import { Layout } from "../components/UI/Layout";
import { Experience } from "../components/UI/Experience";
import { Header } from "../components/UI/Header";

const Resume = () => {
  return (
    <Layout>
      <Header title="Resume" />
      <div className="resume">
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          Experience
        </h2>
        <Experience
          title="Front-end developer"
          company="Incentro"
          date="2019 - now"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni
          mollitia, aspernatur consequatur accusamus vero eum facere
          exercitationem velit suscipit ipsam placeat libero. Deleniti
          exercitationem nostrum quasi. Molestiae, vel porro.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quas, magni mollitia,
          aspernatur consequatur accusamus vero eum facere exercitationem velit
          suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi.
          Molestiae, vel porro.
        </Experience>
        <Experience
          title="Internet entrepreneur"
          company="Sanvar"
          date="2014 - now"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni
          mollitia, aspernatur consequatur accusamus vero eum facere
          exercitationem velit suscipit ipsam placeat libero. Deleniti
          exercitationem nostrum quasi. Molestiae, vel porro.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quas, magni mollitia,
          aspernatur consequatur accusamus vero eum facere exercitationem velit
          suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi.
          Molestiae, vel porro.
        </Experience>
        <h2>
          {" "}
          <FontAwesomeIcon icon={faCertificate} />
          Certificates
        </h2>
        <Experience
          title="Advanced React Training"
          company="React/GraphQL Academy"
          date="May 2020"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni
          mollitia, aspernatur consequatur accusamus vero eum facere
          exercitationem velit suscipit ipsam placeat libero. Deleniti
          exercitationem nostrum quasi. Molestiae, vel porro.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quas, magni mollitia,
          aspernatur consequatur accusamus vero eum facere exercitationem velit
          suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi.
          Molestiae, vel porro.
          <button className="btn btn--primary">Check certificate</button>
        </Experience>
        <Experience
          title="Young Professional Academy"
          company="Incentro Nederland"
          date="Nov 2019"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni
          mollitia, aspernatur consequatur accusamus vero eum facere
          exercitationem velit suscipit ipsam placeat libero. Deleniti
          exercitationem nostrum quasi. Molestiae, vel porro.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quas, magni mollitia,
          aspernatur consequatur accusamus vero eum facere exercitationem velit
          suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi.
          Molestiae, vel porro.
        </Experience>
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h2>
        <Experience
          title="MSc Strategic Entrepreneurship"
          company="Erasmus University Rotterdam"
          date="2017 - 2018"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni
          mollitia, aspernatur consequatur accusamus vero eum facere
          exercitationem velit suscipit ipsam placeat libero. Deleniti
          exercitationem nostrum quasi. Molestiae, vel porro.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quas, magni mollitia,
          aspernatur consequatur accusamus vero eum facere exercitationem velit
          suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi.
          Molestiae, vel porro.
        </Experience>
        <Experience
          title="BSc Business Administration"
          company="Erasmus University Rotterdam"
          date="2011 - 2016"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni
          mollitia, aspernatur consequatur accusamus vero eum facere
          exercitationem velit suscipit ipsam placeat libero. Deleniti
          exercitationem nostrum quasi. Molestiae, vel porro.Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quas, magni mollitia,
          aspernatur consequatur accusamus vero eum facere exercitationem velit
          suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi.
          Molestiae, vel porro.
        </Experience>
      </div>
    </Layout>
  );
};

export default Resume;
