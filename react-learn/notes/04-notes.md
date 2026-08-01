# React Hooks
Learning hooks with a counter project.

Problem in UI updation without hooks.

React with decide for when and what ui update(variable updation on ui).  
For this react have special methods called Hooks.   
Through hooks, ui data will update.  

React have different hooks available, each hook have a special work allocated to it.

React controls ui updatation.

### useState Hook
This hook is responsible for changing the state.  
Change doesnt means it will update the value. It means changes will be propogate in the UI(DOM).

This hook takes a default value in a variable.  
`useState(default value)`   
This can be any datatype value.   

What will this give back?
It returns two things in a formate of array.    
`[counter, setCounter]` counter is variable, setCounter is a function responsible to update counter variable.  

`let [counter, setCounter] = useState(15)`    
counter variable have default value of 15.