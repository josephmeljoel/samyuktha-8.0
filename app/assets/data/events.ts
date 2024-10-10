"use client";

import { link } from "fs";

var EventData = [
  {
    id: 1,
    url: "/spotdance.jpg",
    event_name: "Disco Frenzy",
    event_alternative_name: "SPOT DANCE",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagDkKb4B3WekCKwZ/form",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Antony Sebastian",
    head_phonenumber_1: "9496940988",
    head_name_2: "Lakshmi S Nair",
    head_phonenumber_2: "9497295391",
    first:"4000",
    second:"2000",
    description:
      "Get ready to dance your heart out at the most electrifying event of Samyuktha! Spot Dance is a thrilling and unique dance competition that encapsulates the essence of spontaneity, creativity, and the sheer love for dancing.It's your chance to shine, showcase your dancing skills, and be the star of the moment. Participants are given a surprise track, and they must instantly sync their moves to the music. The result is a captivating display of spontaneous choreography and unscripted emotions that thrill both the dancers and the audience. Get ready to be wowed by Spot Dance where rhythm meets spontaneity!",
    rules: [
      "This is an individual event, Open for both UG and PG students.",
      "Time limit for first round will be 5 minutes and second round will be 2 minutes.",
      "Participants will not be having any choice for the songs to be stepped up.",
      "First round : It will be Mixed Groove. Participant has to dance for the fusion tracks played in background, which will be changing randomly.",
      "Second round : It will be Property Round. The property round where 8 unique properties will be kept on stage out of which the participants should be use at least 3ps. Participants are not allowed to use any props other than those provided in the Property Round.",
      "Both round in which we will be giving a mix of songs and the participates have to dance to that.",
      "Participants must always be ready to perform for 3 minutes prior to their scheduled time.",
      "Participants will be judged on: Authenticity, clarity of steps, and timing. Sharpness in the steps (e.g. pointing of legs and hands). Clarity of theme.",
      "There can be multiple entries from a college.",
    ],
  },
  {
    id: 2,
    url: "/event2.jpg",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagCdWruCgYHjKQbm/form",
    event_name: "Flashback Frames",
    event_alternative_name: "REELS",
    registeration_fee: 50,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Sharon Shiju",
    head_phonenumber_1: " 8139090192",
    head_name_2: "Albin V Johnson",
    head_phonenumber_2: "9496161839",
    first:"2000",
    second:"1000",
    description:"The relentless river that flows, untamed by mortal hands. It slips through our fingers, marking our past, present, and future. In its embrace, memories fade, moments are seized, and life's journey unfolds. Explore the ephemeral beauty and unyielding march of time in this mesmerizing 30-second reel.",
    rules: [
      "- The reel should be based the given theme : TIME",
"- For each participant, will accept only one entry, and a second entry will lead to disqualification.",
"- Individual, as well as group entries (not more than 4 people), are allowed.",
"- The reel must be original creation; Plagiarized content lead to disqualification",
"- We reserve the right to bar Entries for containing any infringing, threatening, misleading, false, abusive, harassing, defamatory, obscene, vulgar, inflammatory, scandalous, pornographic or profane content.",
"- As per Reel format, the video should be made vertically and not horizontally.",
"- Participants shall send their videos of not more than 40MB",
"- Participants can upload their videos on a drive and share the link of the drive in the mail id: samyuktha7.0reel30s@saintgits.org",
"- Any Reel received after October 23th 2023, 11:59 PM, will not be considered for the Competition.",
"- The screening round will be based on the message imparted by the reel based on the given theme.",
"- The screening round will be based on the message imparted by the reel based on the given theme",
"- TOP 5 Winners will be decided after the judgment of the evaluation panel",
"- The top 5 reels will be posted on instagram after the screening for 24 hours.",
"- With 75% of the weightage given to the scores based on the screening round and 25% weightage given to the Instagram metrics (likes), the winner will be declared.",
"- The decision of the Judging panel will be final",
    ],
  },
  {
    id: 3,
    url: "/gaming.jpg",
    event_name: "Zeus Odyssey",
    event_alternative_name: "GAMING",
    registeration_fee: 50,
    event_type_1: "Technical",
    event_type_2: "Single",
    head_name_1: "Mathew Paul",
    head_phonenumber_1: "8547423887",
    head_name_2: "Sandeep Suresh R",
    head_phonenumber_2: "9567862431",
    first:"6000",
    second:"--",
    description:"Get ready to dive into the ultimate gaming experience at our Cultural Festival’s Zeus Odyssey : Gaming Tournament! Whether you’re a casual gamer or a pro, this event has something for everyone. We have curated a lineup of the most exciting and popular games, including Valorant. It’s your chance to show off your gaming skills, strategize with your squad, and compete against the best!"  ,
    rules: [
    "-All participants must register for the event before the given deadline. Late registrations will not be accepted.",
		"-Participants must be students or affiliated with the hosting institution or must meet the event’s specific eligibility criteria.",
	  "-Depending on the game, teams may consist of 1 to 5 players.",
	  "-The list of games to be played will be announced beforehand. Participants must be familiar with the game rules and controls.",
	  "-All participants must be present 15 minutes before the match to set up their gaming equipment (if required) and test the settings.",
	  "-Respectful behavior is mandatory. Any form of abusive language, harassment, or unsportsmanlike conduct will result in disqualification.",
      
    ],
  },
    {
    id: 4,
    url: "/ideathon.jpg",
    event_name: "Neon Nexus",
    event_alternative_name: "IDEATHON",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagWkmbmzQmQipEiV/form",
    registeration_fee: 100,
    event_type_1: "Technical",
    event_type_2: "Group",
    head_name_1: "Alen T Binu",
    head_phonenumber_1: "7558066581",
    head_name_2: "Nithin JK",
    head_phonenumber_2: "8547433566",
    first:"4000",
    second:"2000",
    description:
      "Get ready to unleash your creative genius in the upcoming Ideathon competition! With a dynamic theme unveiled on the competition day, it's your chance to tackle real-world problems head-on. Craft your innovative solutions and present them in a concise 10-slide PowerPoint presentation. The clock is ticking with a tight 3-hour submission, so don't miss the opportunity to showcase your problem-solving skill and make a real impact! Join us for a thrilling intellectual challenge in the Ideathon where your ideas shape the future.",

    rules: [
      "A team can have 24 members",
      "The decision of the judging panel will be final.",
      "The organizing committee has the rights to make changes to the event.",
      "The event is only for PG and UG students other than Engineering stream.",
      "The selection will be based on preliminary round",
      "All teams should bring their own Laptops and other required Gadgets",
      "The competition will have a specific theme or problem statement that the teams need to address through their idea. The theme will be announced on the day of the competition.",
      "Each team must submit their idea in a PowerPoint. The submission should be no longer than 10 slides and must include a title slide, problem statement, solution, implementation plan, and any necessary visuals. The deadline for submission will be 3 hours from the start of the competition.",
      "Each team shall be allotted 5 minutes for presentation.",
      "The presentation shall be followed by a Q/A round where the judges shall pose questions regarding the presentation.",
      "Copying of ideas is strictly prohibited.",
      "Judging will be based on innovativeness and feasibility of the presented idea.",
      "Rules are subjected to change by committee members if certain criteria(s) are not met.",
    ],
  },
  {
    id: 5,
    url: "/event5.jpg",
    event_name: "Rampage Rush",
    event_alternative_name: "FAST TYPING",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pag72IsyJlcal2C4I/form",
    registeration_fee: 50,
    event_type_1: "Technical",
    event_type_2: "Single",
    head_name_1: "Aben B John",
    head_phonenumber_1: "  95444 53174",
    head_name_2: "Renit Chacko",
    head_phonenumber_2: "9562308696",
    first:"2000",
    second:"1000",
    description:
      "Get ready to put your typing skills to the test in the ultimate keyboard showdown! Test your typing skills, reflexes, and accuracy as you race against the clock and fellow participants.Bring your A-game to the keyboard and showcase your lightning-fast typing prowess in this thrilling event. Prizes await the fastest fingers, so don't miss your chance to be crowned the typing champion of our fest!",
    rules: [
      "This is an individual event, Open for both UG and PG students (not for BTECH)",
      "Time limit per participants will be 5 minutes.",
      "Only selected participants can perform in round 2.",
      "Round 1: Medium Text , Time 5 minutes.",
      "Round 2: Hard Text, Time 5 minutes.",
      "The event is conducted on online platform , Participants will be provided with a computer machine.",
      "Decision is based on the accuracy and words per minute.",
      "Decision of judges will be final.",
      "College ID is mandatory.",
    ],
  },
  {
    id: 6,
    url: "/event6.jpg",
    event_name: "Yenme Echoes",
    event_alternative_name: "BEST SINGER",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagzqFUCUzr7wNme8/form",
    registeration_fee: 50,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Naveen Prince Thomas",
    head_phonenumber_1: "9188327753",
    head_name_2: "Bency George",
    head_phonenumber_2: "8750605951",
    first:"3000",
    second:"2000",
    description:
      "Get ready for the sensational Singers Seance competition at Samyuktha 7.0, where vocal virtuosos will shine! This individual event welcomes both undergraduate and postgraduate students to showcase their singing prowess. With a strict 5-minute time limit and the exclusion of accompanying instruments and microphones, it's all about the pure voice. Participants will enchant in two riveting rounds, starting with the classical/melody segment using karaoke in the preliminaries and then rocking the stage with fast beats songs of their choice in the finals. Spot registrations are allowed, but remember to share your music tracks in mp3 format at least 45 minutes before the rounds begin. The judges' decisions will ultimately crown the Best Singer of Samyuktha8.0!",
    rules: [
      "Open for both UG and PG students.",
      "Only registered students will be allowed to participate.",
      "No accompanying instruments will be allowed.",
      "Time limit for performance is 5 minutes.",
      "Repetition of songs will not be allowed.",
      "Participant must use karaoke for performance",
      "Preliminary round (Participants have to sing classical/melody songs of his/her choice with karaoke).",
      "Finals (Participants have to sing fast beats songs of his/her choice with karaoke.",
      "Spot registration will be allowed.",
      "Participants must share the required music track for both rounds in mp3 format at least 45 minutes before commencement of rounds.",
      "The decisions of judges will be final.",
    ],
  },
  {
    id: 7,
    url: "/event6.jpg",
    event_name: "Binary brain busters",
    event_alternative_name: "TECHNICAL QUIZ",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pag5HFf33HKnc6gGl/form",
    registeration_fee: 100,
    event_type_1: "Technical",
    event_type_2: "Group",
    head_name_1: "Jayaraj J Pillai",
    head_phonenumber_1: " 7510977535",
    head_name_2: "Devika Rajeev",
    head_phonenumber_2: "8281086599",
    first:"2500",
    second:"1500",
    description:
"Welcome to our technical quiz! We're excited to embark on a journey of knowledge and problem-solving with you. This quiz will test your technical expertise and critical thinking in various domains, from engineering to computer science. Whether you're a student, a tech enthusiast, or a professional, we hope you find this experience both enjoyable and enriching. Let's dive into the world of technology and explore the depths of your technicalknowledge!" ,
rules: [
  "- Single participation or group of 2 will be determined according to the number of members for the event.",
"- There will be no screening round.",
"- All the participants can play all the rounds.",
"- There will be a total of 2 rounds.",
"- First round will be provided with 5 topics. Each containing 5 questions.",
"- The participants can choose any 1 among them.",
"- The average score derives from the rounds and the winner will be declared.",
"- There will be certain time span for each round.",
"- If there is any tie up among the participants about average score, it will be solved by taking another round.",
"- Rules and Regulations can be change on time which will depend upon circumstances and number of entries,",
],  
  },
{
    id: 8,
    url: "/event6.jpg",
    event_name: "Classic conclave",
    event_alternative_name: "PAPER PRESENTATION",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Gowri Anil Kumar",
    head_phonenumber_1: "8590382681",
    head_name_2: "Govind S Jayan",
    head_phonenumber_2: "9496996050",
    first:"3000",
    second:"2000",
    description:"Welcome to Classic Conclave, the flagship paper presentation event of our cultural fest, where ideas converge and innovation takes the stage. This event is designed for thinkers, innovators, and scholars who seek to share their research, findings, and perspectives with a broader audience. It is an opportunity to showcase your intellectual prowess, communicate your ideas effectively, and engage with peers who are as passionate about technology and creativity as you are." ,

    rules: [
      "-Participants must register for the event within the given time frame.",
	    "-Team Size: Usually, the team can have a maximum of 2-3 members, but solo presentations are often allowed as well.",
	    "-Topic Relevance: The topic should align with the themes provided by the organizers. Topics could be related to technology, innovation, science, and sometimes even cultural impact.",
      "-Original Work: The work presented must be original. Plagiarized content can lead to disqualification.",
	    "-Language: English is generally the preferred language for the presentation, unless specified otherwise.",
    ], 
  },
  {
    id: 9,
    url: "/event6.jpg",
    event_name: "old school kickoff",
    event_alternative_name: "FOOTBALL",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagI1pbTsDxDUIbd4/form",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Group",
    head_name_1: "Deron Babu",
    head_phonenumber_1: "9947292171",
    head_name_2: "Prince P Saji",
    head_phonenumber_2: "7559963231",
    first:"3500",
    second:"1500",
    description:
      "An electrifying spectacle that unites students and fans alike. The field is a vibrant battleground where talent, passion, and team spirit collide. The cheers of the crowd reverberate through the campus, creating an atmosphere of exhilaration and camaraderie. Students come together to celebrate their love for the sport, showcasing their skills and dedication. From thrilling matches to halftime entertainment, the college fest football event is a vibrant display of youthful enthusiasm and the perfect platform to witness the next generation of soccer stars in action.",
    rules: [
      "A team can roster a maximum of 5 players. Three field players and two substitutes.",
      "Participants must carry their college ID card.",
      "Football boots are compulsory.",
      "The duration of the football match is 14 minutes.",
      "Match substitutions during the game are not limited or rolling substitutions are allowed.",
      "In all dead-ball situations, defending players must stand at least five yards away from the ball.",
      "In their own D-box, players are not allowed to touch the ball",
      "Ball contact is prohibited above the waist.",
      "Slide tackling and headers are not allowed.",
      "Penalty kicks are taken from the center of the midfield line.",
      "Referee's decisions are final.",
    ],
  },
  {
    id: 10,
    url: "/event6.jpg",
    event_name: "polaroid perspective",
    event_alternative_name: "PHOTOGRAPHY",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagcWo8eUATvak49i/form",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Ashwin Baburaj",
    head_phonenumber_1: "8129294508",
    head_name_2: "Amruth k siby",
    head_phonenumber_2: "9400164748",
    first:"2000",
    second:"1000",
    description:
"Join us for an enchanting journey through your lens at the POLAROID PERSPECTIVE photography event. Unleash your creativity with mobile cameras, DSLRs, SLRs, or digital cameras to capture the eerie and mystical. Remember, in this competition, editing and filtering.",
    rules: [
     "- Participants should complete the registration and report to the venue at 10 am.",
"- Candidates should bring their college id for registration.",
"- Theme for the contest will be given by the committee members after the registration.",
"- Participants can use mobile cameras, DSLR, SLR or Digital cameras.",
"- Editing and filtering are not allowed.",
"- Participants should bring formatted memory card.",
"- Candidate can submit only one photograph.",
"- Photos taken from inside the college premises are only allowed.",
"- The photograph should be submitted in jpeg format to the provided mail id.",
"- The contest duration will be from 10.30 am to 2.00 pm.",
    ],
  },
  {
    id: 11,
    url: "/event6.jpg",
    event_name: "binary arcade",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagrutAV7m6J2e463/form",
    event_alternative_name: "CODING",
    registeration_fee: 100,
    event_type_1: "Technical",
    event_type_2: "Single",
    head_name_1: "Sneha Susan Rajesh",
    head_phonenumber_1: " 8547914287",
    head_name_2: "Sneha Biju",
    head_phonenumber_2: "7902385929",
    first:"3000",
    second:"2000",
    description:
"Join us at Codecrypt for an exhilarating coding event that will put your programming prowess to the test! This thrilling event is tailored for students passionate about programming and technology. Test your coding skills, problem-solving prowess, and creativity in a series of exciting challenges. Whether you're a novice or a seasoned coder, there's a place for you. Don't miss this opportunity to showcase your coding prowess and celebrate the spirit of innovation at Codecrypt!"  ,
rules: [
  "- You will be provided with a computer machine.",
"- The decision of the judging panel will be final.",
"- The organizing committee has the rights to make changes to the event.",
"- Event is only for UG students of non-engineering courses.",
"- College ID is mandatory.",
"- Preliminary round : Aptitude test with 20 questions (Elimination)",
"- Final round Problem solving",
 ],
},
  {
    id: 12,
    url: "/event6.jpg",
    event_name: "back to the browser",
    event_alternative_name: "WEB DESIGNING",
    registeration_fee: 100,
    link: "https://airtable.com/appgHAVetgIyskG9Q/pag4S9PFH1Tm4Y0cO/form",
    event_type_1: "Technical",
    event_type_2: "Single",
    head_name_1: "Joseph Mel Joel",
    head_phonenumber_1: "9946899977",
    head_name_2: "Arjun JS",
    head_phonenumber_2: "6238745782",
    first:"4000",
    second:"2000",
    description:
      "EIEREE Interface isn't your typical web design competition. We're turning up the excitement by challenging you to think on your feet and adapt to unexpected creative twists. Imagine being presented with a surprise theme or constraint, and within a limited time, crafting a web design that dazzles. This contest isn't just about static websites; it's a dynamic showcase of your ability to innovate, improvise, and design web experiences that captivate. EIEREE Interface is where web design meets creativity in its most spontaneous form, and we invite you to be part of this thrilling designing adventure.",
    rules: [
      "The competition is about designing the layout of a website based on a theme.",
      "Team event consist of maximum 2 members per team.",
      "Participants will have to finish their coding within 2 hours.",
      "Use of internet and any kind of storage medium is strictly prohibited.",
      "Round 1: Aptitude. (Elimination round according to the number of participants)",
      "Round 2: Designing Round.",
      "Languages : HTML, CSS, JavaScript",
      "The event is only for MCA, BCA, M.SC Computer Science and B.SC Computer Science students.",
      "Decision of judges will be final.",
    ],
  },
  {
    id: 13,
    url: "/event6.jpg",
    event_name: "secret expedition",
    event_alternative_name: "TREASURE HUNT",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagUlgcz5jfwCYKCX/form",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Group(4)",
    head_name_1: "Pranav K Manoj",
    head_phonenumber_1: "9048930995",
    head_name_2: "Sneha Thomas",
    head_phonenumber_2: "9633761142",
    first:"4000",
    second:"2000",
    description:
      "Embark on an exhilarating journey through the mysterious and spooky world of 'Samyuktha' with our Treasure Hunt event. Prepare to put your problem-solving skills to the test as you follow cryptic clues, solve riddles, and uncover hidden treasures. It's a thrilling adventure where participants must work in teams, using their wit and creativity to navigate through a series of challenges.",
    rules: [
      "Each team comprises 2 to 4 members.",
      "The team members cannot change their team.",
      "Participants should carry their college ID card.",
      "The clues are to be found in a particular order. Manipulation of the clues will lead to disqualification. The participants do not have the right to replace or manipulate others clues.",
      "Organizers have the right to disqualify the teams on the grounds for misbehaviour and the use of unfair means. Their decision is final and not subject to dispute.",
      "Use of mobile phones in between the competition is strictly prohibited.",
      "Interaction between other team members in between the competition is not allowed.",
      "The event will be organized in two rounds initially, there is a possibility of adding more rounds based on the number of participants.",
    ],
  },
  {
    id: 14,
    url: "/event6.jpg",
    event_name: "noval ux of solaris",
    event_alternative_name: "STAR OF SAMYUKTHA",
    registeration_fee: 100,
    link: "https://airtable.com/appgHAVetgIyskG9Q/pag0UrI1X4havGeQH/form",
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Abel Mathew Abraham",
    head_phonenumber_1: "8129317480",
    head_name_2: "Sarath S Nair",
    head_phonenumber_2: "7560911621",
    first:"5000",
    second:"2000",
    description:
      "Elevate the Extraordinary: Star of Samyuktha is a platform where we shine a spotlight on individuals whose talents transcend traditional boundaries. From technical prowess to creative flair, we celebrate the extraordinary diversity of skills that make them true standouts. Join us for a one-of-a-kind showcase of talent that knows no limits!.",

    rules: [
      "Any number of contestants from a college can participate in the event",
      "There will be 2 rounds of the competition based on which participants will be judged",
      "Contestants are not permitted to carry mobile phones or any type of electronic devices.",
      "The organizing committee takes the privilege of disqualifying a participant if he/she is found duplicitous",
      "Further information will be provided at the time of the participation.",
    ],
  },
];

const FeaturedEvents = [
  {
    id: 14,
    url: "/event6.jpg",
    event_name: "noval ux of solaris",
    event_alternative_name: "STAR OF SAMYUKTHA",
    registeration_fee: 100,
    link: "https://airtable.com/appgHAVetgIyskG9Q/pag0UrI1X4havGeQH/form",
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Abel Mathew Abraham",
    head_phonenumber_1: "8129317480",
    head_name_2: "Sarath S Nair",
    head_phonenumber_2: "7560911621",
    first:"5000",
    second:"2000",
    description:
      "Elevate the Extraordinary: Star of Samyuktha is a platform where we shine a spotlight on individuals whose talents transcend traditional boundaries. From technical prowess to creative flair, we celebrate the extraordinary diversity of skills that make them true standouts. Join us for a one-of-a-kind showcase of talent that knows no limits!.",

    rules: [
      "Any number of contestants from a college can participate in the event",
      "There will be 2 rounds of the competition based on which participants will be judged",
      "Contestants are not permitted to carry mobile phones or any type of electronic devices.",
      "The organizing committee takes the privilege of disqualifying a participant if he/she is found duplicitous",
      "Further information will be provided at the time of the participation.",
    ],
  },
  {
    id: 13,
    url: "/event6.jpg",
    event_name: "secret expedition",
    event_alternative_name: "TREASURE HUNT",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagUlgcz5jfwCYKCX/form",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Gropu(4)",
    head_name_1: "Pranav K Manoj",
    head_phonenumber_1: "9048930995",
    head_name_2: "Sneha Thomas",
    head_phonenumber_2: "9633761142",
    first:"4000",
    second:"2000",
    description:
      "Embark on an exhilarating journey through the mysterious and spooky world of 'Samyuktha' with our Treasure Hunt event. Prepare to put your problem-solving skills to the test as you follow cryptic clues, solve riddles, and uncover hidden treasures. It's a thrilling adventure where participants must work in teams, using their wit and creativity to navigate through a series of challenges.",
    rules: [
      "Each team comprises 2 to 4 members.",
      "The team members cannot change their team.",
      "Participants should carry their college ID card.",
      "The clues are to be found in a particular order. Manipulation of the clues will lead to disqualification. The participants do not have the right to replace or manipulate others clues.",
      "Organizers have the right to disqualify the teams on the grounds for misbehaviour and the use of unfair means. Their decision is final and not subject to dispute.",
      "Use of mobile phones in between the competition is strictly prohibited.",
      "Interaction between other team members in between the competition is not allowed.",
      "The event will be organized in two rounds initially, there is a possibility of adding more rounds based on the number of participants.",
    ],
  },
  {
    id: 10,
    url: "/event6.jpg",
    event_name: "polaroid perspective",
    event_alternative_name: "PHOTOGRAPHY",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagcWo8eUATvak49i/form",
    registeration_fee: 100,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Ashwin Baburaj",
    head_phonenumber_1: "8129294508",
    head_name_2: "Amruth k siby",
    head_phonenumber_2: "9400164748",
    first:"2000",
    second:"1000",
    description:
"Join us for an enchanting journey through your lens at the POLAROID PERSPECTIVE photography event. Unleash your creativity with mobile cameras, DSLRs, SLRs, or digital cameras to capture the eerie and mystical. Remember, in this competition, editing and filtering.",
    rules: [
     "- Participants should complete the registration and report to the venue at 10 am.",
"- Candidates should bring their college id for registration.",
"- Theme for the contest will be given by the committee members after the registration.",
"- Participants can use mobile cameras, DSLR, SLR or Digital cameras.",
"- Editing and filtering are not allowed.",
"- Participants should bring formatted memory card.",
"- Candidate can submit only one photograph.",
"- Photos taken from inside the college premises are only allowed.",
"- The photograph should be submitted in jpeg format to the provided mail id.",
"- The contest duration will be from 10.30 am to 2.00 pm.",
    ],
  },
  {
    id: 6,
    url: "/event6.jpg",
    event_name: "Yenme Echoes",
    event_alternative_name: "BEST SINGER",
    link: "https://airtable.com/appgHAVetgIyskG9Q/pagzqFUCUzr7wNme8/form",
    registeration_fee: 50,
    event_type_1: "Cultural",
    event_type_2: "Single",
    head_name_1: "Naveen Prince Thomas",
    head_phonenumber_1: "9188327753",
    head_name_2: "Bency George",
    head_phonenumber_2: "8750605951",
    first:"3000",
    second:"2000",
    description:
      "Get ready for the sensational Singers Seance competition at Samyuktha 7.0, where vocal virtuosos will shine! This individual event welcomes both undergraduate and postgraduate students to showcase their singing prowess. With a strict 5-minute time limit and the exclusion of accompanying instruments and microphones, it's all about the pure voice. Participants will enchant in two riveting rounds, starting with the classical/melody segment using karaoke in the preliminaries and then rocking the stage with fast beats songs of their choice in the finals. Spot registrations are allowed, but remember to share your music tracks in mp3 format at least 45 minutes before the rounds begin. The judges' decisions will ultimately crown the Best Singer of Samyuktha8.0!",
    rules: [
      "Open for both UG and PG students.",
      "Only registered students will be allowed to participate.",
      "No accompanying instruments will be allowed.",
      "Time limit for performance is 5 minutes.",
      "Repetition of songs will not be allowed.",
      "Participant must use karaoke for performance",
      "Preliminary round (Participants have to sing classical/melody songs of his/her choice with karaoke).",
      "Finals (Participants have to sing fast beats songs of his/her choice with karaoke.",
      "Spot registration will be allowed.",
      "Participants must share the required music track for both rounds in mp3 format at least 45 minutes before commencement of rounds.",
      "The decisions of judges will be final.",
    ],
  },
];

export { FeaturedEvents, EventData };
