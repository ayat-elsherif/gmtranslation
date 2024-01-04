import { Col, Container, Row } from "react-bootstrap";
import styles from "./allServices.module.scss";

export default function AllServices() {
  return (
    <div className={styles["all_services"]}>
      <Container>
        <Row className="mb-md-4">
          <Col md={6}>
            <h4>Translation</h4>
            <p>
              We have a deep understanding of the importance of accurate and
              culturally sensitive translations, we are confident in our ability
              to provide high-quality and reliable translation services tailored
              to your specific needs. • Our team has extensive experience in
              translation within the fields of medicine, science and life
              sciences, as well as in the legal and technical domains.
            </p>
          </Col>
          <Col md={6}>
            <h4>Proofreading</h4>
            <p>
              Our team carefully reviews and edits the translated documents to
              identify and correct errors in grammar, punctuation, spelling, and
              style. Additionally, we ensure that the translated document is
              free from mistakes, catching any typographical errors, formatting
              issues, or inconsistencies that may have been overlooked during
              earlier translation and editing stages. This enhances the overall
              quality and clarity of the translated content.
            </p>
          </Col>
        </Row>
        <Row className="mb-md-4">
          <Col md={6}>
            <h4>Desktop Publishing Services (DTP)</h4>
            <p>
              We offer Desktop Publishing Services (DTP), which encompass the
              creation and layout of documents for print or digital distribution
              using specialized software. Our services include the design and
              formatting of text, images, and graphics, resulting in visually
              appealing and professionally formatted materials. we ensure these
              aspects - Page Layout, Graphics Integration, Color Management,
              Formatting, Print Preparation, and Document Localization - are
              matched to the original translated document.
            </p>
          </Col>
          <Col md={6}>
            <h4>Machine Translation Post-Editing (MTPE) services</h4>
            <p>
              We offer Machine Translation Post-Editing (MTPE) services,
              encompassing the review and refinement of content initially
              translated by machine translation (MT) systems. Our MTPE service
              process includes Review, Correction, Quality Enhancement,
              Consistency Checks, Efficiency and Cost-Effectiveness and
              Customization according to Post-Editing Guidelines.
            </p>
          </Col>
        </Row>
        <Row className="mb-md-4">
          <Col md={6}>
            <h4>Transcription</h4>
            <p>
              Our services include transcription, involving the conversion of
              spoken language into written text. This service is essential for
              various industries, including media, legal, medical, and academic
              fields. Within our transcription process, we offer Audio to Text
              Conversion, Verbatim Transcriptions and Specialized Transcription
            </p>
          </Col>
          <Col md={6}>
            <h4>Transcreation</h4>
            <p>
              We offer Transcreation services, where we creatively adapt content
              from any language into Arabic. Through meticulous rewriting,
              reimagining, or adapting, we ensure the preservation of the
              intended message, tone, style, and context. Our goal is to evoke
              the same response in the target audience as the original content
              did in its source audience.
            </p>
          </Col>
        </Row>
        <Row className="mb-md-4">
          <Col>
            {" "}
            <h4>Content creation</h4>
            <p>
              We offer content creation services across various fields, with a
              specialized focus on the medical and scientific domains. Our
              content creation process encompasses the following stages:
            </p>
            <ol>
              <li>
                {/* <span className={styles["numbering"]}>1</span> */}
                <span>
                  <strong>Strategic Planning: </strong> Defining goals, target
                  audience, and the message or information to be conveyed.
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <strong>Research:</strong>
                  Gathering accurate and relevant information.
                </span>
              </li>
              <li>
                <span>
                  <strong>Idea Generation:</strong>
                  Generating ideas and concepts for the content, considering
                  creativity, originality, and alignment with the intended
                  purpose.
                </span>
              </li>
              <li>
                <span>
                  <strong>Writing:</strong> Creating articles, blog posts, copy,
                  or other written material.
                </span>
              </li>
              <li>
                <span>
                  <strong>Visual Design: </strong> Creating graphics, images, or
                  other visual elements to enhance the overall appeal and
                  engagement of the content.
                </span>
              </li>
              <li>
                <span>
                  <strong>Multimedia Integration:</strong> Incorporating
                  multimedia elements such as videos, podcasts, or interactive
                  features.
                </span>
              </li>
              <li>
                <span>
                  <strong>Quality Assurance:</strong>
                  Ensuring the content is free from errors, maintaining a
                  consistent style, and aligning with grammatical and language
                  standards.
                </span>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
