/* BioMation team data, shared by the main site (index.html) and the simulation
   (vaccine-journey_5.html). Edit people, roles, descriptions and photos here. */
(function(){
var TEAM = {
  tech: {
    label: "Tech Team Leads",
    color: "#123a7a",
    blurb: "Transforms research into interactive digital formats — 3D CAD models, animations, and coded experiences — and manages the website and its distribution.",
    members: [
      { name: "Vaishnavi Kalyanashetty", role: "Technology Director & Founder", lead:true, bio: "Leads BioMation's technical work and builds much of it hands-on: managing the entire CAD pipeline, designing a large share of the 3D models, and shaping the website itself.", photo: "images/team/vaishnavi-photo.jpg" },
      { name: "Aashika Kumar", role: "Animation Specialist", bio: "Creates visually engaging animations that turn static research and 3D models into compelling educational content.", photo: "images/team/aashika.png" },
      { name: "Sanshray Vakkalagadda", role: "Software Developer / UI-UX Designer", bio: "Builds the web platforms, interactive apps, and simulations — making sure everything is user-friendly, educational, and visually clean.", photo: "images/team/sanshray.jpg" },
    ]
  },
  research: {
    label: "Research Team Leads",
    color: "#145c36",
    blurb: "Collects and provides cutting-edge research across biological fields, simplifies findings for the visualization teams, and ensures every model and animation is scientifically accurate.",
    members: [
      { name: "Gagana Muralidhar", role: "Research Lead & Founder", lead:true, bio: "Leads BioMation's research and does much of it hands-on: writing many of the project articles across neuroscience, cardiology, genetics, and biomechanics, and keeping every visualization grounded in real science.", photo: "images/team/gagana.jpeg" },
      { name: "Shivika Srivastava", role: "Neurology Lead", bio: "Guides the neuroscience research pipeline, translating complex neural mechanisms into content the software dev team can accurately model and animate.", photo: "images/team/shivika.jpg" },
      { name: "Nitya Anand", role: "Cardiology Lead", bio: "Leads cardiology research, ensuring the anatomy and function behind every heart model and simulation reflects current clinical understanding.", photo: "images/team/nitya.png", photoBg: "#6b6b6b" },
      { name: "Adi Deodhar", role: "Cell Biology Lead", bio: "Drives cell biology research, breaking down cellular structures and processes for the Cell Bio project and future genetics work.", photo: "images/team/adi.png" },
    ]
  },
  outreach: {
    label: "Social Media Leads",
    color: "#8a1f34",
    blurb: "Manages BioMation's public presence, turns research and software dev work into engaging content, and builds relationships with schools, universities, and STEM communities.",
    members: [
      { name: "Ria Jain", role: "Social Media Manager", lead:true, bio: "Plans and schedules content, tracks engagement, and collaborates closely with the Tech and Research teams to keep messaging accurate and exciting.", photo: "images/team/ria jain id photo.jpg" },
      { name: "Akhil Mandaleeka", role: "Social Media Manager", lead:true, bio: "Co-leads social strategy and outreach, coordinating workshops, webinars, and campaigns that connect BioMation with STEM communities.", photo: "images/team/akhil.png" },
    ]
  }
};

var FULL_TEAM = [
  { name: "Vaishnavi Kalyanashetty", team: "Technology", photo: "images/team/vaishnavi-photo.jpg" },
  { name: "Sahana Ramkumar", role: "CAD Modeler", subteam: "CAD", blurb: "Builds detailed 3D CAD models of biological structures for BioMation’s simulations and animations.", team: "Technology", photo: "images/team/sahana.png" },
  { name: "Aashika Kumar", team: "Technology", photo: "images/team/aashika.png" },
  { name: "Sanshray Vakkalagadda", subteam: "Software Dev", team: "Technology", photo: "images/team/sanshray.jpg" },
  { name: "Anirudh J Yadrami", role: "Software Developer", subteam: "Software Dev", blurb: "Helps design and build the BioMation website and its interactive simulations.", team: "Technology", photo: "images/team/Anirudh.JPG.jpeg" },
  { name: "Gagana Muralidhar", team: "Research", photo: "images/team/gagana.jpeg" },
  { name: "Shivika Srivastava", team: "Research", photo: "images/team/shivika.jpg" },
  { name: "Riddhima Ghosh", role: "Neuroscience Researcher", blurb: "Researches the nervous system and turns neuroscience findings into clear, accurate content for BioMation’s projects.", team: "Research", photo: "images/team/riddhima.png" },
  { name: "Aadarshini Anand", role: "Neuroscience Researcher", blurb: "Researches how the brain and nervous system work and helps write BioMation’s neuroscience articles.", team: "Research", photo: "images/team/aadarshini.png" },
  { name: "Adi Deodhar", team: "Research", photo: "images/team/adi.png" },
  { name: "Gurshan Singh", role: "Cell Biology Researcher", blurb: "Researches cell structures and processes and helps write BioMation’s cell biology articles.", team: "Research", photo: "images/team/gurshan.jpeg" },
  { name: "Nitya Anand", team: "Research", photo: "images/team/nitya.png", photoBg: "#6b6b6b" },
  { name: "Shriya Raman", role: "Cardiology Researcher", blurb: "Researches the heart and circulatory system and helps write BioMation’s cardiology articles.", team: "Research", photo: "images/team/shriya.png" },
  { name: "Subhashree Dey Sarkar", role: "Cardiology Researcher", blurb: "Researches cardiovascular health and turns cardiology findings into clear, accurate content for BioMation’s projects.", team: "Research", photo: "images/team/subhashree.png" },
  { name: "Ria Jain", team: "Social Media", photo: "images/team/ria jain id photo.jpg" },
  { name: "Aarnav Ramkumar", role: "Social Media Member", blurb: "Helps create and share BioMation’s posts, turning the team’s research and models into engaging content.", team: "Social Media", photo: "images/team/aarnav.png" },
  { name: "Akhil Mandaleeka", team: "Social Media", photo: "images/team/akhil.png" },
  { name: "Hasita Aela", role: "Social Media Member", blurb: "Designs and shares content that brings BioMation’s research to students and STEM communities online.", team: "Social Media", photo: "images/team/hasita.jpeg" },
];

var GROUP_TEAM = { tech: "Technology", research: "Research", outreach: "Social Media" };
var TEAM_NAMES = { Technology: "Tech Team", Research: "Research Team", "Social Media": "Social Media Team" };
var TEAM_COLORS = { Technology: "#123a7a", Research: "#145c36", "Social Media": "#8a1f34" };

// Everything known about one person, merged from the leads list and the full team list.
function member(name){
  var listed = null, lead = null, team = null;
  for (var i = 0; i < FULL_TEAM.length; i++) if (FULL_TEAM[i].name === name) listed = FULL_TEAM[i];
  Object.keys(TEAM).forEach(function(key){
    TEAM[key].members.forEach(function(m){ if (m.name === name) { lead = m; team = GROUP_TEAM[key]; } });
  });
  if (!listed && !lead) return null;
  listed = listed || {}; lead = lead || {};
  return {
    name: name,
    team: listed.team || team,
    teamName: TEAM_NAMES[listed.team || team],
    color: TEAM_COLORS[listed.team || team],
    subteam: listed.subteam,
    role: lead.role || listed.role,
    description: lead.bio || listed.blurb,
    photo: listed.photo || lead.photo,
    photoBg: listed.photoBg || lead.photoBg
  };
}

window.BM_TEAM = TEAM;
window.BM_FULL_TEAM = FULL_TEAM;
window.BM_member = member;
})();
