import { Col, Container, Row } from "react-bootstrap";
import styles from "../TermsOfUse/TermsOfUse.module.scss";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../../../utils/constant";
import { Helmet } from "react-helmet";

const DMCANotice = () => {
  return (
    <>
      <Helmet>
        <title>DMCA Notice | Black and Belonging</title>
      </Helmet>
      <section className={styles.page}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.content}>
                <div className="terms-content">
                  <h4>DMCA NOTICE FOR COPYRIGHT CLAIMS</h4>
                  <p>
                    TPursuant to Title II of the DMCA, all claims alleging
                    copyright infringement for material or content that you
                    believe to be residing on our website should be promptly
                    sent in the form of written notice to our designated agent.{" "}
                  </p>

                  <ul>
                    <li>
                      <h4>
                        Designated Agent (the “DMCA Agent”) for DMCA Notices:-
                      </h4>
                      <ul>
                        <li>
                          <strong>Name: </strong> {SOCIAL_LINKS.NAME}
                        </li>
                        <li>
                          <strong>Email: </strong>{" "}
                          <Link to={`mailto:${SOCIAL_LINKS.MAIL}`}>
                            {SOCIAL_LINKS.MAIL}
                          </Link>
                        </li>
                        <li>
                          <strong>Contact: </strong>{" "}
                          <Link to={`tel:${SOCIAL_LINKS.PHONE}`}>
                            {SOCIAL_LINKS.PHONE}
                          </Link>
                        </li>
                      </ul>

                      <p>
                        <i>
                          <strong>Note:</strong> You may not send other notices
                          or communications to the DMCA Agent, who is appointed
                          for the purpose of receiving notices of claims
                          alleging copyright infringement under the DMCA.
                        </i>
                      </p>
                    </li>

                    <li>
                      <strong>Filing a DMCA Notice:</strong>{" "}
                      <p>
                        Specific requirements for proper notification of claimed
                        infringement are set forth in the DMCA (see 17 U.S.C. §
                        512(c)(3)). Valid notification must be a written
                        communication that includes all of the following
                        elements:
                      </p>
                      <ul>
                        <li>
                          Signature of copyright owner or person authorized to
                          act on behalf of the owner;
                        </li>
                        <li>
                          Identification of copyrighted work claimed to be
                          infringed;
                        </li>
                        <li>
                          Identification of the material claimed to be
                          infringing or to be the subject of infringing activity
                          and information reasonably sufficient to permit the
                          service provider to locate the material;
                        </li>
                        <li>
                          Information reasonably sufficient to permit the
                          service provider to contact the complaining party
                          (address, phone number and, if available, email
                          address);
                        </li>
                        <li>
                          A statement that the complaining party has a good
                          faith belief that use of the material in the manner
                          complained is not authorized by the copyright owner,
                          its agent, or the law; and
                        </li>
                        <li>
                          A statement that the information in the notification
                          is accurate, and under penalty of perjury, that the
                          complaining party is authorized to act on behalf of
                          the owner of the exclusive right allegedly being
                          infringed.
                        </li>
                      </ul>
                      <p>
                        It is our policy that, upon receiving of a valid DMCA
                        notice, we will remove or disable access to allegedly
                        infringing material. However, there are substantial
                        penalties for false claims (see 17 U.S.C. § 512(f) –
                        providing sanctions for material misrepresentations of
                        copyright infringement).
                      </p>
                    </li>

                    <li>
                      <strong>Filing a DMCA Counter-Notification: </strong>{" "}
                      <p>
                        If a notice of alleged copyright infringement under the
                        DMCA has been wrongly filed against you, you may submit
                        a counter-notification to our DMCA Agent. Specific
                        requirements for a proper counter-notification are set
                        forth in the DMCA (see 17 U.S.C. § 512(g)(3)).{" "}
                      </p>
                      <p>
                        A valid counter-notification must be a written
                        communication that includes all of the following
                        elements:
                      </p>
                      <ul>
                        <li>A physical or electronic signature;</li>
                        <li>
                          Identification of the material that has been removed
                          or to which access has been disabled and the location
                          at which the material appeared before it was removed
                          or access to it was disabled;
                        </li>
                        <li>
                          A statement under penalty of perjury that you have a
                          good faith belief that the material was removed or
                          disabled as a result of mistake or misidentification;
                          and
                        </li>
                        <li>
                          Your name, address, and telephone number, and a
                          statement that you consent to the jurisdiction of the
                          federal district court for the judicial district in
                          which your address is located, or if your address is
                          outside of the U.S., for any judicial district in
                          which the service provider may be found, and that you
                          will accept service of process from the complainant.
                        </li>
                      </ul>
                      <p>
                        Upon receipt of a valid counter-notification, we will
                        forward it to the original complainant who submitted the
                        DMCA notice alleging copyright infringement. The
                        original complainant will then have ten days to notify
                        us that it has filed a lawsuit relating to the allegedly
                        infringing material otherwise we will restore the
                        removed material or cease disabling access to it.
                      </p>
                    </li>

                    <li>
                      <strong>Repeat Infringer Policy: </strong>{" "}
                      <p>
                        Pursuant to Section 512 of the DMCA, it is our policy to
                        terminate the account of any repeat copyright infringer
                        in appropriate circumstances.
                      </p>
                    </li>

                    <li>
                      <strong>False Claim:</strong>{" "}
                      <p>
                        You could be liable for the punishment for perjury or
                        such other legal recourse if you make false claim
                        alleging copyright infringement.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DMCANotice;
