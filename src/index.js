function displayPoem(response){
    console.log("Poem generated!");
    new Typewriter("#poem-display", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();
    
    let  apiKey = "50b85t44fa1aa6e70d8a0160o0237d36";
    let context = "You're a renowned author and poet. I'm going to give you a key word or sentence. Please generate a four line poem about it. The output should be in  HTML. Do not mention anything about HTML. No '```html```' anywhere in your output. Separate each line with a <br />. No empty line break at the end of your response.";
    let userPrompt = document.querySelector("#user-prompt");
    let prompt = `Poem topic: ${userPrompt.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${userPrompt.value}&context=${context}&key=${apiKey}`;

    console.log("Generating poem...");
    console.log(`Context:${context}`);
    console.log(`Prompt:${prompt}`);

    axios.get(apiUrl).then(displayPoem);
}

const poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

