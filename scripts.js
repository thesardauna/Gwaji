function getRecommendations() {
    const location = document.getElementById("location").value;
    fetch(`http://localhost:5000/recommendations?location=${location}`)
        .then(response => response.json())
        .then(data => {
            displayCareerPaths(data.careerPaths);
            displayJobVacancies(data.jobVacancies);
            displaySkillsForecast(data.skillsForecast);
        })
        .catch(error => console.error("Error fetching recommendations:", error));
}

function displayCareerPaths(careers) {
    const careerList = document.getElementById("career-list");
    careerList.innerHTML = careers.map(career => `<li>${career}</li>`).join("");
}

function displayJobVacancies(jobs) {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = jobs.map(job => `<li>${job.title} at ${job.company}</li>`).join("");
}

function displaySkillsForecast(skills) {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");
}
