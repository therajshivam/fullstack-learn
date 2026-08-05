# useEffect, useRef and useCallback

## Password Generator Project

[Code](../06-password-generator/src/App.jsx)

Objectives: 
- methods run after the page load.
- dependencies like number, characters and length slider, changes in any these dependencies will run the method again.
- how to do optimised way.
- how to target any feed (eg. copy the input).

*Problem* : There is a password generator function. And we have to call it many times like when clicking numbers and chars. Find any way to optimised password generator method as it is calling many times.   

*Solution* : `useCallback(fn, dependencies)`  
useCallback is a react hook that lets us cache a function defination between re-renders.

