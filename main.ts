input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . .
        . . . # .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showIcon(IconNames.Happy)
})
basic.showString("Hello!")
basic.forever(function () {
	
})
