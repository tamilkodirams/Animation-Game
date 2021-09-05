function validateName(text){
    var count=text.split(" ").length;
    document.writeln(count);
    if (count>=4){
        var values=text.split(' ')
        for (var i=0;i<count;i++)
        {
            if (values[i].length<2)
            return false;
        }
        return true;
    }
    else return false;
    };
    validateName("This is my first program");