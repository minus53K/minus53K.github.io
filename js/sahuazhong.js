function times(str, num){
    return num > 1 ? str += times(str, --num): str;
}
document.writeln("                " + times("<img src=\'img/2hua.png\' alt=\'img/2hua.png\'>", 99));