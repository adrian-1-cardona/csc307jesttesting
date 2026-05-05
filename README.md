## Hello 

## So to Run: 
npm test 
(all pass) 

## What i did to fix that bug: 
I added two new test cases that would catch that bug, since the original code had a Nan, if the input was just an empty string it would return true, and the other one was testing if straight characters are added return false, it used to return true. 
After that I went to module.js, and changed the if statement to not check for Nan, instead to check for digits (0-9). 
