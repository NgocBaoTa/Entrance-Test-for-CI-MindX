let c = ""
function merge2String(a,b) {
    while(a.length != 0 || b.length != 0) {
        if(a != "") {
            c = c + a.slice(0,1)
            a = a.substring(1)
        }

        if(b != "") {
            c = c + b.slice(0,1)
            b = b.substring(1)
        }
    }
    console.log(c)
}

console.log(merge2String("abcd", "1234"))
