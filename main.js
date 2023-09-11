function collectFormData() {
    let navnValue = document.getElementById("Navn").value;
    let etternavnValue = document.getElementById("Etternavn").value;
    let adresseValue = document.getElementById("Adresse").value;
    let postnummerValue = document.getElementById("Postnummer").value;
    let poststedValue = document.getElementById("Poststed").value;
    let telefonnummerValue = document.getElementById("Telefonnummer").value;
    let passordValue = document.getElementById("Passord").value;

    let isPasswordValid = validatePassword(passordValue);

    if (isPasswordValid) {
        // Password is valid, proceed with form submission
        let formData = [
            navnValue,
            etternavnValue,
            adresseValue,
            postnummerValue,
            poststedValue,
            telefonnummerValue,
            passordValue
        ];

        console.log(formData);

        // Display a success message
        alert("Svar godkjent");
        let submittedDataDiv = document.getElementById("submittedData");
        submittedDataDiv.innerHTML = "<h2>Svar:</h2>";

        // Create a list to display the form data
        let ul = document.createElement("ul");
        formData.forEach(function (value) {
            let li = document.createElement("li");
            li.textContent = value;
            ul.appendChild(li);
        });

        submittedDataDiv.appendChild(ul);

    } else {
        // Display a message indicating the password requirements
        document.getElementById("passwordMessage").innerText = "Passordet må være minst 10 tegn langt og inneholde minst en stor bokstav, en liten bokstav, ett tall og ett spesialtegn.";
    }
}

function validatePassword(password) {
    // Password should be at least 10 characters long
    // Should contain at least one uppercase letter
    // Should contain at least one lowercase letter
    // Should contain at least one digit
    // Should contain at least one special character
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    return passwordRegex.test(password);
}