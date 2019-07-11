console.log('cats');

// Collect all the input fields
const inputNum01 = document.getElementById('input-num-01');
const inputName01 = document.getElementById('input-name-01');
const inputName02 = document.getElementById('input-name-02');
const inputNoun01 = document.getElementById('input-noun-01');
const inputSchool01 = document.getElementById('input-school-01');
const inputBodyPart01 = document.getElementById('input-body-part-01');
const inputAdj01 = document.getElementById('input-adjective-01');
const inputAdj02 = document.getElementById('input-adjective-02');
const inputNum02 = document.getElementById('input-num-02');

// Collect all the output fields
const outputNum01 = document.getElementById('num-01');
const outputName01 = document.getElementById('name-01');
const outputName02 = document.getElementById('name-02');
const outputNoun01 = document.getElementById('noun-01');
const outputSchool01 = document.getElementById('school-01');
const outputBodyPart01 = document.getElementById('body-part-01');
const outputAdj01 = document.getElementById('adjective-01');
const outputAdj02 = document.getElementById('adjective-02');
const outputNum02 = document.getElementById('num-02');

// eslint-disable-next-line no-unused-vars
function createMadLib() {
    console.log('create it');

    outputNum01.textContent = inputNum01.value;
    outputName01.textContent = inputName01.value;    
    outputName02.textContent = inputName02.value;    
    outputNoun01.textContent = inputNoun01.value;    
    outputSchool01.textContent = inputSchool01.value;  
    outputBodyPart01.textContent = inputBodyPart01.value;
    outputAdj01.textContent = inputAdj01.value;     
    outputAdj02.textContent = inputAdj02.value;     
    outputNum02.textContent = inputNum02.value;     
}