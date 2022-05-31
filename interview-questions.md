# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: "This" is used to reference the state key of the object's method/s. It can be also be used in other components as props.

  Researched answer "This" is a keyword that points to a specific object and can be used in global and function contexts. In regards to a function, it's used to reference the object that it is bound to and where it will take its value from.



2. What is React? Why would you use it?

  Your answer: React is a library of nodes, or code snippets, that are used for rendering the user interface of websites and apps. It allows real-time page updates without having to reload the webpage. In class, we used React for a pig latin translator.

  Researched answer: React is an open-source JS library that  is used for building user interfaces. It is used to create dynamic web applications and is an easier solution since it requires less coding. By using a Virtual DOM, React allows web applications to run faster and only updates when there are changes in a component/s rather than updating and reloading all components which would take more time.



3. Which lifecycle method is required in a React class component?

  Your answer: All lifecycle methods are required in a React class component. (Wasn't sure how to answer this because I'm still needing to understand lifecycles I think)

  Researched answer: The Mounting lifecycle method - constructor() - is needed for a React class component. Without it, the component can't go through the other phases - updating, unmounting, error handling. Not all phases of the lifecycle are required and a component may not go through all the phases, however, without mounting phase, the other phases are not possible.



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is JavaScript syntax that can be used in React. HTML is the bare bones of a webpage consisting of tags while JSX in React uses {} to signify JS syntax.

  Researched answer: JSX is a syntax extension from JS that allows us to write HTML and JS together when using React. JSX converts HTML into usable React elements and makes it easier for programmer to write HTML and JS together in React. The big difference between JSX and HTML sytax is that HTML, multiple elements can be returned while JSX can only return one parent element.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a collection of nodes (code snippets) that help React applications run.

  Researched answer: Yarn is a package manager that "allows you to use and share code with other developers from around the world... quickly, securely, and reliably (classic.yarnpkg.com)." The yarn.lock is created according to the package.json and contains the list of dependencies that are being used when Yarn is installed. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function doesn't take in any parameters and can be called upon without an argument.

  Researched answer: An anonymous function, also known as a function expression, is a function without a name that is never hoisted and can't be accessed after its creation. Anonymous functions can be passed as parameters into a higher order function.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Similar to JS conditionals, in React you can use if and logical operators to be able to render the UI depending on whether the conditional is met or not.

2. Object-oriented programming: Consists of objects with data and related state and behavior. Code used in OOP can be reusable and scaleable making more efficient code. They're built upon basic structure of class, other objects within it, methods, or functions inside the object, and attributes. The four main principles of OOP are: Encapsulation, abstraction, inheritance, and polymorphism. Encapsulation means that some of info can be accessed (public) while some of data can be stored and other objects don't have access to it. Inheritance is when code can be reused from other objects (classes) while polymorphism means that objects can behave differently depending on the different situation.

3. Ruby: Ruby is an open-sourced programming language that is object-oriented that can be used across multiple platforms. Ruby is used with web applications and enables the easy storage of data. Most commmonly, it is used along with Rails, making Ruby on Rails a very popular framework that's used. A strong understanding of OOP is needed since Ruby is pure object-oriented.

4. Ruby blocks: Similar to methods, but a block in Ruby doesn't belong to an object and doesn't have a name. Essentially it passes behavior instead of data to method. Blocks are made up of line/s of code and can take arguments and return value. 'times', 'each', 'map', and 'tap' are different types of methods in Ruby that use block.  

5. Ruby hashes: A hash is a data structure. It uses unique key and value pairs within curly brackets. Hashes can be compared to arrays and have iterations ran over them in a similar fashion. However, unlike arrays, indexing is not the same. Instead, in hashes, keys of object type are used instead.  
