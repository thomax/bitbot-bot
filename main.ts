radio.onReceivedString(function (receivedString) {
    command = receivedString
})
let command = ""
radio.setGroup(100)
basic.forever(function () {
    if (command == "forward") {
        bitbot.go(BBDirection.Forward, 60)
    } else if (command == "right") {
        bitbot.rotate(BBRobotDirection.Right, 60)
    } else if (command == "left") {
        bitbot.rotate(BBRobotDirection.Left, 60)
    } else {
        bitbot.stop(BBStopMode.Coast)
    }
})
