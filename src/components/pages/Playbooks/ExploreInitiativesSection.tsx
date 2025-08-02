// ExploreInitiativesSection.js
import { useState } from "react";
import styles from "./style/ExploreInitiativesSection.module.css";
import TabContent from "./TabContent";
import EngagementCards from "./EngagementCards";

// Dummy data for tab content
const tabData = {
  "Leveling the Playing Field": {
    imageUrl:
      "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752434853/Screenshot_15_wegst1.png", // Your provided image for this tab
    title: "Leveling the Playing Field",
    description: `<div><p >We live in a society where youth have little say in policies that impact them. By accepting that
<strong>youth are experts of their own experiences,</strong> we can come to appreciate that youth deserve
to voice their perspectives, and that by doing so, they help adults address their own blind
spots and incomplete appraisals for situations and issues that youth encounter. When we
recognize their expertise, we can be open to developing more effective and relevant solutions
in areas that directly affect their well-being, self-worth, physical safety, and belonging.
By valuing their voices and including them in decision-making processes, we can foster
environments that are more responsive to their needs and aspirations.</p>
<p style="margin-top:10px"><b>Pay them.</b> Many of the youth we engage with in community-based leadership opportunities
are sacrificing time that they might otherwise spend in part-time jobs. Is their time valuable and
worth paying for? If not, why not? Among the forms of payment we use are stipends, meals,
merchandise, exclusive access to trips, networking events, and other agreed-upon forms of
payment.</p>

<h3 style="  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem 0;  color: #f5f5f5;">Communal State of Mind: An Overarching Philosophy</h3>
<p>Our team developed a communal-engagement model (Gray et al., 2023) that helps us ground
our work with youth. We believe this communal state of mind will help other youth-serving
teams and organizations successfully collaborate with young people, and will improve
outcomes such as engagement, confidence, leadership skills, teamwork, professionalism,
and community impact. Here are some guiding questions to consider as teams design their
approach to supporting youth-led initiatives: </p>
</div>`,
  },
  "Match My Energy": {
    imageUrl:
      "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752435203/Screenshot_17_sf0s4l.png",
    title: "Energizing Youth to Lead",
    subtitle:
      "Culturally informed motivation strategies are key to successful youth leadership.",
    description: `<div> <p>This play explores strategies to help you coach, mentor, and build power with youth leaders for
cultivating a dynamic, engaging, and effective environment where youth set the pace and take
the lead. We hope it will help you understand why it’s crucial to position youth at the forefront
of leadership and enable you to follow their energy as you support their rise to the top.</p> 
<p style="margin-top:10px">We believe that our youth hold rich cultural knowledge, skills, experiences and perspectives
that must be honored and affirmed. To win this game we must effectively harness the energy,
creativity, and enthusiasm of young leaders.</p>
<h3 style="  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem 0;  color: #f5f5f5;">Building Power with Youth</h3>
  <p>Switch your frame of thinking from merely empowering youth to actively building power with
youth. Whereas empowering suggests giving power to someone, building power with
emphasizes an approach in which power is co-created, resulting in a deeper, more
collaborative and equitable approach. It helps ensure that youth are active participants in
shaping their futures—enhancing their engagement, and fostering sustainable and just
outcomes. </p>
</div>`,
  },
  "Quality Engagement Over Quantity Engagement": {
    imageUrl:
      "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752676991/Screenshot_18_csc7az.png",
    title: "Quality Over Quantity",
    subtitle: "Deepening Impact, Not Just Reach",
    description:
      "Focusing on the depth and meaningfulness of engagement rather than just the number of participants or events. This involves creating experiences that truly resonate with youth, allowing for deeper learning, genuine voice, and lasting impact on both individuals and the community.",
  },
  "Finding Time to Find Time": {
    imageUrl:
      "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752678834/Screenshot_21-removebg-preview_tpkhuq.png",
    title: "Finding Time to Find Time",
    subtitle: "Strategic Planning and Resource Allocation",
    description: `<div> <p>In sporting competitions, each team is focused on finding a way to win in the (often) finite
amount of time allotted for the game. While working with youth, we learned that we had to take
the time to find time in creative and nontraditional ways. Although we considered designing
after-school initiatives, many of our young people told us they wouldn’t be able to participate
because they already had other commitments and interests—including sports, band practice,
and community activities like church; others couldn’t stay after school because they had no ride
to get home. And our youth collaborators made it clear: If the choice was between working on
youth-led meetings or events and going to practice for sports, usually it was sports that would
come out on top</p>
<h3 style="  font-size: 1.8rem;
  font-weight: bold;
  margin: 1rem 0;  color: #f5f5f5;"></h3>
  <p> So, clearly we needed to find a way to find time for our program during the school day.
That would be a win: win—no scheduling conflicts and no need for transportation. </p>
</div>`,
  },
  "Allow Stuc": {
    // "Allow Stuc" looks like a truncated word, assuming it's "Allow Structure" or similar
    imageUrl:
      "https://res.cloudinary.com/dpcxwe6gm/image/upload/v1752433170/IMG_2709_e0m2eq.png",
    title: "Allow Structure",
    subtitle: "Empowering Youth Through Clear Frameworks",
    description:
      "Discussing the importance of providing youth with clear guidelines, roles, and support structures without stifling their creativity or ownership. It emphasizes a balance between guidance and autonomy in youth-led projects.",
  },
};

const ExploreInitiativesSection = () => {
  const [activeTab, setActiveTab] = useState("Leveling the Playing Field");

  return (
    <section className={styles.exploreSection}>
      <h2 className={styles.mainHeading}>EXPLORE INITIATIVES</h2>
      <p className={styles.mainSubheading}>
        Browse Youth-Led Actions Making A Real Impact In Schools And Communities
      </p>

      <div className={styles.tabsContainer}>
        {Object.keys(tabData).map((tabName) => (
          <button
            key={tabName}
            className={`${styles.tabButton} ${
              activeTab === tabName ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>

      <TabContent content={tabData[activeTab]} />

      <EngagementCards />
    </section>
  );
};

export default ExploreInitiativesSection;
