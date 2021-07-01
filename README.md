# v.2 New implementation of the game without 3d party lib and jQuery
This time I've used only [CSS library](https://selfthinker.github.io/CSS-Playing-Cards/#hand) to draw the playing cards.

My goal was to fix previous issues and finish remarks ASAP.

Still some parts of code can be better separated.

As for now there is no 3d party dependency - I've added new code with TypeScript.

Used `round` prop as trigger for the computations and rendering cards;

Prepared `CARDS` via quick replace functions in the IDEA (not manually);

Has not implemented part about `Business logic didn't account for 3 of a kind, 4 of a kind` as it's not mentioned in the initial tech spec (`The winner of the game will be by the amount of pairs a hand has`).

# v.1 Challenge
I liked this take-home programming test very match. Thanks for the opportunity. The most complicated part was to find an open source solution of the playing cards (dealer) with any documentation, clear API and as npm module.


So, I rely on http://einaregilsson.github.io/cards.js/ because it was closer to the requirements.
Was upset about it's jquery dependency...

## jQuery - is evil in modern development
I know that using jQuery that directly modify DOM in combination with React is a bad practise.
But in the situation with limited time and testing purpose I hope it's acceptable.


## Possible improvements
- Styling can be better. I was not focused on it.
- Good to have cards-js as a separate npm module. Instead of splitting it to the public and src parts.
- Ignored adaptive design.
- Rewrite to the typescript (as 3d party solution was on js I decided not to move to the ts).

### Timelines
- 1.5 hours for the researching playing cards solution;
- 2.5 hours coding and adapting 3d party solution to my needs;
- 1 hour for adding some tests examples and README.

Total: 5 hours.
