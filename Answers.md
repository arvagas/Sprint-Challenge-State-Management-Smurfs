1. What problem does the context API help solve?
**Context API allows the developer to pass global data directly into components without having to prop drill it through components that don't utilize the data.**

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
**Actions are instructions that dictate how the state should be updated, reducers actually update the state, and the store contains the state. The store is known as such because it does not mutate and works in one-direction.**

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
**Application state is global, whereas component state is local. Application state is suited for data that is used by multiple components. Component state is suited more for data that is really only applicable to that component.**

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
**Redux-thunk gives the ability to perform asynchronous operations within the action creators. So before the reducer is called, the middleware allows the interception of the flow of data and make changes accordingly.**

5. What is your favorite state management system you've learned and this sprint? Please explain why!
**Redux has been a lot of fun! I like the idea that state lives outside the application as opposed to inside a component.**
