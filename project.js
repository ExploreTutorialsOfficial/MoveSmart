const getPlanBtn = document.getElementById("get-plan-btn");
const responseDiv = document.getElementById("response");

getPlanBtn.addEventListener("click", async () => {
  const fitnessGoal = document.getElementById("fitness-goal").value;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const diet = document.getElementById("diet").value;
  const gender = document.getElementById("gender").value;
  const health = document.getElementById("health").value;

  const userMessage = `I'm a pure ${diet} wanting to ${fitnessGoal} of age ${age} weighing ${weight} kgs and of gender ${gender}. ${health}. Give me the perfect diet plan, tailored workout suggestions, nutritional advice, and progress tracking according to my gender, weight, age, diet, fitness goal and especially health condition. (dont send any message related to health condition if not specified and no unhealthy foods. and also fish is not considered vegetarian)`;

  responseDiv.textContent = "Loading... Just a second..."; 

  responseDiv.style.overflowY = "scroll";
  responseDiv.style.transition = "max-height 0.5s ease";
  
  const recommendations = await getRecommendations(userMessage);
  responseDiv.textContent = recommendations;
});

const getRecommendations = async (message) => {

  const API_KEY = "AIzaSyCh-1USGwarweT-Wd89ojNk_NQNRkP7hdk"; 
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        role: "user",
        parts: [{ text: message }]
      }]
    }),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    return data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\n/g, '\n\n');
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

function refreshPage() {
  location.reload(); // Reload the current page
}
