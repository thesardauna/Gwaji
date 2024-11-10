from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample data for demonstration purposes
career_data = {
    "city1": ["Software Engineer", "Data Scientist"],
    "city2": ["Marketing Specialist", "Sales Manager"]
}

job_data = {
    "city1": [
        {"title": "Software Engineer", "company": "TechCorp"},
        {"title": "Data Analyst", "company": "Data Solutions"}
    ],
    "city2": [
        {"title": "Marketing Manager", "company": "AdVentures"},
        {"title": "Sales Associate", "company": "RetailHub"}
    ]
}

skills_data = {
    "city1": ["Python", "Machine Learning"],
    "city2": ["Digital Marketing", "Sales Techniques"]
}

@app.route("/recommendations")
def get_recommendations():
    location = request.args.get("location").lower()
    career_paths = career_data.get(location, [])
    job_vacancies = job_data.get(location, [])
    skills_forecast = skills_data.get(location, [])
    return jsonify({
        "careerPaths": career_paths,
        "jobVacancies": job_vacancies,
        "skillsForecast": skills_forecast
    })

if __name__ == "__main__":
    app.run(debug=True)
