import styles from "./style/EngagementCards.module.css";

const EngagementCards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Who are the members of your tribe?",
      description:
        "List the people you already work with/anticipate partnering with who would likely welcome youth leadership .",
      link: "#",
      img: "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752433361/image_4_x3jm9s.png",
    },
    {
      id: 2,
      title: "Characteristics of collaborators:",
      description:
        ": List some skills, attributes, mentorship/facilitator experience they possess that will best align your program’s goals",
      link: "#",
      img: "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752433361/image_4_x3jm9s.png",
    },
    {
      id: 3,
      title: "Auditing and contextualization:",
      description:
        ": What are the social, organizational, temporal, and geographical contexts that may influence how you work with youth researchers? ",
      link: "#",
      img: "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752433361/image_4_x3jm9s.png",
    },
  ];
  // const data = ` <div style=" display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem 1rem;">
  //       <div style="  box-shadow: inset 0 1px 5px rgba(189, 189, 189, 0.1); width: 100%;  border-radius: 0.75rem;  padding: 2.5rem;">

  //           <!-- Section: Remixing Current Course Offerings -->
  //           <div style=" background-color: rgba(
  //   255,
  //   255,
  //   255,
  //   0.1
  // ); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); margin-bottom: 2.5rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
  //               <h2 style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; color: #d97706; margin-bottom: 1.5rem;">
  //                   Remixing Current Course Offerings
  //               </h2>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left;">
  //                   We met with the leadership at one of the schools we partner with to discuss our vision for enhancing student belonging and explained that a lot of the students would participate if they only had the time. Recognizing how important our program could be, they offered us time within the normal school day during one elective section a week so that our meetings would function just like any another class. Soon our program became emmeshed within the school community, which helped us gain the support of and participation by other leadership team members and staff during hours in which they were already paid to be in the building.
  //               </p>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left; margin-top: 1rem;">
  //                   Thus, our youth-led initiatives met in their regular assigned classroom. Although the students were missing academic class time and work, by participating in our program they were being held accountable for it. The youth saw this opportunity as a privilege and took their responsibility seriously, and there was still time for their regular classwork four times a week.
  //               </p>
  //               <div style="margin-top: 1.5rem; width: 100%; text-align: left;">
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #16a34a; font-weight: 600;">
  //                       B & B (Black and Belonging Viewpoint):
  //                   </p>
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; margin-left: 1rem;">
  //                       Once young people see the benefits of the program and what they can gain from being involved, it drums up interest in joining or supporting the work. Participating in this type of program also spreads awareness of and engenders positive publicity about the school. For example, our youth presented at the AERA (American Educational Research Association) conference in Philadelphia, and proudly told participants they encountered where they were from. They became brand ambassadors not only for themselves and for our youth-led initiatives, but also for their schools and hometowns. The young people we work with are well aware of the negative narratives about other kids who look like them and who are from places similar to their communities. Their presence at AERA allowed them to paint a fuller picture of their school than the one provided by the school’s accountability report card—based on positivity and their academic excellence, professionalism, impact, and advanced learning opportunities.
  //                   </p>
  //               </div>
  //           </div>

  //           <!-- Section: Outside of Class but Still Inside School -->
  //           <div style=" background-color: rgba(
  //   255,
  //   255,
  //   255,
  //   0.1
  // ); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); margin-bottom: 2.5rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
  //               <h2 style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; color: #9333ea; margin-bottom: 1.5rem;">
  //                   Outside of Class but Still Inside School
  //               </h2>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left;">
  //                   Many of our youth collaborators were deeply invested in working on our projects and its potential for impacting the school. They therefore wished they could meet more often. They wanted more time to be together to work on their ideas, tackle larger projects, learn more about business, and tap into their creativity through their clothing designs. They also asked for academic responsibility—including enabling more students to participate through teacher recommendations, initiating a grade requirement, and incorporating some of the topics and themes already being taught in their academic classrooms into their initiatives. The students also wanted to feel that their work with us was significantly connected to the school—so that teachers would not only be supportive of the program but would, along with the rest of the school community, recognize the program as not just at the school but as a part of the school.
  //               </p>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left; margin-top: 1rem;">
  //                   The schools already had blocks of time carved out for certain parts of the day, such as for academic remediation and club activities. For those students who didn’t need academic remediation, this time was more loosely structured. We approached the teachers about the possibility of letting us work with students during that block of time. We got their permission. Soon we were engaging with youth who were conducting research such as focus groups and surveys, working on event leadership and logistics, and rehearsing presentations for national conferences and to their administrators. We could use this extra time more flexibly.
  //               </p>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left; margin-top: 1rem;">
  //                   Our team didn’t always have to split up by grade level according to the weekly elective-period bell schedule, and we provided more individualized support to smaller groups.
  //               </p>
  //               <div style="margin-top: 1.5rem; width: 100%; text-align: left;">
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #16a34a; font-weight: 600;">
  //                       B & B (Black and Belonging Viewpoint):
  //                   </p>
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; margin-left: 1rem;">
  //                       The skills and experiences our youth gain through our youth-led initiatives translates into more energy, confidence, interest, and success in their academic subjects. Additionally, programs like ours create opportunities to display youth leadership in action. For example, our young people were directly involved in all stages of the planning, preparing, promoting, and hosting of each initiative they have led. Afterward, they told us that being positioned to lead their peers enabled them to use their voice, and that the adults supporting their public showcases clearly heard their inputs and ideas, trusting them to be in charge and to take ownership of the event. Their engagement included demonstrating leadership, collaborating, thinking critically, showing initiative, and tapping into their creativity—all 21st-century skills that schools aim to help students achieve. When it comes to preparing young people for their futures, schools and programs like ours are working toward the same goal: supporting and encouraging our youth in developing these skills.
  //                   </p>
  //               </div>
  //           </div>

  //           <!-- Section: Working Outside of School -->
  //           <div style=" background-color: rgba(
  //   255,
  //   255,
  //   255,
  //   0.1
  // ); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); display: flex; flex-direction: column; align-items: center; text-align: center;">
  //               <h2 style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; color: #0369a1; margin-bottom: 1.5rem;">
  //                   Working Outside of School
  //               </h2>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left;">
  //                   As top athletes know, skill work—personalized training sessions that focus on specific skill development—helps bridge the gap between practice and game application. Most skill work takes place outside of practice time off the field. We found that when the skill work centers around the voices and interests of youth, they are excited about continuing the work even when it spills into their time outside of school. We discussed the idea with them about holding workshops off campus, and after getting the thumbs up, we set about looking into where we might hold the sessions and how we would find the time.
  //               </p>
  //               <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; text-align: left; margin-top: 1rem;">
  //                   We consulted the district schedule and arranged for the workshops to be hosted either during school breaks or during Teacher Work Days (TWD) when students would already be off. Parents were happy to give permission for the students to participate in these off-campus constructive pursuits, since youth might otherwise just be hanging around and catching up on sleep for the day.
  //               </p>
  //               <div style="margin-top: 1.5rem; width: 100%; text-align: left;">
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #dc2626; font-weight: 600;">
  //                       Opps (Opposing Viewpoint):
  //                   </p>
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; margin-left: 1rem;">
  //                       Time within school should be focused on the academic needs of students.
  //                   </p>
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #16a34a; font-weight: 600; margin-top: 1rem;">
  //                       B & B (Black and Belonging Viewpoint):
  //                   </p>
  //                   <p style="font-size: 1rem; line-height: 1.6; color: #e2e2e2; margin-left: 1rem;">
  //                       Taking time away from regular academic classes for youth-led initiatives can contribute greatly to students’ well-being, and thus increase their desire to be at school and to engage with the school community. Our youth told us that our sessions felt like a safe space and provided a much-needed break from their regular academic day. In addition, confidence gained through their participation in program activities increases their confidence within the classroom.
  //                   </p>
  //               </div>
  //           </div>

  //           <!-- Conclusion Section -->
  //           <footer style="margin-top: 2.5rem; text-align: center; color: #e2e2e2;">
  //               <p style="font-size: 1.125rem; line-height: 1.75rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
  //                   By aligning our support with the interests and enthusiasm of students, we create an environment where our young people felt valued and affirmed. Beyond providing resources, this is about actively participating in and celebrating the students’ journey.
  //               </p>
  //               <p style="margin-top: 1rem; font-size: 1rem; line-height: 1.5rem; max-width: 42rem; margin-left: auto; margin-right: auto;">
  //                   By following youths’ energy, providing essential resources, and fostering a supportive and fun atmosphere, adults can help shape a generation of confident, capable leaders. It’s about recognizing the unique contributions of each student, and creating opportunities that resonate with their passions and interests.
  //               </p>
  //           </footer>
  //       </div>
  //   </div>`;

  const data = ` <div style=" display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem 1rem;">
        <div style=" width: 100%;  border-radius: 0.75rem; box-shadow: inset 0 1px 5px rgba(189, 189, 189, 0.1); padding: 2.5rem;">
            <!-- Header Section -->
            <header style="text-align: center; margin-bottom: 2.5rem;">
                <h1 style="font-size: 3rem; line-height: 1.25; font-weight: 800; color: #ff0066; margin-bottom: 1rem;">
                    Youth Leadership Journeys
                </h1>
                <p style="font-size: 1.25rem; line-height: 1.75rem; color: #c9c9c9; max-width: 50rem; margin-left: auto; margin-right: auto;">
                    This section presents five leadership stories of youths’ journeys while working with us, along with how and why the quality over quantity philosophy we employed positively impacted their sense of connection to the initiatives they led.
                </p>
                <ul style="list-style-type: disc; list-style-position: inside; text-align: left; margin-top: 1.5rem; max-width: 45rem; margin-left: auto; margin-right: auto; color: #c9c9c9; line-height: 1.6;">
                    <li>finding ways to schedule around other valued commitments that occupy youths’ time,</li>
                    <li>identifying ways to continually challenge the same groups of youth with new leadership initiatives over time,</li>
                    <li>valuing the many forms that youths’ contributions may take, and</li>
                    <li>building in ample reflection and planning time so as to be responsive to their suggestions on how working sessions should be structured.</li>
                </ul>
            </header>

            <!-- Story 1: Transitioning to the Off-Season -->
            <div style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); border:1px solid gray; padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); margin-bottom: 2.5rem; display: flex; flex-direction: column; align-items: center; text-align: center;">
                <h2 style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; color: #ff0066; margin-bottom: 1.5rem;">
                    Story 1: Transitioning to the Off-Season
                </h2>
                <img src="https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752677431/Screenshot_19_tusert.png" alt="Malachi's Story Image" style="max-width: 100%; height: auto; border-radius: 0.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left;">
                    We began working with Malachi when he was in the 6th grade after he made an educational video to teach his community about Black sports icons. Malachi is a football player, basketball player, and track and field athlete who is a deep thinker. His teachers describe him as a student who sticks with projects, even when concepts are difficult for him to understand. We invited him and a small group of his peers to spend the summer working with us—turning their educational videos into professional-quality public service announcements that could be displayed publicly and used as an instructional resource for teachers during Black History Month. Malachi worked meticulously to clarify the exact angle he wanted to shoot the video from, and we encouraged him to do so. However, family and athletic commitments prevented him from devoting himself exclusively to our summer institute, and as a result the project never saw the light of day.
                </p>
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left; margin-top: 1rem;">
                    Over the course of middle school Malachi slowly worked his way up within our program—first as a photographer, then at an information table during community events while other students’ completed projects were publicly recognized. By 8th grade, Malachi was a star football athlete who was invited to play in the All-American Middle School football championships. It was clear that we would not be able to engage Malachi deeply in youth-voice initiatives during the Fall semester.
                </p>
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left; margin-top: 1rem;">
                    Spring semester was a different story! Off-season for Malachi’s athletic activities meant in-season for Black and Belonging! So this honor roll student-athlete was all in—engaging in weekly brainstorming sessions for new youth-led initiatives, conducting evaluations of the impact of our previous youth-led initiatives on students’ belonging and engagement, and presenting at conferences across the country to present logic models that teach scholars how to design youth-led initiatives that were similar to the ones he engaged in. By honoring Malachi’s natural rhythm of engagement and availability, and by being creative about ways athletes could be engaged in youth-led initiatives, Malachi’s peers also benefitted—not only from his strong leadership qualities, but also from his example of how life lessons learned in sports can translate into other arenas off the field.
                </p>
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left; margin-top: 1rem;">
                    And Malachi’s rhythm of engagement and availability has had even more far-reaching impacts because it got us thinking about ways other athletes could be engaged in youth-led initiatives in their off season.
                </p>
            </div>

            <!-- Story 2: Investing in the Franchise Player -->
            <div style="box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); border:1px solid gray;  padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); display: flex; flex-direction: column; align-items: center; text-align: center;">
                <h2 style="font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; color: #ff0066; margin-bottom: 1.5rem;">
                    Story 2: Investing in the Franchise Player
                </h2>
                <img src="https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752677610/Screenshot_20_dmvn5e.png" alt="Mikal's Story Image" style="max-width: 100%; height: auto; border-radius: 0.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left;">
                    While Mikal was in high school, he was undoubtedly the franchise player for our youth-led initiatives. His exceptional ability to articulate and clarify the larger vision and purpose behind his projects, coupled with his high ambitions, quickly positioned him as the face of several projects. After presenting at a national research conference, many of the adult attendees seemed to empathize with his gripes about learning how to use a statistical package to analyze his research data. Upon arriving home Mikal asked us to mentor him and help deepen his data analysis of schools to better position himself as a professional on research related to youth. An avid follower of Internet sensation media mogul and speaker Gary Vee (Gennady Alexandrovich Vaynerchuk), Mikal studied his videos, which inspired him to upgrade his public speaking skills. Soon he was the opener at our public speaking events. Mikal, with his passion and charm, not only immediately engages his audience but also paves the way for his peers by warming up the crowd—imbuing them with more confidence to speak.
                </p>
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left; margin-top: 1rem;">
                    Clearly, we needed to support Mikal’s ambition with resources to help him advance, including access to technology and software to engage in research activities, professional photos for the speaking engagements, and award profiles, as well as personal introductions to world-renowned education scholars from schools including the University of Southern California; Teachers College, Columbia University; The Ohio State University; and the University of Michigan.
                </p>
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left; margin-top: 1rem;">
                    His desire to always go above and beyond what his project activities call for embodies what we want to do for all our youth: support them in developing into leaders who achieve scholastically in ways that also elevate their culture and community. Mikal attracted more students and more attention in general to our youth-led activities. And in turn we supported his professional presence, leveraged our network, and endorsed him for jobs and college admissions.
                </p>
                <p style="font-size: 1rem; line-height: 1.6; color: #c9c9c9; text-align: left; margin-top: 1rem;">
                    It came as no surprise to us that Mikal was recruited for a full ride by nationally recognized and highly selective research universities.
                </p>
            </div>

        </div>
    </div>`;

  return (
    <div className={styles.engagementSection}>
      {/* <div className={styles.leftColumn}>
        <h2>HOW DOES YOUR TEAM ENGAGE WITH YOUTH?</h2>
        <p>
          Although There Are Many Ways That Teams Engage Youth In Leadership
          Initiatives, We Found The Following Three Practices To Be Effective In
          Our Work:
        </p>
      </div>
      <div className={styles.rightColumn}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.card}>
            <div>
              <img src={card.img} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <a href={card.link} className={styles.cardButton}>
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: data } as { __html: string }} />
    </div>
  );
};

export default EngagementCards;
