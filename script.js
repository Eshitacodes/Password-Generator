// const passwordLength=document.getElementById("passwordLength");
// const includeLowerCase=document.getElementById("includeLowerCase").checked;
// const includeUpperCase=document.getElementById("includeUpperCase").checked;
// const includeNumbers=document.getElementById("includeNumbers").checked;
// const includeSymbols=document.getElementById("includeSymbols").checked;

// const password=generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

// console.log(`Generated Password: ${password}`);

// function generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
function generatePassword()
{

    const passwordLength=document.getElementById("passwordLength").value;
    const includeLowerCase=document.getElementById("includeLowerCase").checked;
    const includeUpperCase=document.getElementById("includeUpperCase").checked;
    const includeNumbers=document.getElementById("includeNumbers").checked;
    const includeSymbols=document.getElementById("includeSymbols").checked;
    const result=document.getElementById("result");



    const lowerCaseChars="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars="0123456789";
    const SymbolChars="@#$&_!";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowerCase?lowerCaseChars:"";
    allowedChars+=includeUpperCase?upperCaseChars:"";
    allowedChars+=includeNumbers?NumberChars:"";
    allowedChars+=includeSymbols?SymbolChars:"";

    if(passwordLength<=0)
    {
        result.textContent= "Password length must be atleast 1";
    }

    else if(allowedChars.length==0)
    {
        result.textContent= "At least 1 set of characters must be selected";
    }
    else
    {
        for(let i=0;i<passwordLength;i++)
    {
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }
    result.textContent= password;
    }

    
}
