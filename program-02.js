// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

let str = "TThe qick brown fox jumps over the lazy dog"
str = str.toLowerCase().split("")
for(let i = 97 ; i<= 122; i++){
    result = str.find(ele => ele.charCodeAt() === i)
    if(!result){
        console.log("This string is not pangram")
    }
}
console.log("This string is pangram")


