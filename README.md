# ASAP
### A Simple Alternative Path

Rapidly traverse through a non-linear form with this nifty markov-chain based tool.
Use CTRL + SPACE to navigate to the next predicted field OR begin typing and use the dropdown list of possibilities and press enter to go to that respective field.

ASAP uses markov analysis to train a model which will hold the various states, transitions and prediction percentages of one value moving to the next. Based off of this model, a markov chain can be created where the current state (in this case a javascript/HTML element) will determine what the next state will be and because the next state has been determined, this process can be repeated on that next state, in essense creating a chain or map of traversal.

## Future Features:
- A count up timer to show you how quickly you can fill out the form using ASAP
  - Race your friends as they attempt to fill out the form with the totally out of date mouse click and you use the totally cool ASAP tool

## BUGS TO FIX:
- When navigating with CTRL + SPACE, rendered dropdown list of previous element does not close until typing occurs on new element
- Country input box has trouble rendering dropdown list properly and has a gap between it and the parent element
- Why did I leave in that 'Change Content' button?

