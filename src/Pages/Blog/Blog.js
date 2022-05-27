import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <div >
                <h1 className='text-xl text-primary text-center'>Q-1 How will you improve the performance of a React Application?</h1>

            <ul>
                <li>Keeping component state local where necessary</li>
                <li>Memoizing React components to prevent unnecessary re-renders</li>
                <li>Avoid inline functions as much as possible</li>
                <li>Always render hidden components like Modals and Dropdowns conditionally.</li>
                <li>Always call multiple APIs parallelly.</li>
            </ul>
            </div>
            <div>
                <h1 className='text-xl text-primary text-center'>Q-2 There are four main types of state you need to properly manage in your React apps</h1>
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
            </div>
            <div>
                <h1 className='text-xl text-primary text-center'>Q-3 How does prototypical inheritance work?</h1>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div><h1 className='text-xl text-primary text-center'>Q-4 Why you do not set the state directly in React?</h1>
            <p>One should never update the state directly because of the following reasons:</p>
            <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
            <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
            <li>You will lose control of the state across all components.</li>
            
            </div>
            <div> <h1 className='text-xl text-primary text-center'>Q-5-1 What is a unit test? </h1>
            <p>In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use</p>
            <h1 className='text-xl text-primary text-center'> Q-5-2 Why should write unit tests?</h1>
            <p>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
            </div>
            <div></div>
        </div>
    );
};

export default Blog;