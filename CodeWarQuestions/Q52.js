/*

DONE ORALLY

DESCRIPTION:
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

Problem


  falls down from 3. Bounces up to .66 of 3, 1.98, 1.3
    - formula is 2 * 2 - 1 = 4
      first 2 is because we have two numbers (3, 1.98) that are > 1.5

  so stop calculating bounce height as soon as we reach < mother's window

  array: 1.98, 1.3


  30, .66, 1.5


  30, 19.8, 13.068, 8.62488, 5.6924208, 3.756997728
  2.4796185, 1.63654821, 1.08 (stop here)


  draw this curve up and we can see how it is 15

  I think it is (n * 2) - 1; where n = 8 because 8 numbers are > 1.5 
  which is the window height



Example / Test Cases



Data Structure


Algorithm

 

*/
