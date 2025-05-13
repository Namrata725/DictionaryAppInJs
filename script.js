
const toggleBtn = document.getElementById('modeToggleBtn');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? ' Light Mode' : ' Dark Mode';
});


const wordInput = document.querySelector('.wordInput');
const enterWord = document.querySelector('.enterWord');
const Search = document.querySelector('.Search');




const getData = async() => {
    const wordInfo =enterWord.value.trim();
    if(!wordInfo){
        alert('please Enter a Word');
    }
    const response= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInfo}`);
    const data= await response.json();
    console.log(data)
}



Search.addEventListener('click',getData);