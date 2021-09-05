function printInitials(name)
{
    if (name.length == 0)
        return;

    // Since touuper() returns int,
    // we do typecasting
    document.write(name[0].toUpperCase());

    // Traverse rest of the string and
    // print the characters after spaces.
    for (let i = 1; i < name.length - 1; i++)
        if (name[i] == ' ')
            document.write(" " + name[i + 1].toUpperCase());
}
 
let name1 = "prabhat kumar singh";
  printInitials(name1);



 /* function processWords(input)
{
 
    var s = input.split(' ');
    s.forEach(element => {
    charBuffer+=element[0];
    });
return charBuffer;
}
var input = "geeks for geeks";
document.write( processWords(input));*/

let n="tamil";
let n1="rams";
let n2="swathi rams";
let nsub=n.substring(0,2);
console.log(nsub);
console.log(nsub.toUpperCase());

function abbreviateName(name) {
    return (name.split(" ")
    .map((part) => part[0].toUpperCase())
    .join('')
    );
  }
  abbreviateName("swathi rams tamil mithil");