var encrypt = document.querySelector("#enc-btn")
var decrypt = document.querySelector("#dec-btn")
var encryption = document.querySelector("#encryption")
var decryption = document.querySelector("#decryption")
var arrow = document.querySelector("#arrow")
var encbtn = document.querySelector("#enc-btn")
var decbtn = document.querySelector("#dec-btn")
var encryptbtn = document.querySelector("#encrypt-btn")
var decryptbtn = document.querySelector("#decrypt-btn")
var txtmsg= document.querySelector("#txtmsg")
var password= document.querySelector("#password")
var copy= document.querySelector("#copy")
var textarea1 = document.querySelector("#textarea1")
var emojimsg = document.querySelector("#emojimsg")
var result = document.querySelector("#result")
var resultant2 = document.querySelector("#resultant2")
var resultants = document.querySelector("#resultants")
var result2 = document.querySelector("#result2")
var password1 = document.querySelector("#password1")
var crossbtn = document.querySelector(".cross")
var loader = document.querySelector(".loader")
var clutter = "";
console.log("%c Nah nothing here chief, nice try!", "color: red; font-size:1vw;");
encryption.style.display ="flex";

crossbtn.addEventListener("click",function(){
    loader.style.display = "none";
});

encrypt.addEventListener("click", function(){
    encryption.style.display = "flex";
    decryption.style.display = "none";
    arrow.style.rotate = "0deg"
    encbtn.style.backgroundColor= "#2E2E2E";
    decbtn.style.backgroundColor= "";
    resultants.style.display ="none";
    resultant2.style.display ="none";


    encbtn.style.color= "";
    decbtn.style.color= "#656464";

})


decrypt.addEventListener("click", function(){
    encryption.style.display = "none";
    decryption.style.display = "flex";
    arrow.style.rotate = "180deg"
    encbtn.style.backgroundColor= "";
    decbtn.style.backgroundColor= "#2E2E2E";

    encbtn.style.color= "#656464";
    decbtn.style.color= "";
    resultants.style.display ="none";
    resultant2.style.display ="none";
})



function textToEmoji(text) {
    // Emoji mappings
    const emojiMap = {
        'a': ['😀', '😃', '😄', '😁', '😆'], 'A': ['😀', '😃', '😄', '😁', '😆'],
        'b': ['😊', '😍', '😘', '😚', '☺️'], 'B': ['😊', '😍', '😘', '😚', '☺️'],
        'c': ['😎', '😏', '😌', '😛', '😜'], 'C': ['😎', '😏', '😌', '😛', '😜'],
        'd': ['😀', '😃', '😄', '😁', '😆'], 'D': ['😀', '😃', '😄', '😁', '😆'],
        'e': ['😊', '😍', '😘', '😚', '☺️'], 'E': ['😊', '😍', '😘', '😚', '☺️'],
        'f': ['😎', '😏', '😌', '😛', '😜'], 'F': ['😎', '😏', '😌', '😛', '😜'],
        'g': ['😀', '😃', '😄', '😁', '😆'], 'G': ['😀', '😃', '😄', '😁', '😆'],
        'h': ['😊', '😍', '😘', '😚', '☺️'], 'H': ['😊', '😍', '😘', '😚', '☺️'],
        'i': ['😎', '😏', '😌', '😛', '😜'], 'I': ['😎', '😏', '😌', '😛', '😜'],
        'j': ['😀', '😃', '😄', '😁', '😆'], 'J': ['😀', '😃', '😄', '😁', '😆'],
        'k': ['😊', '😍', '😘', '😚', '☺️'], 'K': ['😊', '😍', '😘', '😚', '☺️'],
        'l': ['😎', '😏', '😌', '😛', '😜'], 'L': ['😎', '😏', '😌', '😛', '😜'],
        'm': ['😀', '😃', '😄', '😁', '😆'], 'M': ['😀', '😃', '😄', '😁', '😆'],
        'n': ['😊', '😍', '😘', '😚', '☺️'], 'N': ['😊', '😍', '😘', '😚', '☺️'],
        'o': ['😎', '😏', '😌', '😛', '😜'], 'O': ['😎', '😏', '😌', '😛', '😜'],
        'p': ['😀', '😃', '😄', '😁', '😆'], 'P': ['😀', '😃', '😄', '😁', '😆'],
        'q': ['😊', '😍', '😘', '😚', '☺️'], 'Q': ['😊', '😍', '😘', '😚', '☺️'],
        'r': ['😎', '😏', '😌', '😛', '😜'], 'R': ['😎', '😏', '😌', '😛', '😜'],
        's': ['😀', '😃', '😄', '😁', '😆'], 'S': ['😀', '😃', '😄', '😁', '😆'],
        't': ['😊', '😍', '😘', '😚', '☺️'], 'T': ['😊', '😍', '😘', '😚', '☺️'],
        'u': ['😎', '😏', '😌', '😛', '😜'], 'U': ['😎', '😏', '😌', '😛', '😜'],
        'v': ['😀', '😃', '😄', '😁', '😆'], 'V': ['😀', '😃', '😄', '😁', '😆'],
        'w': ['😊', '😍', '😘', '😚', '☺️'], 'W': ['😊', '😍', '😘', '😚', '☺️'],
        'x': ['😎', '😏', '😌', '😛', '😜'], 'X': ['😎', '😏', '😌', '😛', '😜'],
        'y': ['😀', '😃', '😄', '😁', '😆'], 'Y': ['😀', '😃', '😄', '😁', '😆'],
        'z': ['😊', '😍', '😘', '😚', '☺️'], 'Z': ['😊', '😍', '😘', '😚', '☺️'],
        ' ': ['💙 ', '💛 ', '💜 ', '💚 ', '❤️ '],
        '.': ['🌟', '💫', '✨', '⭐', '🌠'], ',': ['💫', '✨', '⭐', '🌠', '🌟'],
        '!': ['❗', '❣️', '❕', '❣️', '❗'], '?': ['❓', '❔', '❓', '❔', '❓'], 
        '@': ['👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿'],
        '#': ['👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿'],
        '$': ['💰', '💵', '💲', '🤑', '💸'],
        '%': ['🎉', '🎊', '🎈', '🥳', '🎁'],
        '&': ['👀', '👁️', '👁️‍🗨️', '👁️', '👀'],
        '*': ['🌈', '🌈', '🌈', '🌈', '🌈'],
        '(': ['🔥', '🔥', '🔥', '🔥', '🔥'],
        ')': ['🌺', '🌸', '💮', '🌹', '🥀'],
        '-': ['💔', '💔', '💔', '💔', '💔'],
        '+': ['💖', '💗', '💘', '💝', '💞'],
        '=': ['💘', '💖', '💝', '💞', '💗'],
        '[': ['🐶', '🐶', '🐶', '🐶', '🐶'], ']': ['🐱', '🐱', '🐱', '🐱', '🐱'],
        '{': ['🐭', '🐭', '🐭', '🐭', '🐭'], '}': ['🐹', '🐹', '🐹', '🐹', '🐹'],
        '|': ['🐰', '🐰', '🐰', '🐰', '🐰'], '\\': ['🦊', '🦊', '🦊', '🦊', '🦊'],
        ';': ['🐻', '🐻', '🐻', '🐻', '🐻'], ':': ['🐼', '🐼', '🐼', '🐼', '🐼'],
        '\'': ['🐨', '🐨', '🐨', '🐨', '🐨'], '"': ['🐯', '🐯', '🐯', '🐯', '🐯'],
        '<': ['🐸', '🐸', '🐸', '🐸', '🐸'], '>': ['🦁', '🦁', '🦁', '🦁', '🦁'],
        '/': ['🐷', '🐷', '🐷', '🐷', '🐷'], '~': ['🐽', '🐽', '🐽', '🐽', '🐽'],
        '`': ['🐮', '🐮', '🐮', '🐮', '🐮'], '_': ['🐗', '🐗', '🐗', '🐗', '🐗'],
        '^': ['🐴', '🐴', '🐴', '🐴', '🐴'], '0': ['🐔', '🐔', '🐔', '🐔', '🐔'],
        '1': ['🐧', '🐧', '🐧', '🐧', '🐧'], '2': ['🐦', '🐦', '🐦', '🐦', '🐦'],
        '3': ['🐤', '🐤', '🐤', '🐤', '🐤'], '4': ['🐣', '🐣', '🐣', '🐣', '🐣'],
        '5': ['🐥', '🐥', '🐥', '🐥', '🐥'], '6': ['🦆', '🦆', '🦆', '🦆', '🦆'],
        '7': ['🦅', '🦅', '🦅', '🦅', '🦅'], '8': ['🦉', '🦉', '🦉', '🦉', '🦉'],
        '9': ['🦜', '🦜', '🦜', '🦜', '🦜']
    };

    // Convert each character of the text to a random emoji
    const emojiText = text.toLowerCase().split('').map(char => {
        const possibleEmojis = emojiMap[char];
        if (possibleEmojis && possibleEmojis.length > 0) {
            return possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
        }
        return char;
    }).join('');

    return emojiText;
}


encryptbtn.addEventListener("click", function () {
       // Get the input values
       var inputText = txtmsg.value.trim();
       var inputPassword = password.value.trim();
   
       password.value = ""; // Clear password input
       txtmsg.value = ""; // Clear textarea1
       // Convert input text to emoji
       var emojiText = textToEmoji(inputText);
   
       // Check if both input text and password are not empty
       if (inputText !== "" && inputPassword !== "") {
           // Retrieve existing data from localStorage
           var existingData = JSON.parse(localStorage.getItem('formData')) || [];
   
           // Create a new object to store in localStorage
           var newDataObject = {
               inputText: inputText,
               emojiText: emojiText,
               inputPassword: inputPassword
           };
   
           // Add the new data to the existing data array
           existingData.push(newDataObject);
   
           // Serialize the updated data array to JSON string
           var updatedDataJSON = JSON.stringify(existingData);
   
           // Store the JSON string in localStorage
           localStorage.setItem('formData', updatedDataJSON);
           resultants.style.display ="flex";
           result.textContent = emojiText
   

        }
         else {
            alert("Please enter all details")
            resultants.style.display = "none"; // Hide the resultants
            
        }
})


document.getElementById("share").addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: 'secret msg',
            text: 'keep it secret',
            content:'emojiText' // URL to be shared
        })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        console.log("Web Share API not supported");
        // Handle fallback behavior (e.g., open social media URLs directly)
    }
});






// Function to decrypt and check password
function decryptAndCheckPassword(pass2input, emojimsg2) {
    // Get the stored form data from localStorage
    var storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    // Check if pass2input matches any stored inputPassword
    var matchingData = storedFormData.find(function(dataObject) {
        return dataObject.inputPassword === pass2input;
    });

    // Check if emojimsg2 matches any stored emojiText
    var emojiMatchFound = storedFormData.some(function(dataObject) {
        return dataObject.emojiText === emojimsg2;
    });
    

    // Print result based on match
    if (matchingData && emojiMatchFound) {
        console.log("hogya"); // Both password and emoji text match
        result2.textContent = matchingData.inputText; // Print inputText to result.textContent
        console.log(matchingData.inputText)
        resultant2.style.display = "flex";
        document.getElementById("share2").addEventListener("click", function() {
            if (navigator.share) {
                navigator.share({
                    title: 'secret msg',
                    text: 'keep it secret',
                    content:'inputText' // URL to be shared
                })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
            } else {
                console.log("Web Share API not supported");
                // Handle fallback behavior (e.g., open social media URLs directly)
            }
        });
        
    } else {
        console.log("nahi ho paya bro"); // Either password or emoji text does not match
        resultant2.style.display = "none";
    }
}

// Event listener for decrypt button
decryptbtn.addEventListener("click", function () {

    var pass2input = password1.value.trim(); // Assuming password1 is an input element
    var emojimsg2 = emojimsg.value.trim(); // Assuming emojimsg is an input element
    password1.value = ""; // Clear password input
    emojimsg.value = ""; // Clear textarea1
    if (pass2input !== "") {
        decryptAndCheckPassword(pass2input, emojimsg2);
    } else {
        alert("Please enter the password.");
    }
});



result2.disabled = true;


// Add event listener for the dblclick event
result.addEventListener("dblclick", function(event) {
    // Create a temporary textarea element
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = result.textContent;

    // Append the textarea to the body
    document.body.appendChild(tempTextarea);

    // Select the text inside the textarea
    tempTextarea.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(tempTextarea);

    // Optionally, provide some feedback to the user
    alert("Text copied to clipboard!");
});