

var bio = {
    "name": "Juan Rivera",
    "role": "Web Developer",
    "contacts": {
        "mobile": "222-555-5555",
        "email": "juanriv45@gmail.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Dallas, Texas"
    },
    "welcomeMessage": "Hello there",
    "skills": [
        "awesomeness",
        "keeping it real",
        "fast learner",
        "friendly"
    ],
    "bioPic": [
        "images/moonMan.jpg"
    ]
};

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);


	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattebioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattebioPic);

	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	};
};

bio.display();

var education = {
    "schools": [
        {
            "name": "Texas A&M University",
            "degree": "Bachelors in Business Administration",
            "dates": "2008-2012",
            "location": "College Station, Texas",
            "major": "Finance"
        },
        {
            "name": "Udacity",
            "degree": "Nanodegree",
            "dates": "2014-2015",
            "location": "Mountain View, California",
            "major": "Front-End Web Developer"
        }
    ]
};

education.display = function(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
};

education.display();

var work = {
    "jobs": [
        {
            "employer": "Daily Planet",
            "title": " Columnist",
            "dates": "2008-2012",
            "location": "New York, New York",
            "description": "Superman in disguise"
        },
        {
            "employer": "America",
            "title": "Captain",
            "location": "Irving,Texas",
            "dates": "2008-2012",
            "description": "Save the world and lead the Avengers!"
        }
    ]
};

work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 	$(".work-entry:last").append(formattedworkLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 	$(".work-entry:last").append(formattedDescription);
	}
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
	}
);

work.display();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
};

var projects = {
	"projects": [
		{
			"title":"Nanodegree Project 1",
			"dates" : "2014",
			"description": "Here is the header of the HTML project I turned in for the Udacity Frotn-End Web Developer Nanodegree",
			"images": ["images/JuanProject1.jpg"]
		}
	]
};

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);