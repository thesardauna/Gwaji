document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = parseInt(document.getElementById('gender').value);

    // Music recommendation logic (Simple Decision Tree)
    let genre;
    if (age <= 20) {
        genre = gender === 1 ? 'HipHop' : 'Pop';
    } else if (age <= 30) {
        genre = gender === 1 ? 'Jazz' : 'Classical';
    } else {
        genre = 'Rock';
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Hello ${name} from ${school}, we recommend: ${genre}`;
});
