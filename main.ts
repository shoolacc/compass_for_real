let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 22 || degrees > 337) {
        basic.showString("N")
    } else if (degrees >= 22 && degrees < 67.5) {
        basic.showString("NE")
    } else if (degrees < 112) {
        basic.showString("E")
    } else if (degrees >= 112 && degrees < 157) {
        basic.showString("SE")
    } else if (degrees < 202) {
        basic.showString("S")
    } else if (degrees >= 202 && degrees < 248) {
        basic.showString("SW")
    } else if (degrees >= 248 && degrees < 292) {
        basic.showString("W")
    } else if (degrees >= 292 && degrees < 337) {
        basic.showString("NW")
    }
})
