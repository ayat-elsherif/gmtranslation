import { Col, Container, Row } from "react-bootstrap";
import styles from "./ourIndustries.module.scss";
export default function OurIndustries() {
  const allIndustries = [
    {
      number: 1,
      strong: "Medical and Healthcare: ",
      paragraph:
        "medical records, patient communication, clinical trials, pharmaceutical documentation, and healthcare marketing materials.",
    },
    {
      number: 2,
      strong: "Legal: ",
      paragraph:
        "Legal documents, contracts, court proceedings, and internationa.",
    },
    {
      number: 3,
      strong: "Business and Finance:",
      paragraph:
        "financial reports, business contracts, marketing materials, and communication with international clients and partners.",
    },
    {
      number: 4,
      strong: "Technology and IT:",
      paragraph:
        "Software localization, user manuals, technical documentation, and IT support material.",
    },
    {
      number: 5,
      strong: "Marketing and Advertising:",
      paragraph:
        "marketing content, advertisements, and promotional materials.",
    },
    {
      number: 6,
      strong: "Travel and Tourism:",
      paragraph:
        "travel guides, hotel information, websites, and other materials to cater to tourists from different language backgrounds.",
    },
    {
      number: 7,
      strong: "Academic and Research:",
      paragraph:
        "academic publications, research papers, and international collaborations in the academic and scientific communities..",
    },
    // {
    //   number: 8,
    //   strong: "Manufacturing and Engineering:",
    //   paragraph:
    //     "Technical manuals, product specifications, and safety guidelines.",
    // },
    // {
    //   number: 9,
    //   strong: "Entertainment and Media: ",
    //   paragraph:
    //     "subtitling, dubbing, and translating scripts for films, TV shows, and other media content.",
    // },
    // {
    //   number: 10,
    //   strong: "Government and Public Services: ",
    //   paragraph:
    //     "official documents, public service announcements, and communication with diverse linguistic communities.",
    // },
    // {
    //   number: 11,
    //   strong: "E-commerce:",
    //   paragraph:
    //     "product descriptions, user interfaces, customer support, and marketing to reach a global customer base.",
    // },
    // {
    //   number: 12,
    //   strong: "Human Resources:",
    //   paragraph:
    //     "HR policies, training materials, and internal communications to ensure consistency and understanding across diverse teams.",
    // },
    // {
    //   number: 13,
    //   strong: "Nonprofit and NGOs:",
    //   paragraph:
    //     "outreach materials, reports, and communication with communities around the world.",
    // },
  ];
  return (
    <div className={styles["our_industries"]} id="industries">
      <Container>
        <Row>
          <Col>
            <h2 className="main_title">Industries</h2>
            <p>
              Our Translation services covers various industries that heavily
              rely on translation services:
            </p>
            <ol>
              {allIndustries.map((industry) => (
                <li>
                  <span className={styles["numbering"]}>{industry.number}</span>
                  <span>
                    <strong>{industry.strong}</strong>
                    {industry.paragraph}
                  </span>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
