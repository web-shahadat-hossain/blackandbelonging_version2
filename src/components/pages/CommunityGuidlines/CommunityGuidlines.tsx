import { Col, Container, Row } from "react-bootstrap";
import styles from "../TermsOfUse/TermsOfUse.module.scss";
import { SOCIAL_LINKS } from "../../../utils/constant";
import { Link } from "react-router-dom";
import HeadingText from "../../common/HeadingText/HeadingText";
import { Helmet } from "react-helmet";
const CommunityGuidlines = () => {
  return (
    <>
      <Helmet>
        <title>Community Guidelines | Black and Belonging</title>
      </Helmet>
      <section className={styles.page}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles.content}>
                <HeadingText>Community Guidelines</HeadingText>
                <p>Last updated on May 30th, 2022.</p>
                <h4>INTRODUCTION</h4>
                <p>
                  On our platform, you will come across various video links that
                  are posted by our participants and users. We may also allow
                  users to comment on such videos. These videos ought to be
                  educational.
                </p>

                <p>
                  We recognize how important it is for our platform to be a
                  place where people feel empowered to share their videos and to
                  interact with the videos shared by other participants, and we
                  take seriously our role in keeping abuse off our platform.
                  That’s why we’ve developed a set of Community Guidelines that
                  outline what is and is not allowed on our platform. These
                  guidelines are our acceptable use policy. If you come across a
                  content that shouldn’t be on our platform, please report it to
                  us at contact@blackandbelonging.com.
                </p>
                <p>
                  We recommend that you also consult our Terms of Use, for
                  additional information on terms applicable to you when you use
                  our platform.{" "}
                </p>

                <p>
                  By using our website, you agree that you have read and
                  consented to our Community Guidelines, Terms of Use, Privacy
                  Policy and other policies as applicable to you, in their
                  entirety.
                </p>

                <ul>
                  <li>
                    <strong>Content Safety</strong>{" "}
                    <p>
                      Our platform is not a place for antagonistic, explicit,
                      false or misleading, harmful, hateful, or violent content
                      or behaviour. We may remove, limit, or block the
                      distribution of such content and the accounts, that create
                      or spread it.
                    </p>
                  </li>

                  <li>
                    <strong>
                      COVID-19: Community Guidelines Updates and Protections:{" "}
                    </strong>
                    As people around the world confront this unprecedented
                    public health emergency, we want to make sure that our
                    Community Guidelines protect people from harmful content and
                    new types of abuse related to COVID-19. We’re working to
                    keep our site free of content that has the potential to
                    contribute to real-world harm, including through
                    misinformation that contributes to the risk of imminent
                    violence or physical harm.{" "}
                  </li>

                  <li>
                    <strong>Hateful Activities</strong>{" "}
                    <p>
                      Our platform isn’t a place for hateful content or the
                      people and groups that promote hateful activities. We
                      limit the distribution of or remove such content and
                      accounts, including:
                    </p>
                    <ul>
                      <li>
                        Slurs or negative stereotypes, caricatures and
                        generalizations;
                      </li>
                      <li>
                        Support for hate groups and people promoting hateful
                        activities, prejudice and conspiracy theories;
                      </li>
                      <li>
                        Condoning or trivializing violence because of a victim’s
                        membership in a vulnerable or protected group;
                      </li>
                      <li>
                        Support for white supremacy, limiting women’s rights and
                        other discriminatory ideas;
                      </li>
                      <li>
                        Hate-based conspiracy theories and misinformation;
                      </li>
                      <li>
                        Denial of an individual’s gender identity or sexual
                        orientation, and support for conversion therapy and
                        related programs;
                      </li>
                      <li>
                        Attacks on individuals including public figures based on
                        their membership in a vulnerable or protected group;
                      </li>
                      <li>
                        Mocking or attacking the beliefs, sacred symbols,
                        movements, or institutions of the protected or
                        vulnerable groups.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Misinformation</strong>{" "}
                    <p>
                      Our platform isn’t a place for misinformation,
                      disinformation, mal-information or the individuals
                      spreading or creating it. We remove or limit distribution
                      of false or misleading content that may harm our users or
                      the public’s well-being, safety or trust, including:
                    </p>
                    <ul>
                      <li>
                        Medically unsupported health claims that risk public
                        health and safety, including the promotion of false
                        cures, anti-vaccination advice, or misinformation about
                        public health or safety emergencies;
                      </li>
                      <li>
                        False or misleading content about individuals or
                        protected groups that promotes fear, hate or prejudice;
                      </li>
                      <li>
                        False or misleading content that encourages turning
                        individuals, groups of people, places or organizations
                        into targets of harassment or physical violence;
                      </li>
                      <li>Conspiracy theories;</li>
                      <li>
                        Content that originates from disinformation campaigns;
                      </li>
                      <li>
                        Factual information that’s published or deliberately
                        modified to erode trust or inflict harm, such as
                        changing or omitting of context, date or time;
                      </li>
                      <li>
                        Fabricated or meaningfully manipulated visual or audio
                        content that erodes trust or causes harm;
                      </li>
                      <li>
                        False or misleading content that impedes an election’s
                        integrity or an individual’s or group’s civic
                        participation, including registering to vote, voting and
                        being counted in a census;
                      </li>
                      <li>
                        False or misleading information about the dates, times,
                        locations and procedure for voting or census
                        participation;
                      </li>
                      <li>
                        Content that misleads voters about how to correctly
                        fill-out and submit a ballot, including a mail-in
                        ballot, or census form;
                      </li>
                      <li>
                        False or misleading information about who can vote or
                        participate in the census and what information must be
                        provided to participate;
                      </li>
                      <li>
                        False or misleading statements about who is collecting
                        information and/or how it will be used;
                      </li>
                      <li>
                        False or misleading information about public safety that
                        is intended to deter people from exercising their right
                        to vote or participate in a census;
                      </li>
                      <li>
                        Content that encourages or instructs voters or
                        participants to misrepresent themselves or illegally
                        participate;
                      </li>
                      <li>
                        Threats against voting locations, census or voting
                        personnel, voters or census participants, including
                        intimidation of vulnerable or protected group voters or
                        participants.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Harassment and Criticism</strong>
                    <p>
                      Our platform isn’t a place to insult, hurt or antagonize
                      individuals or groups of people. There are good reasons to
                      express criticism, but we may limit the distribution of or
                      remove insulting content to keep our platform a positive
                      place. This includes:
                    </p>

                    <ul className="inner-ul">
                      <li>Manipulated images intended to degrade or shame;</li>
                      <li>
                        Shaming people for their bodies or assumed sexual or
                        romantic history;
                      </li>
                      <li>
                        Sexual remarks about people’s bodies and solicitations
                        or offers of sexual acts;
                      </li>
                      <li>
                        Criticisms involving name-calling, profanity and other
                        insulting language or imagery;
                      </li>
                      <li>
                        Mocking someone for experiencing sadness, grief, loss or
                        outrage.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Private Information</strong>
                    <p>
                      We don’t allow content that reveals personal or sensitive
                      information. We remove:
                    </p>
                    <ul className="inner-ul">
                      <li>Personal ID and passport information;</li>
                      <li>Private contact information and addresses;</li>
                      <li>Online login information;</li>
                      <li>
                        Photos of private people that they don’t want posted
                        online;
                      </li>
                      <li>Personal financial or medical history.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Self-injury and Harmful Behaviour</strong>{" "}
                    <p>
                      Our platform isn’t a place for content that displays,
                      rationalizes or encourages suicide, self-injury, eating
                      disorders or substance abuse. We’ll limit the distribution
                      of or remove such content, including:
                    </p>
                    <ul className="inner-ul">
                      <li>Self-harm instructions;</li>
                      <li>Suicidal thinking;</li>
                      <li>
                        Graphic or otherwise triggering imagery or descriptions
                        of self-harm;
                      </li>
                      <li>Promotion of self-harm;</li>
                      <li>
                        Mocking of people who self-harm or who have attempted or
                        died by suicide;
                      </li>
                      <li>Images of accessories used to self-harm;</li>
                      <li>
                        Negative self-talk and insensitive humor about
                        self-harming behavior.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Graphic Violence and Threats</strong>
                    <p>
                      Our platform isn’t a place for graphic violence or
                      threatening language. We limit the distribution of or
                      remove such content, including:
                    </p>
                    <ul className="inner-ul">
                      <li>
                        Grossly disturbing scenes from before or after violent
                        events
                      </li>
                      <li>Threats or language that glorifies violence</li>
                    </ul>
                  </li>

                  <li>
                    <strong>
                      Harmful or Deceptive Products &amp; Practices
                    </strong>
                    <p>
                      Our platform isn’t a place for practices and products that
                      may be harmful or deceptive. We limit the distribution of
                      or remove such content and accounts, including, but not
                      limited to:
                    </p>

                    <ul className="inner-ul">
                      <li>
                        Instructions and products for hacking or breaching
                        security measures;
                      </li>
                      <li>Online gambling and lotteries;</li>
                      <li>Counterfeit documents;</li>
                      <li>Privacy violating products or services;</li>
                      <li>Exploitative financial practices.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Impersonation</strong>
                    <p>
                      We don’t allow accounts that impersonate or misrepresent
                      their affiliation with any person or organization. If you
                      have a fan or commentary account for a public figure or
                      brand, make it clear through your username or profile that
                      you aren’t officially affiliated with them.
                    </p>
                  </li>

                  <li>
                    <strong>Comments</strong>
                    <p>
                      All of our Community Guidelines apply in the comments
                      posted on the platform. In addition, comments should be
                      relevant. We may remove comments that violate our
                      guidelines, including those that contain:
                    </p>
                    <ul className="inner-ul">
                      <li>Irrelevant or non-purposeful material;</li>
                      <li>Spam;</li>
                      <li>Sexually explicit content;</li>
                      <li>Self-harm content;</li>
                      <li>Misinformation;</li>
                      <li>Hateful activities;</li>
                      <li>Harassment or privacy violations;</li>
                      <li>Copyright or trademark infringement.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Intellectual Property and other rights</strong>
                    <p>
                      We take intellectual property rights seriously and believe
                      they are important to promoting expression, creativity,
                      and innovation on our platform. You own all of the content
                      and information you post on the platform. However, before
                      sharing content on the platform, please be sure you have
                      the right to do so. We ask that you respect other people’s
                      copyrights, trademarks and other legal rights. We are
                      committed to helping people and organizations promote and
                      protect their intellectual property rights.
                    </p>
                    <p>
                      Our Terms does not allow people to post content that
                      violates someone else’s intellectual property rights,
                      including copyright and trademark.{" "}
                    </p>
                  </li>

                  <li>
                    <strong>Follow the Law</strong>
                    <p>
                      Our platform is not a place to support or praise
                      terrorism, organized crime, or hate groups. Offering
                      sexual services, buying or selling firearms, alcohol, and
                      tobacco products between private individuals, and buying
                      or selling illegal or prescription drugs (even if legal in
                      your region) are also not allowed.{" "}
                    </p>

                    <p>
                      We have zero tolerance when it comes to sharing sexual
                      content involving minors or threatening to post intimate
                      images of others.
                    </p>
                  </li>

                  <li>
                    <strong>Platform Security </strong>
                    <p>To protect our platform, we ask that you please:</p>

                    <ul className="inner-ul">
                      <li>
                        Don’t access, use or tamper with our systems or our
                        technical providers’ systems;
                      </li>
                      <li>
                        Don’t break or circumvent our security measures or test
                        the vulnerability of our systems or networks;
                      </li>
                      <li>
                        Don’t use any undocumented or unsupported method to
                        access, search, scrape, download or change any part of
                        the Site;
                      </li>
                      <li>Don’t try to reverse engineer our software;</li>
                      <li>
                        Don’t try to interfere with people on the platform or
                        our hosts or networks, like sending a virus,
                        overloading, spamming or mail-bombing;
                      </li>
                      <li>
                        Don’t collect or store personally identifiable
                        information from the platform or people on the platform
                        without permission; Don’t share your password, let
                        anyone access your account or do anything that might put
                        your account at risk;
                      </li>
                      <li>
                        Don’t attempt to buy or sell access to your account,
                        boards, or usernames, or otherwise transfer account
                        features for compensation.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Spam</strong>
                    <p>
                      We want the content and messages on the platform to be
                      high-quality and useful, so we remove spam when we find
                      it. We ask that you be considerate of others’ experiences
                      on the platform and don’t spread spam or engage in spammy
                      behaviour.
                    </p>
                  </li>
                </ul>

                <h4>Our guidelines around spam are:</h4>

                <ul className="inner-ul">
                  <li>
                    Don’t use automation that hasn’t been explicitly approved by
                    us. This includes unauthorized services that automatically
                    perform actions on your behalf;
                  </li>
                  <li>
                    Don’t create or operate accounts that aren’t authentic,
                    create accounts en masse, or create new accounts for the
                    purpose of violating these guidelines;
                  </li>
                  <li>
                    Don’t create or save content that is repetitive, deceptive,
                    or irrelevant in an attempt to make money;
                  </li>
                  <li>
                    Don’t link to websites that are unsafe, deceptive,
                    untrustworthy, unoriginal, or that facilitate or encourage
                    spam;
                  </li>
                  <li>
                    Don’t make repetitive or irrelevant comments. Comments
                    should be authentic and original. We also ask that you be
                    kind to others by keeping your commentary respectful and
                    constructive;
                  </li>
                  <li>
                    Don’t operate multiple accounts or coordinate with other
                    people with the purpose of manipulating the platform;
                  </li>
                  <li>
                    Don’t use any other unscrupulous tactics to attempt to
                    improperly influence distribution, clicks, or other metrics,
                    including: buying or selling engagement, “stuffing”
                    irrelevant keywords, generating inauthentic traffic;
                  </li>
                  <li>Don’t attempt to evade our anti-spam systems. </li>
                </ul>

                <h4>Contacting Us</h4>

                <p>
                  If you have any questions about these Community Guidelines, or
                  if you would like to report a violation, please contact us
                  at&nbsp;
                  <Link to={`mailto:${SOCIAL_LINKS.MAIL}`}>
                    {SOCIAL_LINKS.MAIL}
                  </Link>
                  .
                </p>
                <br />
                <p>Thank you,</p>

                <h3>
                  <>Black and Belonging</>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CommunityGuidlines;
