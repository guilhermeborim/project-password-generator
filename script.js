// selecao de elementos
const generatePasswordButton = document.querySelector('#generate-password');
const generatedPasswordElement = document.querySelector('#generated-password');

//funcoes
const getLetterlowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}; 

const getLetterupperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}; 

// console.log(getLetterupperCase())

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.@#$%*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterlowerCase, getLetterupperCase, getNumber, getSymbol) => {

    let password = ''
    const passwordLength = 10
    const generators = [getLetterlowerCase, getLetterupperCase, getNumber, getSymbol]

    for(i =0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
           
        }); 
    }
    password = password.slice(0, passwordLength);
    generatedPasswordElement.style.display = 'block'
    generatedPasswordElement.querySelector('h4').innerText = password;
};
//eventos

generatePasswordButton.addEventListener('click', () => {
    generatePassword(getLetterlowerCase,getLetterupperCase,getNumber,getSymbol);
})