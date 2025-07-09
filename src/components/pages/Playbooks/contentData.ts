// src/data/contentData.js

export const tableOfContents = [
  { id: "purpose", title: "Purpose", page: "p.3" },
  { id: "table-of-contents", title: "Table of Contents", page: "p.4" },
  {
    id: "section-1-leveling-the-playing-field",
    title: "Section 1: Leveling the Playing Field",
    page: "p.5",
  },
  {
    id: "how-does-your-team-engage-with-youth",
    title: "How does your team engage with youth?",
    page: "p.6",
  },
  {
    id: "additional-considerations",
    title: "Additional Considerations",
    page: "p.7",
  },
  {
    id: "section-2-match-my-energy",
    title: "Section 2: Match My Energy",
    page: "p.8",
  },
  {
    id: "energizing-youth-to-lead",
    title: "Energizing Youth to Lead",
    page: "p.9",
  },
  {
    id: "following-the-energy-of-youth",
    title: "Following the Energy of Youth",
    page: "p.10",
  },
  {
    id: "section-3-quality-engagement-over-quantity-engagement",
    title: "Section 3: Quality Engagement Over Quantity Engagement",
    page: "p.11",
  },
  {
    id: "story-1-transitioning-to-the-off-season",
    title: "Story 1: Transitioning to the Off-Season",
    page: "p.12",
  },
  {
    id: "story-2-investing-in-the-franchise-player",
    title: "Story 2: Investing in the Franchise Player",
    page: "p.13",
  },
  {
    id: "story-3-continually-presenting-new-challenges",
    title: "Story 3: Continually Presenting New Challenges",
    page: "p.14",
  },
  {
    id: "story-4-we-all-have-roles-to-play",
    title: "Story 4: We All Have Roles to Play",
    page: "p.15",
  },
  {
    id: "story-5-rethinking-partnerships",
    title: "Story 5: Rethinking Partnerships",
    page: "p.16",
  },
  {
    id: "section-4-finding-time-to-find-time",
    title: "Section 4: Finding Time to Find Time",
    page: "p.17",
  },
  {
    id: "remixing-current-course-offerings",
    title: "Remixing Current Course Offerings",
    page: "p.17",
  },
  {
    id: "outside-of-class-but-still-inside-school",
    title: "Outside of Class but Still Inside School",
    page: "p.18",
  },
  {
    id: "working-outside-of-school",
    title: "Working Outside of School",
    page: "p.18",
  },
  {
    id: "black-and-belonging-vs-the-opps",
    title: "Black and Belonging vs. The Opps",
    page: "p.19",
  },
  { id: "black-and-belonging-vs-the-opps-continued", title: "", page: "p.20" }, // Continuation of the previous section
  {
    id: "section-5-finding-the-right-coaches",
    title: "Section 5: Finding the RIGHT Coaches",
    page: "p.21",
  },
  {
    id: "administrator-counselors-teachers-students-interns",
    title:
      "Administrator, Counselors, and Media Coordinators; Classroom Teachers; University Graduate Students; Interns",
    page: "p.22",
  }, // Consolidated title for clarity
  {
    id: "section-6-local-is-national",
    title: "Section 6: Local Is National",
    page: "p.23",
  },
  {
    id: "setting-criteria-and-standards",
    title:
      "Setting Criteria and Standards for the Traveling Squad: Everybody Can't Go",
    page: "p.23",
  },
  {
    id: "there-are-levels-to-this",
    title: "There are Levels to This, so Level-Up!",
    page: "p.24",
  },
  { id: "scout-scout-scout", title: "Scout, Scout, Scout!", page: "p.25" },
  { id: "scout-scout-scout-continued", title: "", page: "p.26" }, // Continuation
  {
    id: "recruit-the-family-members-and-youth-will-follow",
    title: "Recruit the Family Members and Youth Will Follow",
    page: "p.27",
  },
  {
    id: "recruit-the-family-members-and-youth-will-follow-continued",
    title: "",
    page: "p.28",
  }, // Continuation
  {
    id: "section-7-allow-students-to-explore",
    title: "Section 7: Allow Students to Explore",
    page: "p.29",
  },
  { id: "cultural-centers", title: "Cultural Centers", page: "p.29" },
  { id: "coworking-spaces", title: "Coworking Spaces", page: "p.30" },
  {
    id: "conferencing-and-tourism",
    title: "Conferencing and Tourism",
    page: "p.30",
  },
  {
    id: "youth-exploring-themselves-and-society",
    title:
      "Youth Exploring Themselves and Society Through Communal Learning Opportunities",
    page: "p.31",
  },
  { id: "conclusion", title: "Conclusion", page: "p.32" },
  {
    id: "advocate-with-youth-leverage-resources",
    title: "Final Considerations",
    page: "p.33",
  }, // Grouped for brevity
  { id: "about-the-authors", title: "About the Authors", page: "p.34" },
  { id: "contact", title: "Contact Information", page: "p.36" }, // This was on page 36 of the PDF, not 35.
];

export const sectionsData = {
  purpose: {
    title: "Purpose",
    pageNumber: "3",
    content: `
            <p>This playbook synthesizes ideas that emerged from visioning sessions with youth we were supporting as they implemented youth-led initiatives in their schools and communities, including:</p>
            <ul>
                <li>School policy convenings with administrators</li>
                <li>Research studies about students' in-school experiences</li>
                <li>Fashion shows featuring clothing items that youth designed to serve as conversation pieces regarding issues that are on young peoples' minds and hearts</li>
                <li>Cultural events that honored and affirmed youth from various ethnic backgrounds</li>
                <li>Research presentations at school staff meetings and national conferences</li>
            </ul>
            <p>Adolescents' sense of well-being, achievement beliefs, and academic performance are linked to their belonging experiences in institutional settings—making belonging a developmental priority and psychological necessity for youth. The Opportunities to Belong framework, proposed by Gray and colleagues (2018), offers educators tools that can enable them to cultivate institutional opportunities to belong by providing youth time and space to address barriers and inequitable institutional conditions that ultimately devalue and restrict the leadership contributions of marginalized youth. Although some youth-serving institutions recognize that youth experiences should inform decision-making on institutional policies, there are few detailed examples and powerful illustrations of how such opportunities can be structured that are well documented in publicly accessible outlets.</p>
            <p>Our hope is that this playbook will be helpful for decision-makers in youth-serving institutions to:</p>
            <ol>
                <li>Crystallize a working understanding of institutional opportunities to belong that can be applied to future policy and practice work;</li>
                <li>Integrate youths' subject-matter expertise and information resources into ongoing decision-making about educational policies and practices;</li>
                <li>Challenge existing assumptions about substantive youth engagement in leadership roles; and</li>
                <li>Identify liberating practices and approaches that can become cornerstones for future youth-led initiatives.</li>
            </ol>
            <p>We present a set of plays as a starting point for developing your own plays and effective practices that work in your community.</p>
        `,
  },
  "table-of-contents": {
    title: "Table of Contents",
    pageNumber: "4",
    content: `
            <p>The following table:</p>
            <p>"Section 1: Leveling the Playing Field" ,"01"
            <br>"Communal State of Mind: An Overarching Philosophy" ,"01-02"
            <br>"How does your team engage with youth?" ,"02-03"
            <br>"Additional Considerations" ,"03"
            <br>"Section 2: Match My Energy" ,"04"
            <br>"Building Power with Youth" ,"04"
            <br>"Energizing Youth to Lead" ,"05"
            <br>"Following the Energy of Youth" ,"06"
            <br>"Section 3: Quality Engagement Over Quantity Engagement" ,"07"
            <br>"Story 1: Transitioning to the Off-Season" ,"08"
            <br>"Story 2: Investing in the Franchise Player" ,"09"
            <br>"Story 3: Continually Presenting New Challenges" ,"10"
            <br>"Story 4: We All Have Roles to Play" ,"11"
            <br>"Story 5: Rethinking Partnerships" ,"12"
            <br>"Section 4: Finding Time to Find Time Remixing Current Course Offerings Outside of Class but Still Inside School Working Outside of School Black and Belonging vs. The Opps: Arguments for the Importance of Embedding Youth-Led Initiatives During the School Day" ,"13-16"
            <br>"Section 5: Finding the RIGHT Coaches An administrator" ,"17-18"
            <br>"Counselors and media coordinators" ,"18"
            <br>"Classroom teachers" ,"18"
            <br>"University graduate students" ,"18"
            <br>"Interns" ,"18"
            <br>"Section 6: Local Is National" ,"19"
            <br>"Setting Criteria and Standards for the Traveling Squad: Everybody Can't Go" ,"19"
            <br>"There are Levels to This, so Level-Up! Scout, Scout, Scout! Recruit the Family Members and Youth Will Follow" ,"20-24"
            <br>"Section 7: Allow Students to Explore" ,"25"
            <br>"Cultural Centers" ,"25"
            <br>"Coworking Spaces Conferencing and Tourism" ,"26"
            <br>"Youth Exploring Themselves and Society Through Communal Learning Opportunities" ,"27"
            <br>"Conclusion" ,"28-29"</p>
        `,
  },
  "section-1-leveling-the-playing-field": {
    title: "Section 1: Leveling the Playing Field",
    pageNumber: "5",
    content: `
            <p>We live in a society where youth have little say in policies that impact them. By accepting that youth are experts of their own experiences, we can come to appreciate that youth deserve to voice their perspectives, and that by doing so, they help adults address their own blind spots and incomplete appraisals for situations and issues that youth encounter. When we recognize their expertise, we can be open to developing more effective and relevant solutions in areas that directly affect their well-being, self-worth, physical safety, and belonging. By valuing their voices and including them in decision-making processes, we can foster environments that are more responsive to their needs and aspirations.</p>
            <p>Pay them. Many of the youth we engage with in community-based leadership opportunities are sacrificing time that they might otherwise spend in part-time jobs. Is their time valuable and worth paying for? If not, why not? Among the forms of payment we use are stipends, meals, merchandise, exclusive access to trips, networking events, and other agreed-upon forms of payment.</p>
            <h3>Communal State of Mind: An Overarching Philosophy</h3>
            <p>Our team developed a communal-engagement model (Gray et al., 2023) that helps us ground our work with youth. We believe this communal state of mind will help other youth-serving teams and organizations successfully collaborate with young people, and will improve outcomes such as engagement, confidence, leadership skills, teamwork, professionalism, and community impact. Here are some guiding questions to consider as teams design their approach to supporting youth-led initiatives:</p>
        `,
  },
  "how-does-your-team-engage-with-youth": {
    title: "How does your team engage with youth?",
    pageNumber: "6",
    content: `
            <p>01. Who are the members of your tribe? List the people you already work with/anticipate partnering with who would likely welcome youth leadership (and would therefore bring the right energy and perspectives to youth-led initiatives).</p>
            <p>02. Characteristics of collaborators: List some skills, attributes, mentorship/facilitator experience they possess that will best align your program's goals.</p>
            <p>03. Auditing and contextualization: What are the social, organizational, temporal, and geographical contexts that may influence how you work with youth researchers?</p>
            <p>04. Communal spaces for collaboration: What spaces are currently available/needed in order to ideate, workshop, and develop healthy relationships with youth researchers?</p>
            <p>05. Identifying needs of youth: What factors affect their abilities to show up and win? List ways you can support them to encourage strong teamwork and celebrate interdependence.</p>
            <p>06. Sharing and storytelling: When the work is complete: How will you disseminate the learnings that emerge from the work? What audiences should you engage whose decision-making directly affects youth? What is the role of digital storytelling in elevating youths' insights on issues and activities that impact them? Consider the purposes of dissemination (e.g., credentialing and cosigning youth, building community capacity for future youth-led work, shattering damaging stereotypes about marginalized identity groups).</p>
            <p>We hope these examples spark conversations about the considerations and state of mind required to successfully engage young people as indispensable collaborators.</p>
            <p>Although there are many ways that teams engage youth in leadership initiatives, we found the following three practices to be effective in our work:</p>
            <p>01. Socialization Practices. How do we establish trust and get youth to a point where they share what they actually think rather than what they think adults want them to say?</p>
            <p>02. Vulnerability. What factors affect adults' willingness/ability to be vulnerable around youth?</p>
            <ul>
                <li>Lose the ego | How do I embrace a learning posture?</li>
                <li>Control isn't the goal | How does it look if I relinquish control?</li>
            </ul>
        `,
  },
  "additional-considerations": {
    title: "Additional Considerations",
    pageNumber: "7",
    content: `
            <p>03. Can you take the heat?</p>
            <ul>
                <li>Listen and iterate on the design of youth programming activities to maintain relevance.</li>
                <li>Continually assess what youth feedback is telling the team and make meaningful changes based on their words and actions.</li>
                <li>Are they explicitly or implicitly communicating important ideas that can impact your work and how youth engagement can look?</li>
            </ul>
            <p>01. Stay away from buzzwords</p>
            <ul>
                <li>Use language that better connects with the youth. If specific terminology is necessary:</li>
                <li>Provide glossaries or include definitions within the content</li>
                <li>Co-develop definitions of terms with the youth to create a shared language and understanding</li>
            </ul>
            <p>02. Evaluate the effects of the provided communal space.</p>
            <ul>
                <li>How does the environment affect the power dynamics between adults and young people?</li>
                <li>Do youth feel safe to express their honest opinions in the space?</li>
                <li>If not, how can we pivot?</li>
            </ul>
            <p>03. Give youth-led initiatives time to take shape. As Bruce Lee suggested, "Be water." Working with youth who are learning about the research process requires fluidity to ensure the project can continue despite the challenges that come with this work (e.g., accepting that there can be a long work period before seeing the fruits of their labor; learning to situate their research projects within existing literature; making critical decisions around research design, data collection, and interpretation). Expect take youth through several rounds of feedback before their insights are ready to share with adult policymakers and stakeholders.</p>
        `,
  },
  "section-2-match-my-energy": {
    title: "Section 2: Match My Energy",
    pageNumber: "8",
    content: `
            <p>This play explores strategies to help you coach, mentor, and build power with youth leaders for cultivating a dynamic, engaging, and effective environment where youth set the pace and take the lead. We hope it will help you understand why it's crucial to position youth at the forefront of leadership and enable you to follow their energy as you support their rise to the top. We believe that our youth hold rich cultural knowledge, skills, experiences and perspectives that must be honored and affirmed. To win this game we must effectively harness the energy, creativity, and enthusiasm of young leaders.</p>
            <h3>Building Power with Youth</h3>
            <p>Switch your frame of thinking from merely empowering youth to actively building power with youth. Whereas empowering suggests giving power to someone, building power with emphasizes an approach in which power is co-created, resulting in a deeper, more collaborative and equitable approach. It helps ensure that youth are active participants in shaping their futures—enhancing their engagement, and fostering sustainable and just outcomes.</p>
        `,
  },
  "energizing-youth-to-lead": {
    title: "Energizing Youth to Lead",
    pageNumber: "9",
    content: `
            <p>Culturally informed motivation strategies are key to successful youth leadership. To effectively motivate young people, it's essential to first understand what drives them and then tailor opportunities accordingly. Here's what our youth have identified as key energizers:</p>
            <ul>
                <li>01. Offer a selection of roles and projects: When students have more choices to explore their interests and strengths, they are more likely to find something they are passionate about.</li>
                <li>02. Partners with youth in real-world settings. Projects that allow them to move out of the traditional classroom setting and into more dynamic environments (like professional co-working spaces) have been particularly energizing for our youth.</li>
                <li>03. Pair youth with peers they already enjoy spending time with. Youth are more likely to be enthusiastic about participating in activities that involve their friends, which can significantly boost the morale and the engagement of the team. This is what our youth call twinergy. Also carve out time for friendships to emerge during the beginning stages of a project. Friends provide emotional support, which can be especially valuable in challenging situations or new environments. Having twinergy on the team also helps alleviate the anxiety that youth can encounter when engaging with adults and can build confidence, making it easier for youth to step outside their comfort zones and fully engage in the project.</li>
                <li>04. Make time for fun. Fun is such a powerful energizer! Projects that incorporate elements of travel, creativity, and active participation bring youth more joy and engagement with projects. Avoiding long periods of inactivity and integrating enjoyable activities helps maintain enthusiasm and interest. For example, while touring NC State's campus we allowed students to spray paint in the Free Expression Tunnel. We also integrated games into our working sessions with youth.</li>
                <li>05. Build in down time. Provide the space of youth to engage with their peers and have fun outside of scheduled activities. Making time for down time was a major strategy that emerged during our check-ins with youth about ways to improve our engagement experience.</li>
            </ul>
        `,
  },
  "following-the-energy-of-youth": {
    title: "Following the Energy of Youth",
    pageNumber: "10",
    content: `
            <p>By aligning our support with the interests and enthusiasm of students, we created an environment where our young people felt valued and affirmed. Beyond providing resources, this is about actively participating in and celebrating the students' journey.</p>
            <ul>
                <li>01. Incorporate food as a communal element: Food holds a profound significance within the Black and Latina/o/x community, serving as an important glue for social interactions and community bonding. Far more than mere sustenance, food embodies cultural heritage and social connections as well as the history, values, and unity of a community. Students appreciated the chance to choose their of food and snacks, and had fun trying foods that were new to them. Getting a chance to eat together also gave them a chance to relax, which increased their engagement and enjoyment.</li>
                <li>02. Keep it fresh: Engaging youth is an iterative process—one that involves ongoing changes and refinements. Focus on the students who are actually participating not those you envisioned building a program around or those you designed a curriculum around a few years ago. To remain relevant and engaging projects should be dynamic and open to continual evolution.</li>
                <li>03. Orient volunteers and other stakeholders: Explain the iterative nature of the project so that they understand that the changes are intentional and to avoid misunderstandings. Preserve the essential elements that are necessary to foster a dynamic and responsive learning environment for youth.</li>
                <li>04. Collect and utilize feedback: Find ways to reach both introverted and extroverted youth. Surveys, particularly confidential ones, are a valuable tool that allow students to express their opinions and suggestions freely. For those students who don't want to write their opinions, make time for discussions at the end of sessions/activities.</li>
            </ul>
            <p>By following youths' energy, providing essential resources, and fostering a supportive and fun atmosphere, adults can help shape a generation of confident, capable leaders. It's about recognizing the unique contributions of each student, and creating opportunities that resonate with their passions and interests. In doing so, we not only prepare them for future leadership roles but also enrich the learning experiences of everyone involved.</p>
        `,
  },
  "section-3-quality-engagement-over-quantity-engagement": {
    title: "Section 3: Quality Engagement Over Quantity Engagement",
    pageNumber: "11",
    content: `
            <p>Focusing on ways to dynamically respond to a select group of youth makes it easier to engage young people at a deeper level and can cultivate sustained connections crucial to enabling these young leaders to substantively impact a larger number of youth. A wide array of strategies can contribute to quality youth engagement, including:</p>
            <ul>
                <li>(1) finding ways to schedule around other valued commitments that occupy youths' time,</li>
                <li>(2) identifying ways to continually challenge the same groups of youth with new leadership initiatives over time,</li>
                <li>(3) valuing the many forms that youths' contributions may take, and</li>
                <li>(4) building in ample reflection and planning time so as to be responsive to their suggestions on how working sessions should be structured.</li>
            </ul>
            <p>This section presents five leadership stories of youths' journeys while working with us, along with how and why the quality over quantity philosophy we employed positively impacted their sense of connection to the initiatives they led.</p>
        `,
  },
  "story-1-transitioning-to-the-off-season": {
    title: "Story 1: Transitioning to the Off-Season",
    pageNumber: "12",
    content: `
            <p>We began working with Malachi when he was in the 6th grade after he made an educational video to teach his community about Black sports icons. Malachi is a football player, basketball player, and track and field athlete who is a deep thinker. His teachers describe him as a student who sticks with projects, even when concepts are difficult for him to understand. We invited him and a small group of his peers to spend the summer working with us—turning their educational videos into professional-quality public service announcements that could be displayed publicly and used as an instructional resource for teachers during Black History Month. Malachi worked meticulously to clarify the exact angle he wanted to shoot the video from, and we encouraged him to do so. However, family and athletic commitments prevented him from devoting himself exclusively to our summer institute, and as a result the project never saw the light of day.</p>
            <p>Over the course of middle school Malachi slowly worked his way up within our program—first as a photographer, then at an information table during community events while other students' completed projects were publicly recognized. By 8th grade, Malachi was a star football athlete who was invited to play in the All-American Middle School football championships. It was clear that we would not be able to engage Malachi deeply in youth-voice initiatives during the Fall semester. Spring semester was a different story! Off-season for Malachi's athletic activities meant in-season for Black and Belonging! So this honor roll student-athlete was all in—engaging in weekly brainstorming sessions for new youth-led initiatives, conducting evaluations of the impact of our previous youth-led initiatives on students' belonging and engagement, and presenting at conferences across the country to present logic models that teach scholars how to design youth-led initiatives that were similar to the ones he engaged in. By honoring Malachi's natural rhythm of engagement and availability, and by being creative about ways athletes could be engaged in youth-led initiatives, Malachi's peers also benefitted—not only from his strong leadership qualities, but also from his example of how life lessons learned in sports can translate into other arenas off the field. And Malachi's rhythm of engagement and availability has had even more far-reaching impacts because it got us thinking about ways other athletes could be engaged in youth-led initiatives in their off season.</p>
        `,
  },
  "story-2-investing-in-the-franchise-player": {
    title: "Story 2: Investing in the Franchise Player",
    pageNumber: "13",
    content: `
            <p>While Mikal was in high school, he was undoubtedly the franchise player for our youth-led initiatives. His exceptional ability to articulate and clarify the larger vision and purpose behind his projects, coupled with his high ambitions, quickly positioned him as the face of several projects. After presenting at a national research conference, many of the adult attendees seemed to empathize with his gripes about learning how to use a statistical package to analyze his research data. Upon arriving home Mikal asked us to mentor him and help deepen his data analysis of schools to better position himself as a professional on research related to youth. An avid follower of Internet sensation media mogul and speaker Gary Vee (Gennady Alexandrovich Vaynerchuk), Mikal studied his videos, which inspired him to upgrade his public speaking skills. Soon her was the opener at our public speaking events. Mikal, with his passion and charm, not only immediately engages his audience but also paves the way for his peers by warming up the crowd—imbuing them with more confidence to speak.</p>
            <p>Clearly, we needed to support Mikal's ambition with resources to help him advance, including access to technology and software to engage in research activities, professional photos for the speaking engagements, and award profiles, as well as personal introductions to world-renowned education scholars from schools including the University of Southern California; Teachers College, Columbia University; The Ohio State University; and the University of Michigan. His desire to always go above and beyond what his project activities call for embodies what we want to do for all our youth: support them in developing into leaders who achieve scholastically in ways that also elevate their culture and community. Mikal attracted more students and more attention in general to our youth-led activities. And in turn we supported his professional presence, leveraged our network, and endorsed him for jobs and college admissions. It came as no surprise to us that Mikal was recruited for a full ride by nationally recognized and highly selective research universities.</p>
        `,
  },
  "story-3-continually-presenting-new-challenges": {
    title: "Story 3: Continually Presenting New Challenges",
    pageNumber: "14",
    content: `
            <p>Jewels, Asia, Tamia, and Shaniya were the best of buddies in middle school. They did everything together—going to the mall, doing their hair, sharing clothing, and group texting all day long. Their profound connection enabled them to make rapid progress on their youth-led initiatives, which focused on addressing Black hair standards and stereotypes in society, and their impact on Black girls. As 8th graders, they made public service announcements (PSAS) that questioned school dress code policies that related to hair both directly and indirectly. Their PSAs gained a lot of national attention when university professors began using them as tools to engage preservice teachers in conversations about belonging from a cultural/identity perspective. But what is considered a next-level youth-led initiative for middle school students is not necessarily sufficient to get them engaged as high schoolers. As they grew, we needed to expand their roles and engage them in next-level activities. This was especially challenging because the girls ended up attending different high schools. And free time for these high academic achievers was becoming increasingly limited, due to their engagement in honor societies, sports, student government positions, and part-time jobs. We supported them in cofacilitating a professional development workshop for their teachers during a teacher workday, enabling them to get next-level experience presenting. They received valuable feedback about their delivery and the impact of the workshop, and were invited to present during a district-wide community event on the CROWN Act and Black women's hair.</p>
            <p>Their available time became even more limited, and so we needed to find ways for them still see youth-led projects as worth participating in. It was at this point when one of the girls asked if they could learn how to write grants. We found a grant opportunity especially for youth-led initiatives, helped them apply for and write the grant; they came up with a project on their own—and they were awarded the grant. Once again we needed to adapt our youth-led challenges and opportunities around students' time restraints so that they would continue to see our program as meaningful and worth it. And we needed to further encourage and support youth who express interest in, and readiness for, more meaningful leadership roles.</p>
        `,
  },
  "story-4-we-all-have-roles-to-play": {
    title: "Story 4: We All Have Roles to Play",
    pageNumber: "15",
    content: `
            <p>Nilah and Helena are in the same middle school friend circle. They, along with their 7th-grade friend-girls, worked with us to design their own merch in the form of wearable art. Nilah, a very diligent, dependable student, made herself available for each and every project meeting. She was always the first one to present and the last to leave—even helping us carry materials back to our cars. Her specialties included spearheading the choice of colors, artwork, and the fabric and other materials. Helena liked to engage with the project, but only when something interesting about the discussion caught her attention.</p>
            <p>There were several ways we could have handled the situation with Helena at this point. We could have tried to find ways to engage her more deeply in the project. If that didn't work, we could have given her an ultimatum. If Helena still didn't participate consistently, we could have kicked her off the project. But none of these would have been the right decision for either Helena or us. Helena has a powerful, creative mind with a lot to offer: She brought comedic relief to the room along with a lightheartedness and lots of hugs for her peers, and she could always be relied on to take group selfies during working sessions. When proposed ideas sounded just okay to her, she was not shy about giving them the thumbs down. And whenever she had suggestions, the adults knew they should take them seriously. Without Helena's input the creative wearable art that these youth generated would have not come out the same.</p>
            <p>Helena is what we call a "concept genius"—someone who does not yet know how to execute or see a project through but who surely can point the team in the right direction to get started. Nilah is what we call a "finisher." She's clutch—whatever it takes to get a project finished, she will do it—including iterating on an idea or a design and working through all of the particulars until they are just right.</p>
            <p>On the surface, this may look like an unequal distribution of a workload. But who says that the best outputs come from equal time/energy commitments, anyway? We lifted that assumption and allowed the youth to make their contributions to the group in ways that were more organic. As a result, these friend-girls led the creation of a design of a fashion-forward sweatsuit and inspired their peers. Some youth are focused on the outcome; other youth can turn a peer group into a culture. Both are vital to a project's success and quality.</p>
        `,
  },
  "story-5-rethinking-partnerships": {
    title: "Story 5: Rethinking Partnerships",
    pageNumber: "16",
    content: `
            <p>Bishme entered 6th grade on a business mission. He had attended our youth-focused community events for years with his siblings and was excited to finally interview for acceptance into our program. He trusted us to come through for him and his peers, and to never let him down. As a team, we worked to meet his expectations. Out of 115 youth who were interviewed for our program for academic year 2023-2024, his question stood out to us the most: "Is there any way I can make money with Black and Belonging?" We answered, "Of course, you can!" But afterward we admitted to ourselves that we didn't know how we would do it! We had already planned on giving students stipends who led youth-focused initiatives during the year. But that wasn't his question. He said "make money with"—which would mean a completely different way of working with our young people, elevating them to the role of business partners rather than just project partners.</p>
            <p>We met with students once a week, which gave us time to listen to and process issues that were on their hearts and minds. And that also meant we had a week to plan, strategize, adapt, and implement their suggestions into our curricular activities. We came up with a plan to build a Black Friday Merch fundraiser into our program that not only enabled students to learn about aspects of successful e-commerce businesses, but also to apply these principles by selling merch for their school program. Students received a portion of the proceeds from each item they sold, with the remaining funds raised applied directly to the youth-led initiatives they would conceptualize and execute over the course of the remaining seven months of the academic year.</p>
        `,
  },
  "section-4-finding-time-to-find-time": {
    title: "Section 4: Finding Time to Find Time",
    pageNumber: "17",
    content: `
            <p>In sporting competitions, each team is focused on finding a way to win in the (often) finite amount of time allotted for the game. While working with youth, we learned that we had to take the time to find time in creative and nontraditional ways. Although we considered designing after-school initiatives, many of our young people told us they wouldn't be able to participate because they already had other commitments and interests including sports, band practice, and community activities like church; others couldn't stay after school because they had no ride to get home. And our youth collaborators made it clear: If the choice was between working on youth-led meetings or events and going to practice for sports, usually it was sports that would come out on top. So, clearly we needed to find a way to find time for our program during the school day. That would be a win: win—no scheduling conflicts and no need for transportation.</p>
            <h3>Remixing Current Course Offerings</h3>
            <p>We met with the leadership at one of the schools we partner with to discuss our vision for enhancing student belonging and explained that a lot of the students would participate if they only had the time. Recognizing how important our program could be, they offered us time within the normal school day during one elective section a week so that our meetings would function just like any another class. Soon our program became emmeshed within the school community, which helped us gain the support of and participation by other leadership team members and staff during hours in which they were already paid to be in the building. Thus, our youth-led initiatives met in their regular assigned classroom. Although the students were missing academic class time and work, by participating in our program they were being held accountable for it. The youth saw this opportunity as a privilege and took their responsibility seriously, and there was still time for their regular classwork four times a week.</p>
        `,
  },
  "remixing-current-course-offerings": {
    // Added for explicit page 17 continuation if needed by nav
    title: "Remixing Current Course Offerings",
    pageNumber: "17",
    content: `
            <p>We met with the leadership at one of the schools we partner with to discuss our vision for enhancing student belonging and explained that a lot of the students would participate if they only had the time. Recognizing how important our program could be, they offered us time within the normal school day during one elective section a week so that our meetings would function just like any another class. Soon our program became emmeshed within the school community, which helped us gain the support of and participation by other leadership team members and staff during hours in which they were already paid to be in the building. Thus, our youth-led initiatives met in their regular assigned classroom. Although the students were missing academic class time and work, by participating in our program they were being held accountable for it. The youth saw this opportunity as a privilege and took their responsibility seriously, and there was still time for their regular classwork four times a week.</p>
        `,
  },
  "outside-of-class-but-still-inside-school": {
    title: "Outside of Class but Still Inside School",
    pageNumber: "18",
    content: `
            <p>Many of our youth collaborators were deeply invested in working on our projects and its potential for impacting the school. They therefore wished they could meet more often. They wanted more time to be together to work on their ideas, tackle larger projects, learn more about business, and tap into their creativity through their clothing designs. They also asked for academic responsibility—including enabling more students to participate through teacher recommendations, initiating a grade requirement, and incorporating some of the topics and themes already being taught in their academic classrooms into their initiatives. The students also wanted to feel that their work with us was significantly connected to the school—so that teachers would not only be supportive of the program but would, along with the rest of the school community, recognize the program as not just at the school but as a part of the school.</p>
            <p>The schools already had blocks of time carved out for certain parts of the day, such as for academic remediation and club activities. For those students who didn't need academic remediation, this time was more loosely structured. We approached the teachers about the possibility of letting us work with students during that block of time. We got their permission. Soon we were engaging with youth who were conducting research such as focus groups and surveys, working on event leadership and logistics, and rehearsing presentations for national conferences and to their administrators. We could use this extra time more flexibly. Our team didn't always have to split up by grade level according to the weekly elective-period bell schedule, and we provided more individualized support to smaller groups.</p>
            <h3>Working Outside of School</h3>
            <p>As top athletes know, skill work—personalized training sessions that focus on specific skill development—helps bridge the gap between practice and game application. Most skill work takes place outside of practice time off the field. We found that when the skill work centers around the voices and interests of youth, they are excited about continuing the work even when it spills into their time outside of school. We discussed the idea with them about holding workshops off campus, and after getting the thumbs up, we set about looking into where we might hold the sessions and how we would find the time.</p>
        `,
  },
  "working-outside-of-school": {
    // Added for explicit page 18 continuation if needed by nav
    title: "Working Outside of School",
    pageNumber: "18",
    content: `
            <p>As top athletes know, skill work—personalized training sessions that focus on specific skill development—helps bridge the gap between practice and game application. Most skill work takes place outside of practice time off the field. We found that when the skill work centers around the voices and interests of youth, they are excited about continuing the work even when it spills into their time outside of school. We discussed the idea with them about holding workshops off campus, and after getting the thumbs up, we set about looking into where we might hold the sessions and how we would find the time.</p>
            <p>We consulted the district schedule and arranged for the workshops to be hosted either during school breaks or during Teacher Work Days (TWD) when students would already be off. Parents were happy to give permission for the students to participate in these off-campus constructive pursuits, since youth might otherwise just be hanging around and catching up on sleep for the day.</p>
        `,
  },
  "black-and-belonging-vs-the-opps": {
    title:
      "Black and Belonging vs. The Opps: Arguments for the Importance of Embedding Youth-Led Initiatives During the School Day",
    pageNumber: "19",
    content: `
            <p>Leveraging our university connections, we received permission to hold the sessions within the library system spaces. As much as possible, we structured the workshops like professional development trainings. During our full-day workshops, we taught research skills such as data coding methodologies, facilitated leadership strategizing, supported team building, and provided preparation time and space for upcoming presentations. We rented large vehicles to provide transportation for the students. While they were on campus, we supplied breakfast and lunch (often in the dining hall—their favorite spot!). By locating the workshops at the university, as an added bonus, the youth had a chance to experience campus life and to envision their future selves as university students.</p>
            <p>We encourage youth-serving organizations to pursue leveraging the personnel and space resources they already have at their disposal, and to think creatively about how to use the financial support that is available. For example, consider approaching teachers you already have a strong and trusting relationship with and offer them a stipend for helping to facilitate a workshop during a school break. Perhaps you could host a workshop in your local public library's meeting space. Of course, you will need to take time to find time to engage with youth in creative ways. But trust and believe: the groundwork is worth it and if the work is meaningful to youth, they will be happy to continue the mission.</p>
            <p>We are using the term opps as short for opposition and it refers to those who think negatively about a particular initiative, idea, person, or group. We use the term to provide a point-counterpoint discussion (based on oppositional feedback we sometimes received) about when, where, and how youth-led initiatives should be run.</p>
        `,
  },
  "black-and-belonging-vs-the-opps-continued": {
    title: "Black and Belonging vs. The Opps (Continued)", // Added for clarity, as the content is a continuation
    pageNumber: "20",
    content: `
            <p>Opps: Time within school should be focused on the academic needs of students. If there are academic gains that need to be attained, schools should not allot time to other endeavors and activities.</p>
            <p>B & B: Taking time away from regular academic classes for youth-led initiatives can contribute greatly to students' well-being, and thus increase their desire to be at school and to engage with the school community. Our youth told us that our sessions felt like a safe space and provided a much-needed break from their regular academic day. In addition, confidence gained through their participation in program activities increases their confidence within the classroom.</p>
            <p>Opps: Given the special privileges this program would offer to initial youth participants, it may seem unfair to other youth. How does your program help the school as a whole?</p>
            <p>B & B: Once young people see the benefits of the program and what they can gain from being involved, it drums up interest in joining or supporting the work. Participating in this type of program also spreads awareness of and engenders positive publicity about the school. For example, our youth presented at the AERA (American Educational Research Association) conference in Philadelphia, and proudly told participants they encountered where they were from. They became brand ambassadors not only for themselves and for our youth-led initiatives, but also for their schools and hometowns. The young people we work with are well aware of the negative narratives about other kids who look like them and who are from places similar to their communities. Their presence at AERA allowed them to paint a fuller picture of their school than the one provided by the school's accountability report card—based on positivity and their academic excellence, professionalism, impact, and advanced learning opportunities.</p>
            <p>Opps: School curriculum is decided at the state level and that is what students will be assessed on at the end of the year. How does a program like yours help prepare them to perform well in the classroom?</p>
            <p>B & B: The skills and experiences our youth gain through our youth-led initiatives translates into more energy, confidence, interest, and success in their academic subjects. Additionally, programs like ours create opportunities to display youth leadership in action. For example, our young people were directly involved in all stages of the planning, preparing, promoting, and hosting of each initiative they have led. Afterward, they told us that being positioned to lead their peers enabled them to use their voice, and that the adults supporting their public showcases clearly heard their inputs and ideas, trusting them to be in charge and to take ownership of the event. Their engagement included demonstrating leadership, collaborating, thinking critically, showing initiative, and tapping into their creativity—all 21st-century skills that schools aim to help students achieve. When it comes to preparing young people for their futures, schools and programs like ours are working toward the same goal: supporting and encouraging our youth in developing these skills.</p>
        `,
  },
  "section-5-finding-the-right-coaches": {
    title: "Section 5: Finding the RIGHT Coaches",
    pageNumber: "21",
    content: `
            <h3>Why Adopt a Coach's Mentality?</h3>
            <p>Coaches are ubiquitous in our lives. And regardless of the type—sports, financial, relationship, academic, career, spiritual, life—they all are tasked with teaching new skills and techniques, offering encouragement, giving constructive feedback, providing training, identifying strengths and weaknesses, and creating a positive environment focused on improvement and learning. In our work as coaches, we serve as facilitators and guides to help our young people navigate and investigate their interests and talents.</p>
            <p>Our young people identified some common characteristics among our coaches that increased their engagement with our initiatives, including:</p>
            <ul>
                <li>Being patient</li>
                <li>Having a good temperament to work with youth</li>
                <li>Understanding youth perspectives</li>
                <li>Respecting youths' feelings, ideas, and views</li>
                <li>Supporting opportunities for youth to lead</li>
                <li>Functioning as mentors, facilitators, and guides for youth</li>
                <li>Being interested in youth activities that fall both within the scope of the program work and outside of it. (For example, some of our coaches attend school/sports events and chaperone our youth trips.)</li>
            </ul>
            <p>We utilized and leveraged relationships at multiple levels within schools and the community.</p>
        `,
  },
  "administrator-counselors-teachers-students-interns": {
    title:
      "Administrator, Counselors, and Media Coordinators; Classroom Teachers; University Graduate Students; Interns",
    pageNumber: "22",
    content: `
            <p>An administrator: Interruptions to the school day—like a last-minute call for a meeting or a fire drill—may delay a session or require a change of venue. Changes to school policy and other new developments may affect the program plans. So quick access to someone in the administration is essential. In some schools, it's easier to catch an administrator as they walk the halls than it is to schedule time on their calendar.</p>
            <ul>
                <li>When choosing a liaison between the school and the program, consider those outside of the classroom. They already have relationships with staff and with students and teachers across grade levels, and can provide unique insights.</li>
            </ul>
            <p>Counselors and media coordinators: They are a wonderful source for tapping into the needs of students and for identifying students for different roles, as well as for providing information about school issues. Also, because they do not have classroom duties, they have more schedule flexibility to assist with logistical planning and implementation for program activities and events that the program is heading up. Mrs. Leggett, a school media coordinator, provided us with a flexible space and technology that we used for smaller group meetings, presentation practice, and conducting focus groups.</p>
            <p>Classroom teachers: A 7th-grade classroom teacher, Mrs. Badejo, was one of our strongest advocates. She became our eyes and ears in the school—letting us know about schedule changes, events planned during the school day, and logistical information that helped us gain access to grant funds that had been awarded for programming. The students started to count on her as a program representative that they could consult with in-between our scheduled sessions. We tapped Mrs. Badejo to chaperone a sponsored field trip to Philadelphia for students to present at AERA. Besides her wonderful rapport with the students and advocacy for us, she knew how to navigate the process for obtaining travel permissions, and for dealing with other district policies as well as with the paperwork required by the school for field trips.</p>
            <p>University graduate students: Ms. Allah and Ms. Ali—are both celebrated former educators in a district we work with. They spent their careers working directly with students, and their Black and Latine heritage provides them with many cultural commonalities to our students. Additionally, they know how to create an environment of belonging in which youth feel respected, accepted, included, and supported—enabling youth engagement that shines through the work.</p>
            <p>Interns: Sean and Kwazsi are male interns attending a local HBCU (Historically Black College or University) who are very culturally attuned to our youth, and who understand the positive and negative impacts that social media can have on youth culture. Leveraging their social media savvy and technological skills in media production, they showed students how to turn an entertaining habit into a powerful mechanism to interact with their larger community—all the while expressing messages of positivity, culture, pride, and belonging.</p>
        `,
  },
  "section-6-local-is-national": {
    title: "Section 6: Local Is National",
    pageNumber: "23",
    content: `
            <p>To be hyperlocal is to focus on the needs, issues, experiences, stories, places, and people in a certain geographic area. The term can also be applied to organizations that focus extensively on addressing the desires, hopes, dreams, and issues of members of a particular community. Our hope is that in adopting a hyperlocal approach, our youths' insights, perspectives, and approaches will inspire youth and adults in other youth-serving organizations across the country. The game plan involves scouting youth who have a message to share, then earning the support of adults whom the youth already trust, and ultimately doing the community proud—locally, statewide, and, eventually, nationally.</p>
            <h3>Setting Criteria and Standards for the Traveling Squad: Everybody Can't Go</h3>
            <p>Although there are many youth on our roster, the hard truth is that everyone can't be included in the traveling squad. In part, this is because some youth leadership activities such as networking, deep dives into bootcamps, and performances—can't be effectively accomplished in a large group. And large groups require more chaperones, more engagement activities, and a bigger budget. In addition, there may be diminishing returns with larger groups. And some youth on a youth-serving organization's roster will clearly not be able to represent the organization's brand in the best light. So, developing criteria and standards for traveling squads is essential. Some criteria may be consistent across different travel experiences and others may vary depending on the opportunity. Considerations include youths' ability to execute the learning/performance tasks (such as public speaking, community engagement, interviewing skills), specialty roles, logistics (such as a venue's space restrictions, the number of youth being interviewed by press/media outlets), and academic commitments (such as homework, finalizing college applications). However, sometimes we have made exceptions for youth who show promise for leadership but are not ready to join the traveling squad. Although they weren't allowed to directly participate, they observe and learn how to build on the experience to carry the brand forward in the future—regardless of whether they eventually become a leader.</p>
        `,
  },
  "setting-criteria-and-standards": {
    // Added for explicit page 23 continuation
    title:
      "Setting Criteria and Standards for the Traveling Squad: Everybody Can't Go",
    pageNumber: "23",
    content: `
            <p>Although there are many youth on our roster, the hard truth is that everyone can't be included in the traveling squad. In part, this is because some youth leadership activities such as networking, deep dives into bootcamps, and performances—can't be effectively accomplished in a large group. And large groups require more chaperones, more engagement activities, and a bigger budget. In addition, there may be diminishing returns with larger groups. And some youth on a youth-serving organization's roster will clearly not be able to represent the organization's brand in the best light. So, developing criteria and standards for traveling squads is essential. Some criteria may be consistent across different travel experiences and others may vary depending on the opportunity. Considerations include youths' ability to execute the learning/performance tasks (such as public speaking, community engagement, interviewing skills), specialty roles, logistics (such as a venue's space restrictions, the number of youth being interviewed by press/media outlets), and academic commitments (such as homework, finalizing college applications). However, sometimes we have made exceptions for youth who show promise for leadership but are not ready to join the traveling squad. Although they weren't allowed to directly participate, they observe and learn how to build on the experience to carry the brand forward in the future—regardless of whether they eventually become a leader.</p>
        `,
  },
  "there-are-levels-to-this": {
    title: "There are Levels to This, so Level-Up!",
    pageNumber: "24",
    content: `
            <p>Most opportunities afforded to people in organizations are political, and the same applies to schools. Everyone who takes part in the Black and Belonging initiatives has a role to play politically to create opportunities for the next cohort of youth. We want to continue being a brand that our alumni can trust as they share their time and talents with our youth.</p>
            <p>Some youth taking part in our youth initiatives, however, were acting out in their regular classes, and some educators assumed those same students were acting out when they were with us. But this was not the case. Here's what some peer leaders said about the relevance of standards:</p>
            <p>"Student Isabella: We're not going to take you outside of school grounds if you're not putting in the work."</p>
            <p>"Student Layla H.: I think everybody deserves the opportunity, but as time goes on, the opportunities and standards become more and more professional. The bar gets higher for a reason."</p>
            <p>“Student Tacari: When I was passing out the permission slips for the field trip, some of those teachers were looking at me crazy, like, "Why do they get one?""</p>
            <p>Student Layla G.: Everybody should have an opportunity to grow. We have had opportunities to learn and to earn money. I feel like everybody should be able to have these opportunities. But when we go to these places that are professional, some students don't act professional. So we probably will end up getting the money, but we probably won't be invited back for that same opportunity."</p>
        `,
  },
  "scout-scout-scout": {
    title: "Scout, Scout, Scout!",
    pageNumber: "25",
    content: `
            <p>"What good is being the one when you're the only one that knows it?"—J. Cole (Friday Night Lights Mixtape, 2010)</p>
            <p>Youth-serving organizations must first work to build deep interest, name recognition, and a culture of affirmation to draw youth in. This social ramp-up is essential for establishing and maintaining high criteria and standards while the organization continues to implement its initiatives. Compare that to athletic organizations. They are already socially ramped up with a built-in audience (including youth who watch sports on television, often from a young age, and other household members who are sports fans). Sports teams have no trouble attracting talented youth to try out for the few available slots.</p>
            <p>In athletics, sports scouts travel to schools searching for standout athletes by watching practices and games. They recruit athletes that they think will help nurture their talents, give teams a performance edge, and contribute to strategic planning. Scouting in youth-serving agencies is important for these same reasons, as illustrated in the following story.</p>
            <p>Monet Mouling. While Monet was in 7th grade, she scored a "5" on her End-of-Grade (EOG) standardized test of student performance in reading—indicating that she demonstrated "superior command" over the material covered on the test, mastery over grade-level skills, and an ability to apply and extend these skills in various scenarios. This was evidenced just a year prior when she and a group of her schoolmates, along with students from three other middle schools, went on a field trip to the North Carolina Museum of Art. They had just finished exploring the Afrofuturism in Costume Design exhibit (by award-winning costume designer, Ruth E. Carter), and along with hundreds of other students, were waiting in the auditorium to see Crooklyn. A 1994 semiautobiographical film written by Spike Lee and his siblings, it prominently features costumes designed by Ms. Carter.</p>
            <p>The concession stand was running low on popcorn and snacks, and the line was getting longer by the moment. A museum director, working feverishly to figure out a diversion until they could replenish the stock before the film started, asked DeLeon Gray (Black and Belonging CEO) for his assistance. Gray agreed, and set upon deciding which of his students could help him stall. He began scanning their faces. Row by row he searched... "No, no, no, no..." And then he saw Monet! "Jackpot!"</p>
        `,
  },
  "scout-scout-scout-continued": {
    title: "Scout, Scout, Scout! (Continued)", // Added for clarity as a continuation
    pageNumber: "26",
    content: `
            <p>Weaving his way toward the back of the auditorium, he approached her and asked her which poems she knew by heart. Monet said that she only had one memorized well: "What I Am".</p>
            <p>"That's perfect!" Gray replied. "Now, you've got all of three minutes to get ready!"</p>
            <p>"Why me?" Monet asked. "There are so many people here from all these different schools. I don't know these people!"</p>
            <p>Dr. Gray said, "I've seen you at your school assembly standing up in front of a bunch of students who had been goofing off, and you rocked that stage! This crowd is light work".</p>
            <p>"Oh, man!" she said, still hesitating.</p>
            <p>But her peers hyped her up. So Monet agreed, and Dr. Gray proceeded to warm up the crowd with a few choice anecdotes. Then this young spoken word artist and literary savant took the stage... and absolutely crushed it—the crowd went nuts!</p>
            <p>The next year, Monet represented Black and Belonging by performing the poem during the annual Durham City-County Martin Luther King, Jr. (MLK) Employee Observance Program. Now a high school freshman, Monet has finished an initial draft of a book and is exploring publication options.</p>
            <p>Reflecting on this experience, Monet noted, "This is my specialty. I do this really well. I got picked to do it, and it helps you feel really good about yourself".</p>
            <p>When a young person seizes the moment, it also reflects well on the organization. As students in the organization gain more recognition for their achievements in ways that are culturally resonant, other youth begin to see the organization as a place where young people's ideas are cultivated, taken seriously, and spotlighted. As we locate youth and appreciate their distinct abilities, the organization becomes located by others. Such opportunities interface with the goals that school districts develop around talent development—pushing students to new heights and providing next-level experiences that extend beyond typical academic boundaries.</p>
        `,
  },
  "recruit-the-family-members-and-youth-will-follow": {
    title: "Recruit the Family Members and Youth Will Follow",
    pageNumber: "27",
    content: `
            <p>Young people have powerful ideas and can teach the world. But they often need extra encouragement to keep going and to stick with their ideas. The process of refining an idea can be grueling with have few short-term payoffs, which can discourage youth from proceeding. That's where trusted adults come in. When youth-serving organizations gain the support of adults that their youth already trust (such as family members, prior educators, mentors, coaches), youth can get the clearance and encouragement to lock in at a deeper level and eventually develop their ideas for a national audience.</p>
            <p>This happened for Tacari and Amari Crews. The brothers created a brief instructional video that made connections between belonging and history in their very own way. Only one year apart, they have always shared friend circles and attended the same schools. Part of what makes them stand out is their love of Black history, instilled in them by their grandmother, Linda Fisher—a retired educator who decided to teach again so that she would be in her grandsons' school during their middle school years—who encouraged them to participate in our Black history programs. There the brothers developed an educational video about local Black history on the Royal Seven—a group of Black youth and a Black minister who in 1957 organized a sit-in at the Royal Ice Cream Parlor in Durham. Astoundingly, the Crews brothers' elementary school (Global Scholars Academy) stands on the very site of that historic event. The video includes a brief skit over a game of chess that conveyed their personal connection. The brothers patiently stuck to their goal, even though it took 38 takes!</p>
            <p>Tacari: At first, I wasn't going to do the video. But our grandmother kept pushing and pushing and pushing until we finally agreed to do it. And I'm glad we did!</p>
            <p>The video was later featured in Black and Belonging's HeartBelonging Mixtape Series—a set of instructional videos created by students, during which they express their views on creating interpersonal, instructional, and institutional opportunities to belong. Putting into action our team's "Local is National" philosophy, we shared the videos with educators whom we felt might consider race-reimaging the content in their educational psychology-related courses. We have discovered that professors and university students across the country are using our short videos as instructional tools in courses, finding them approachable, authentic, and engaging. In particular, professors are using the brothers' mixtape video to instruct preservice educators on how to engage students in learning about their own cultural connections to their local community; and after watching it many preservice educators have been encouraged to write down their reflections. A message from Dr. Revathy Kumar (a renowned educational psychology professor and American Psychological Association Division 15 Fellow) illustrates this point:</p>
        `,
  },
  "recruit-the-family-members-and-youth-will-follow-continued": {
    title: "Recruit the Family Members and Youth Will Follow (Continued)", // Added for clarity as a continuation
    pageNumber: "28",
    content: `
            <p>Revathy Kumar: My undergraduate (Applied Psychology) students viewed your mixed tapes and without exception all of them were moved by it. Many stated that these are videos that every teacher should watch.</p>
            <p>After learning of the popularity of her grandson's mixtape video, Ms. Fisher said she was very pleased to hear about the educational impact of their work.</p>
        `,
  },
  "section-7-allow-students-to-explore": {
    title: "Section 7: Allow Students to Explore",
    pageNumber: "29",
    content: `
            <p>Allowing students to explore means creating an environment that encourages open-ended inquiry, creativity, and student-led learning both inside and outside of school. It involves adopting a flexible approach that enables students to take ownership of their experience and actively participate. This approach recognizes that students come with diverse backgrounds, interests, and expertise, and it aims to accommodate and nurture who they are. Instead of imposing a rigid curriculum or a one-size-fits-all approach, it encourages students to ask questions, explore different perspectives, and pursue their curiosities. It also calls for partners to center students' cultural identities.</p>
            <p>At Black and Belonging, we give students opportunities to explore in culturally relevant and sustaining ways, and want them to be able to see themselves in the places and spaces we take them to. Three locations that were especially meaningful for students to explore were the African American Cultural Center (AACC) at North Carolina State University in Raleigh, Provident1898 in Durham, and the National Museum of African American History and Culture in Washington, DC. While in these spaces, we consider their cultural identity as an important aspect of student's engagement and motivation in the project.</p>
            <h3>Cultural Centers</h3>
            <p>The AACC is often our first stop when bringing youth on university visits to a predominantly White institution (PWI). At the AACC youth feel welcomed, and their questions concerning their ability to be successful at PWIs in the future are addressed. Their culture is affirmed through the images on the walls; by the students, faculty, and staff greeting them; and in the activities they engage in (e.g., art exhibitions, panel discussions, guest speakers, Black History Month programming, games, celebrations). These cultural supports signal to students that they can find community and pockets of affirmations even in places that have not been designed for them.</p>
        `,
  },
  "cultural-centers": {
    // Added for explicit page 29 continuation
    title: "Cultural Centers",
    pageNumber: "29",
    content: `
            <h3>Cultural Centers</h3>
            <p>The AACC is often our first stop when bringing youth on university visits to a predominantly White institution (PWI). At the AACC youth feel welcomed, and their questions concerning their ability to be successful at PWIs in the future are addressed. Their culture is affirmed through the images on the walls; by the students, faculty, and staff greeting them; and in the activities they engage in (e.g., art exhibitions, panel discussions, guest speakers, Black History Month programming, games, celebrations). These cultural supports signal to students that they can find community and pockets of affirmations even in places that have not been designed for them.</p>
        `,
  },
  "coworking-spaces": {
    title: "Coworking Spaces",
    pageNumber: "30",
    content: `
            <p>Provident1898 is a coworking community space that is majority Black-owned and led, located in the N.C. Mutual Building in downtown Durham. Once home to the North Carolina Mutual Life Insurance Company, founded in 1898, it was moved in 1906 to an area of Black businesses and financial institutions that was known as Black Wall Street. Provident1898 is a creative hub that offered our students not only a shared workspace, but a space that fueled their creativity. Upon entering the NC Mutual building, there is an exhibit of its history. Included is an account of prominent Black leaders who were influential in Durham during the late 1800s and early 1900s—an often forgotten legacy in their city to be proud of as they work toward fulfilling their own goals for themselves and their community. In the coworking space, which supports creatives, change-makers, and entrepreneurs, our youth networked with leading Durham professionals from their community. Students were invited to work and explore in this aesthetically pleasing environment, surrounded by Black artwork and historic artifacts, fueling their creativity and sparking critical conversations with our youth in organic and meaningful ways.</p>
        `,
  },
  "conferencing-and-tourism": {
    title: "Conferencing and Tourism",
    pageNumber: "30",
    content: `
            <h3>Conferencing and Tourism</h3>
            <p>When possible, find opportunities for youth to explore on a national level. We have traveled with students to California, Chicago, and Philadelphia—but our trip to the nation's capital was particularly significant. Our first stop was to the National Museum of African American History and Culture. When traveling, we allow students to lead the way, so when we arrived at the museum, we split up into groups based on what students wanted to explore, and followed their lead. Usually, students want to try new food and explore shops, but here they were so engaged and curious that there wasn't enough time to take in all they wanted to see and learn. Faces lit up as they recognized people and events that they had learned about in our program. Different from a traditional school field trip to a museum, our students reached new levels of understanding.</p>
        `,
  },
  "youth-exploring-themselves-and-society": {
    title:
      "Youth Exploring Themselves and Society Through Communal Learning Opportunities",
    pageNumber: "31",
    content: `
            <p>Below are four ways we offer communal interactions that foster collaboration, joy, interpersonal connections, and shared learning experiences.</p>
            <ul>
                <li>01. Collaborative activities and play: When planning our activities we work to co-construct liberatory spaces for students to experience joy and play. As they joyfully (and legally) climbed on permitted structures and spray-painted on university campuses, students felt free to just be youth for a while. Playing is particularly necessary, given that youths' play can sometimes be restricted (or reprimanded) based on cultural mischaracterization about the intent behind the way they engage with the world around them. Play can help youth heal from traumas, resist violence, and experience joy and liberation.</li>
                <li>02. Peer teaching and feedback: By encouraging peer teaching we create opportunities for students to explore topics deeply while helping their peers understand complex concepts like belonging. This approach not only reinforces learning for both the peer teacher and the learner but also strengthens bonds within the student community. For example, while preparing for presentations outside of the classroom, students presented to each other and gained valuable feedback and tips, such as how to be more confident while speaking and how to deliver their message in an impactful way.</li>
                <li>03. Community-based projects and competitions: By participating, students explore real-life issues and challenges, including conducting research, organizing events, and collaborating with local organizations. For example, students:
                    <ul>
                        <li>(1) partnered with community organizations to host their own cultural exhibitions in ballroom spaces;</li>
                        <li>(2) connected with local architects and professionals to compete in a national school design competition where they presented their ideas for more equitable school designs to professional architects; and</li>
                        <li>(3) worked with university researchers to design and host a talk show about belonging (which doubled as an opportunity for youth-led data collection).</li>
                    </ul>
                </li>
                <li>04. Digital tools for including more youth voices: Utilizing digital platforms and tools that support collaborative learning—such as social media, shared documents, and group chats—enables students to explore topics asynchronously while interacting with peers in ways that encourage them to engage in multimodal ways. For instance, some shy students did not have much to say in our in-person meetings, but they communicated on a deeper level with digital platforms.</li>
            </ul>
        `,
  },
  conclusion: {
    title: "Conclusion",
    pageNumber: "32",
    content: `
            <p>We conclude with a few final considerations for supporting youth-led initiatives.</p>
            <h3>Step One: Assume the position of the player.</h3>
            <p>What does that mean? In this American football analogy, let's consider you the quarterback. You have many tough tasks ahead! From reading the defense, to calling the plays, to deciding which receiver to throw to—you must consider the things both in your field of vision and outside of it. Unfortunately, your team won't be able to predict every challenge or even anticipate every obstacle you might encounter; but you all can come in prepared with some effective plays that are easily adaptable to a landscape of evolving challenges and opportunities.</p>
            <h3>Step Two: Master the adjustment.</h3>
            <p>In sports, the adjustment refers to how a team (and/or player):</p>
            <ul>
                <li>Adapts the game plan</li>
                <li>Makes a quick, real-time/in-game decision that diffuses the opponent's strategy</li>
                <li>Leverages specific competencies to gain an advantage</li>
            </ul>
            <p>In our work with young people, our successful engagement has never come by sticking rigidly to a plan, but instead by being fluid with change, allowing our team's youth-led initiatives to evolve in response to the needs and progress of our teammates. Just as a football team sometimes needs to adjust its strategy on the fly, project teams must adapt and recalibrate, ensuring that youth partners are true collaborators with the authority to voice their hopes, ideas, and concerns. Below are six examples of lessons we have learned firsthand through a history of wins and losses.</p>
        `,
  },
  "advocate-with-youth-leverage-resources": {
    title: "Final Considerations", // Renamed for brevity in TOC
    pageNumber: "33",
    content: `
            <ul>
                <li>01. Advocate with Youth. Some young people may not be comfortable advocating for themselves. Others may require time to understand that in the spaces you provide, they will be celebrated when they share their original thoughts and ideas. Still others may be very shy. Try supporting youth by co-creating expectations and protocols for addressing communication issues.</li>
                <li>02. Leverage existing resources: Develop a realistic project budget and take inventory of the resources at your disposal. Does the organization have underutilized rooms that can be renovated into a youth-led meeting space that is conducive to free expression? Are there community partners that offer incentives (such as free passes to museums, athletic events, festivals, or movies)? Get creative with youth resources, ask them what they want, and do your best to go out and get it. Design programs and activities especially for them.</li>
                <li>03. Create succession plans and sustainable infrastructure: Cultivate a long-term culture shift that includes youth as true collaborators. Devise internal processes and recruitment strategies that support this commitment over time.</li>
                <li>04. Overcome access barriers to youth under age 24 (e.g., distance, cost, transportation, time of activities, responsibilities at home such as caretaking of siblings): Consider how you will address these barriers, making sure to account for expenses and logistics.</li>
                <li>05. Power dynamics: Programs embedded within a school system (or school day) are subject to the power structures in those spaces. Consider the effects of place and space, and how they might impact a young person's ability to learn, contribute, and ask good questions. What are the trade-offs of operating within these spaces versus building programs with youth outside of these spaces? The key is in achieving clarity on why the approach you have taken is the most effective for your program's goals.</li>
                <li>06. Managing perceptions of time commitment: Projects with youth usually take longer than anticipated. Build in time buffers at intervals to ease the impact of inevitable project delays and other challenges related to completion.</li>
            </ul>
        `,
  },
  "about-the-authors": {
    title: "About the Authors",
    pageNumber: "34",
    content: `
            <p>The B&B Blitz Playbook was developed by a diverse team of experts, researchers, and community advocates dedicated to fostering belonging, equity, and inclusion. Our collective experience spans various sectors, including corporate, non-profit, and academic environments.</p>
            <p><strong>Dr. DeLeon Gray:</strong> As CEO of Black and Belonging, Dr. DeLeon Gray combines his leadership skills with a passion for exposing youth to the social and professional experiences they deserve. In his faculty role as Associate Professor of Educational Psychology and Equity, Dr. Gray has developed doctoral courses on School Belonging; Equity-Focused Quantitative Methods; and Community-Engaged Approaches to Educational Research. Black Enterprise featured Gray as one of 100 men of color who are "living up to a standard of excellence and using their talents and influence in their respective industries to shift the perception of men of color to create and encourage a positive narrative". DeLeon is also a dedicated 20-year member of Alpha Phi Alpha Fraternity, Inc., and currently coordinates their annual Black History Knowledge Bowl for local youth in the Raleigh-Durham area. In his personal life, DeLeon cherishes family events, often sharing the joyous experience of welcoming his Baby Gray into the world with a Black Tie Baby Shower.</p>
            <p><strong>Dr. Joanna Ali:</strong> Dr. Joanna Ali is a Postdoctoral Researcher at North Carolina A&T State University. She holds a doctorate in Teacher Education and Learning Sciences, with a concentration in Educational Psychology from North Carolina State University. She uses an Afrofuturistic lens in her work in order to re-member ancestral wisdom, center cultural knowledge and reimagine liberating futures that offer a powerful vision of freedom and joy for Black and Latina/o/x urban youth. Her scholarship focuses on the development of emancipatory pedagogies and curricula that centers the imagination, creativity and innovation of Black and Brown youth. As a former middle school Educator in urban school districts spanning Los Angeles, CA, and Durham, NC, she brings first hand experience to her research endeavors, ensuring that theory is brought into practice in community engaged ways. She also uses Youth Participatory Action Research (YPAR) methodologies in order to center the voices of youth in her research. She has published several articles and has presented with youth at numerous conferences about students' sense of belonging. Dr. Ali is also the founder of Sol Space, a youth-led collaborative that designs culturally affirming spaces, lessons, workshops, camps and events that center the joy, creativity and healing of Black and Brown youth.</p>
            <p><strong>Kia Allah:</strong> Kia Allah serves as Director of Youth Equity Programming with the Black and Belonging Collaborative where she develops projects which empower urban youth to be critical change agents in their communities. She is a former Spanish teacher, a Graduate Research Assistant with the iScholar team, and current doctoral candidate in Educational Equity at North Carolina State University, with research interests in cultural identity, student belonging, culturally sustaining instructional practices, and student empowerment. Her work highlights the importance of appreciating the diverse experiences and perspectives that Black and Latin@/e students contribute to classroom environments. The experiences she has had as a teacher in urban school districts in Richmond, VA and Durham, NC sparked her passion for uplifting the cultural identities of Black and Latin@/e students.</p>
            <p><strong>Malenia Swinton:</strong> Malenia Swinton is an experienced project manager and community researcher with expertise in strategic planning, K12 out-of-school-time programming, program evaluation, partnership development, communications and marketing, and training design and implementation. Since 2013, Malenia has managed her own consulting business, providing results-oriented services to nonprofits and small businesses on the East Coast. She boxes for fitness, loves Scrabble, cooking (and eating), and thinking.</p>
        `,
  },
  contact: {
    title: "Contact Information",
    pageNumber: "36",
    content: `
            <p>contact@blackandbelonging.com</p>
            <p>www.blackandbelonging.com</p>
            <p>919-593-7730</p>
            <p>Xin @heartbelonging</p>
            <p>Copyright © 2024 Black and Belonging. All rights reserved. No part of this document may be reproduced in any form or by any means, except in the case of brief quotations embodied in reports and certain other noncommercial uses permitted by copyright law. For permission requests, email contact@blackandbelonging.com.</p>
        `,
  },
  // ... Add all other sections from your PDF here following the same structure.
  // Ensure IDs match the tableOfContents entries.
};
