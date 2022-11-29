radio.onReceivedString(function (receivedString) {
    command = receivedString
})
let command = ""
radio.setGroup(55)
basic.forever(function () {
    if (command == "right") {
        bitbot.rotate(BBRobotDirection.Right, 60)
    }
    if (command == "left") {
        bitbot.rotate(BBRobotDirection.Left, 60)
    }
    if (command == "forward") {
        bitbot.go(BBDirection.Forward, 60)
    }
    if (command == "stop") {
        bitbot.stop(BBStopMode.Coast)
    }
})
