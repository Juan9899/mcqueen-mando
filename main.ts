radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 9) {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(8)
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
let _1 = 1
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 60) {
        radio.sendNumber(3)
    }
    if (input.rotation(Rotation.Roll) < -60) {
        radio.sendNumber(4)
    }
})
