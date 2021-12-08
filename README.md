# Night at the Movies


![reccordit.gif](https://reccordit.co/KXzuuQtlHB.gif)


This is a single-page application that lets the user search for movies or shows, and if a user clicks on a movie or show, is taken to an individual page that displays additional detailsa bout the movie or show. State is managed on the frontend with React-Redux and Redux Toolkit. 

### How is Redux Toolkit different from Redux? 

With the movieSlice function you can focus on changing a single piece of the state tree in your application at a time. With movieSlice, actions are created for you, so you don't have to write switch statements. You can mutate state directly, so you don't have to worry about Ojbect.assign() or splice with the spread operator. With less moving parts, things are less likely to break or not work.   

### What are Thunks and how does this application use them? 

Thunks are a piece of middleware that makes asynchronous calls to an api. For redux, thunks are a pattern of writing functions with logic inside that can interact with Redux store's dispatch method. This application uses them to make asynchronous calls to the API which is storing a list of todos. 

