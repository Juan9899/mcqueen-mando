radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (_1 == 1) {
        radio.sendNumber(8)
        _1 += 0
    }
    if (_1 == 0) {
        radio.sendNumber(7)
        _1 += 1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let _1 = 0
radio.setGroup(86)
music.playMelody("E B C5 A B G A F ", 120)
basic.showString("hola")
_1 = 1
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 50) {
        radio.sendNumber(3)
    }
    if (input.rotation(Rotation.Roll) < -50) {
        radio.sendNumber(4)
    }
})
