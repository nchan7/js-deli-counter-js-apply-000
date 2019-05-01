function takeANumber(line,name) {
    line.push(name);
    return "Welcome," + " " + name + ". " + "You are number " + line.length + " in line."
}
function nowServing(katzDeliLine) {
    if (katzDeliLine.length < 1) {
        return "There is nobody waiting to be served!"
    } else {
        return "Currently serving" + " " + katzDeliLine[0] + ".";

    }
}
function currentLine(katzDeliLine) {
    var i = 0;
    var j = 1;
    var string = "";
    if (katzDeliLine.length < 1) {
        return "The line is currently empty."
    } else {
        while (i < katzDeliLine.length-1) {
            string = string + j + ". " + katzDeliLine[i] + ", ";
            i++;
            j++;
        }
    }
    return "The line is currently: " + string + j + ". " + katzDeliLine[i];
}
