input.onButtonPressed(Button.A, function () {
    servos.P2.setAngle(20)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onButtonPressed(Button.B, function () {
    servos.P2.setAngle(105)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
	
})
