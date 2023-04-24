let strip = neopixel.create(DigitalPin.P8, 5, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
