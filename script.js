
const toggleBtn = document.getElementById('modeToggleBtn');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? ' Light Mode' : ' Dark Mode';
});


const wordInput = document.querySelector('.wordInput');
const enterWord = document.querySelector('.enterWord');
const Search = document.querySelector('.Search');
const resultDiv = document.querySelector('.result');



const getData = async () => {
    const wordInfo = enterWord.value.trim();
    if (!wordInfo) {
        alert('please Enter a Word');
    }

  
resultDiv.innerHTML="Featching Data ...";
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInfo}`);
    const data = await response.json();
       if (!data.length) {
                alert(`Sorry,  '${wordInfo}' word not found` );
                return;
            }

    let definitions = data[0].meanings[0].definitions[0];

    resultDiv.innerHTML = `
    <h4><strong>Word:</strong>${data[0].word}</h4>
    <hr>
    <p><strong>Phonetic: </strong>${data[0].phonetic}<p>
    <hr>
    <p><i>${data[0].meanings[0].partOfSpeech}</i></p>
    <hr>
    <p><strong>Meaning:</strong>${definitions.definition === undefined ? "NOT found" : definitions.definition}</p>
    
    <hr>
    <p><strong>Example</strong>${definitions.example === undefined ? "NOT found" : definitions.example}</p>
    <hr>

    <p><strong>Antonyms</strong>
    <hr>
    `;

    if (definitions.antonyms.length === 0) { resultDiv.innerHTML += `"NOT found" `}
    else {
        for (let i = 0; i < definitions.antonyms.length; i++) {
            resultDiv.innerHTML += `<li>${definitions.antonyms[i]}</li>`
        }

        console.log(resultDiv);
    }

    resultDiv.innerHTML +=`<p><strong>Synonyms</strong> <hr>`;

       if (definitions.synonyms.length === 0) { resultDiv.innerHTML += `"NOT found" `}
    else {
        for (let i = 0; i < definitions.synonyms.length; i++) {
            resultDiv.innerHTML += `<li>${definitions.synonyms[i]}</li>`
        }

        console.log(resultDiv);
    }

    resultDiv.innerHTML+= `<hr>
    
    <a href="${data[0].sourceUrls}" target="_blank">Read more</a>`;
}



Search.addEventListener('click', getData);