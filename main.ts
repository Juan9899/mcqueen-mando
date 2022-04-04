radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(86)
music.playMelody("E B C5 A B G A F ", 120)
basic.showString("hola")
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 70) {
        radio.sendNumber(3)
    }
    if (input.rotation(Rotation.Roll) < -70) {
        radio.sendNumber(4)
    }
})
