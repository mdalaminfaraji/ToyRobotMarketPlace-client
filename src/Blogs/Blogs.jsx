import React, { useState } from 'react';
// import banner1 from '../images/banner2.jpg'
// import banner2 from '../images/banner3.jpg'
// import banner3 from '../images/banner4.jpg'
const Blogs = () => {
    const [read, setRead]=useState(true);
    const [reads, setReads]=useState(true);
    const [readed, setReaded]=useState(true);
    const [see, setSee]=useState(true);
    return (
        <div>
            <h1 className='text-center text-5xl p-5 font-semibold'> Blog Page</h1>
            <div className='grid mx-10 mb-10 grid-cols-1 lg:grid-cols-2 gap-10'>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p><span className='font-bold'>Answer:</span>
                    An access token  is used by an authentication server or authorization server after a user successfully authenticates and authorizes their identity. It contains all the information the server needs to know if the user can access the  resource you are requesting or not. They are usually expired tokens with a short validity period.<br/>
                    The refresh token is used to generate a new access token.When an access token expires, the client can use the refresh token to request a new access token without requiring the user to re-authenticate.<br/>
                    Refresh tokens are securely stored on the client-side, such as in an HTTP-only cookie or secure storage, to prevent unauthorized access{read?read:'Access tokens and refresh tokens are used in token-based authentication systems. An access token is a short-lived credential issued to a user after successful authentication and authorization. It is included in requests to access protected resources. Refresh tokens are long-lived credentials used to obtain new access tokens when the current one expires. They provide a smoother user experience without requiring re-authentication. Access tokens are stored on the client-side, typically as HTTP-only cookies, while refresh tokens require secure storage to prevent unauthorized access. Both tokens contribute to secure authentication and authorization processes.'}....<button onClick={()=>setRead(!read)} className='px-2 py-1 bg-[#212A3E] hover:bg-[#394867] font-bold rounded-2xl text-white'>Read {read?'More':'Less'}</button>
                    </p>
                    
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2.Compare SQL and NoSQL databases?</h2>
                    <p><span className='font-bold'>Answer:</span> SQL means Structured Query Language  SQL databases follow a structured, tabular data model .Data is organized into tables with rows and columns, and relationships between tables are established using foreign keys.<br/>
                    NoSQL means Not only Structured Query Language NoSQL databases employ various data models, including key-value, document, columnar, and graph.<br/>
                    the choice between SQL and NoSQL databases depends on the specific requirements of your application, including data structure, scalability needs, consistency requirements, and development agility. It's common to see hybrid approaches that leverage both types of databases in different parts of an application to best meet the specific needs of each data component.
                    {reads?reads:'SQL databases follow a structured, tabular data model with predefined schemas and support ACID transactions. They are vertically scalable but can be challenging to scale horizontally. SQL databases are ideal for applications that require strict data consistency, complex querying, and transactions.'}....<button onClick={()=>setReads(!reads)} className='px-2 py-1 bg-[#212A3E] hover:bg-[#394867] font-bold rounded-2xl text-white'>Read {reads?'More':'Less'}</button>
                    </p>
                    
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">3. What is express js? What is Nest JS?</h2>
                    <p><span className='font-bold'>Answer:</span>
                    Express.js is a  flexible web application framework for Node.js. It provides a  middleware that simplify the development of server-side applications. Express.js allows developers to define routes, handle HTTP requests and responses, implement middleware functions, and manage server-side logic efficiently. It is known for its simplicity and wide adoption in the Node.js ecosystem.<br/>
                    Nest.js is a  framework built with TypeScript and designed for building scalable and maintainable server-side applications. It takes inspiration from Angular's architecture and applies similar concepts such as modules, controllers, providers, and decorators to create highly modular and testable codebases. {readed?readed:'Nest.js leverages the power of TypeScript static typing and object-oriented programming principles to enhance developer productivity and maintainability.'}....<button onClick={()=>setReaded(!readed)} className='px-2 py-1 bg-[#212A3E] hover:bg-[#394867] font-bold rounded-2xl text-white'>Read {readed?'More':'Less'}</button>
                    
                    </p>
                    
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4. What is MongoDB aggregate and how does it work?</h2>
                    <p><span className='font-bold'>Answer:</span>
                    The aggregate method in MongoDB allows you to perform advanced data aggregation operations on collections. It works by applying a series of pipeline stages to input documents, where each stage performs a specific operation on the data. Common stages include matching documents based on conditions, projecting fields, grouping data, sorting results, and applying limits or skips. The pipeline stages can be chained together to create complex aggregation workflows. The aggregate method provides powerful data transformation and summarization capabilities, allowing you to process and analyze data in a flexible and efficient manner.{see?see:' MongoDB  aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data using a pipeline of stages, where each stage performs a specific operation on the documents.'}....<button onClick={()=>setSee(!see)} className='px-2 py-1 bg-[#212A3E] hover:bg-[#394867] font-bold rounded-2xl text-white'>Read {see?'More':'Less'}</button></p>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;