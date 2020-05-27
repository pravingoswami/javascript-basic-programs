// Assume "#" is like a backspace in string. This means that string "a#bc#d" is actually "bd". Your task is to process a string with "#" symbols.  

// "abc#d##c"          ==>  "ac"

// "abc##d######"  ==>  ""

// "#######"            ==>  ""

// ""                          ==>  ""

let str = 'a#bc#d'
str = str.split("")

let result = []

if(str.length == ""){
    return console.log("")
} else {
    for(let i = 0 ; i < str.length ; i++){
        result.push(str[i])
        if(str[i] === "#"){
            result.pop()
            result.pop()
        }
    }
    return console.log(result.join(""))
}
