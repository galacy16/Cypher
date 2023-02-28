/* In this task create a cypher to write secret messages. The cypher is going to use the 15th letter after the letter you want to use. The letters are treated as cyclical.
 */

function cypher(str, num) {
    const letters = 26; // the amount of the letters in the alphabet
    if (num < 0) {
        return cypher(str, 0);
    }
    return (
        str
            // Split the string
            .split("")
            .map(function (c) {
                if (c.match(/[a-z]/i)) {
                    let code = c.charCodeAt();
                    // Checking if the character is upper or lowercase
                    let shift =
                        code >= 65 && code <= 90
                            ? 65
                            : code >= 97 && code <= 122
                            ? 97
                            : 0;
                    // Calculating the replacement character
                    return String.fromCharCode(
                        ((code - shift + num) % letters) + shift
                    );
                }
                return c;
            })
            // join the characters
            .join("")
    );
}

function encrypt() {
    const messageInput = document.getElementById("message");
    const encryptedMessageInput = document.getElementById("encrypted-message");
    const message = messageInput.value;
    const encryptedMessage = cypher(message, 15);
    encryptedMessageInput.value = encryptedMessage;
    messageInput.value = "";
}

function newEncryption() {
    const messageInput = document.getElementById("message");
    const encryptedMessageInput = document.getElementById("encrypted-message");
    encryptedMessageInput.value = "";
    messageInput.value = "";
}
