document
  .getElementById("User-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate day
    if (day < 1 || day > 31) {
      alert("Please enter a valid day between 1 and 31.");
      return;
    }

    // Validate month
    if (month < 1 || month > 12) {
      alert("Please enter a valid month between 1 and 12.");
      return;
    }

    // Validate year
    if (year < 1900 || year > 2025) {
      alert("Please enter a valid year between 1900 and 2025.");
      return;
    }

    // Validate gender
    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    // Calculate the century (CC) and year digits (YY)
    const CC = Math.floor(year / 100); // Get the century digits
    const YY = year % 100; // Get the year digits

    // Calculate the day of the week using the given formula
    const dayOfWeek =
      Math.floor(
        CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day
      ) % 7;

    // Adjust dayOfWeek to always be positive
    const dayIndex = (dayOfWeek + 7) % 7;

    // Akan names for males and females
    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"],
    };

    // Determine the Akan name based on gender and day of the week
    const akanName =
      gender === "male" ? akanNames.male[dayIndex] : akanNames.female[dayIndex];

    // Display the result
    document.getElementById(
      "results"
    ).textContent = `Your Akan name is: ${akanName}`;
  });
