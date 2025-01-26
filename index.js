document
  .getElementById("User-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    if (day < 1 || day > 31) {
      alert("Please enter a valid day between 1 and 31.");
      return;
    }

    if (month < 1 || month > 12) {
      alert("Please enter a valid month between 1 and 12.");
      return;
    }

    if (year < 1900 || year > 2025) {
      alert("Please enter a valid year between 1900 and 2025.");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const dayOfWeek =
      Math.floor(
        CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day
      ) % 7;

    const dayIndex = (dayOfWeek + 7) % 7;

    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"],
    };

    const akanName =
      gender === "male" ? akanNames.male[dayIndex] : akanNames.female[dayIndex];

    document.getElementById(
      "results"
    ).textContent = `Your Akan name is: ${akanName}`;
  });
