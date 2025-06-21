const passwordbox = document.getElementById('password');
const lenght = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@$#%^&*>~";
const allchar = uppercase + lowercase + number + symbol ;
function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(lenght > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
        passwordbox.value = password;
    }
              console.log(password);
}
document.querySelector('button').addEventListener('click' , () =>{
    createpassword();

})

function copypassword(){
    passwordbox.select();
    document.execCommand('copy');
}
document.getElementById('copy').addEventListener('click',() =>{
    copypassword()
})