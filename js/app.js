window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        alert("Message sent, we'll get back to you shortly");
        form.reset();
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  });
});
