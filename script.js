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

    // Save entry to localStorage
    const entry = { name, school, age, gender: gender === 1 ? 'Male' : 'Female', genre };
    const records = JSON.parse(localStorage.getItem('records')) || [];
    records.push(entry);
    localStorage.setItem('records', JSON.stringify(records));

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Hello ${name} from ${school}, we recommend: ${genre}`;

    // Refresh the records display
    displayRecords();
});

// Function to display records
function displayRecords() {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const recordsTable = document.getElementById('records-table');

    // Clear existing table rows
    recordsTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>School</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Recommended Genre</th>
        </tr>
    `;

    // Add rows for each record
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.school}</td>
            <td>${record.age}</td>
            <td>${record.gender}</td>
            <td>${record.genre}</td>
        `;
        recordsTable.appendChild(row);
    });
}

// Display records on page load
document.addEventListener('DOMContentLoaded', displayRecords);
