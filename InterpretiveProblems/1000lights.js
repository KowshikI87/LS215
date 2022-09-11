/*

You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again.
this time toggling switches 3, 6, 9, and so on.
You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total
number of switches—and returns an array of the
lights that are on after n repetitions.


Prolbme

- light 1 is never turned off --> don't think this is true

- Round 1: all lights are on
- Round 2:



Example/Test Cases

1 2 3 4 5
[0 0 0 0 0]
[1 1 1 1 1]
[1 0 1 0 1]
[]


Data Structure


Algorithm
- input: numLights
- lights = [false, false, false, false, ...]
for (let idx = 0; idx <numLights; idx++)
  lights.map((light, lightIndex) => {
    if (lightIndex + 1) % idx === 0 then
      element = !element (invert)
  })
- return lights.filter((light, idx) => {
  if light:
    return idx + 1;
})


Code


*/