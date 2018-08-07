# Companion Source for the course: [GraphQL for Beginners with JavaScript](https://courses.knowthen.com/p/graphql-for-beginners-with-javascript/)

**Why should I learn GraphQL?**

Everyone knows, you should use the right tool for the job… But often, what was the “right” tool, becomes the inferior tool, and you might not even notice.

The most popular way of talking to servers today, is using [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). REST offers a nice, easy to understand way of interacting with other servers, but think about this: Rest was introduced about 2 decades ago… That’s a long time in our world!

Let me ask you a question: how much has software development changed in 2 decades? Heck, how much has software development changed in 2 years? **A LOT!**

So, I think it’s fair to ask the following question:

Do REST api’s still make sense, considering how we write software today?

To answer this question, let’s look at some of the **problems** with **REST API’s**:

**Problem - Many Concurrent Requests**

Many/Most non-trivial applications, make lots of concurrent rest api calls, before they can even render a view… Why is this a problem? It might not be a problem, if the client has an excellent network connection (like our dev machines do), but it can be a horrible problem, on mobile devices with poor connections.

When mobile devices make many concurrent network requests, the response is often very slow, and the app might seem unresponsive and it may not work at all. This can result in a dismal user experience.

So, should you care about mobile devices? Well, the majority of web traffic, comes from mobile devices, which often have poor network connections… and the next Billion internet users, will primarily be smart phone users, are you thinking about them?

_"Does GraphQL suffer from this problem?"_

Nope, GraphQL allows you to avoid this connection heavy behavior, by combining all your data queries, into a single server request, which greatly improves real and perceived performance.

**Problem - Multiple round trips to the server (Under-fetching Data & N+1 Problem)**

Sometimes, you’re app needs to fetch some initial data from the server, then you might need to make subsequent requests, based on the initially returned data. This results in a slow app, and it can be a real server performance killer.

_"Does GraphQL suffer from this problem?"_

Nope, with GraphQL, you avoid this type of “chatty” communication, because GraphQL allows you to perform rich queries, that fetch exactly what you need in one round trip, and you’ll avoid the [N+1 problem](https://stackoverflow.com/q/97197/4289166), that can kill your servers performance.

**Problem - Over-fetching Data**

Often, REST apis give you more data, then you need. For example, maybe you just need an items description and price, but the API gives you all 80 properties of the item. You end up taxing your servers and clients, dealing with data/bandwidth that’s not needed, which results in degraded application performance.

_"Does GraphQL suffer from this problem?"_

Nope, with GraphQL, you won’t fetch data, that you don’t need, instead you create explicit queries, asking for exactly what you need, and the graphQL server provides just what’s needed.

**Problem - Discoverability & Documentation**

Imagine you’re a new employee, and you’re trying to figure out what your companies existing REST api’s have to offer. This can be quite a challenge. If your lucky, people are maintaining documentation on the api, but more often, you’ll need to ask someone, or dig through the code, just to figure out what's available.

_"Does GraphQL suffer from this problem?"_

Nope, figuring out a GraphQL API is easy.

_How’s this possible?_

Many of the features in GraphQL, allow the creation of excellent developer tools such as [GraphiQL](https://github.com/graphql/graphiql) and [Insomnia](https://insomnia.rest/). Tools like these, greatly improve API discoverability, which you'll learn in this course.

With GraphQL, new employees can quickly and easily figure out what the api offers, almost completely on their own.

**Problems - Slow Development**

It sucks when you have to wait on other people, to complete your job. Countless times I’ve been blocked on a task, waiting on a backend developer. This interruption really sucks when I'm in a flow state. 😞

_"Does GraphQL suffer from this problem?"_

Sometimes, but not nearly as frequently. With GraphQL, often you can add new features, without having to touch the backend, which greatly minimizes developer blocking.

For example, if you’re adding a feature to an existing page, and you need some additional data... with GraphQL, you’ll often just modify your GraphQL query, to fetch the additional data, which usually takes a matter of minutes.

_Problem - Custom endpoints & duplicate server-side code_

Often to get around the shortcomings of REST ( multiple round trips, N+1 problem, etc), developers create one off, custom endpoints, which breaks “REST” principles, but are reasonable compromise for performance… The problem is, often you end up duplicating code on the server-side, when you’ve got multiple endpoints, that are just slightly different.

_"Does GraphQL suffer from this problem?"_

Nope, with GraphQL, your code is reused across vastly different queries by default. For example, if you’ve got some code that fetches information about an inventory item, that same server-side code, will be used when your item queries are for: Purchasing, Selling, Planning or any other purpose.

_These are just a few of the problems REST api's have... GraphQL was created to solve these problems and many more, which you'll learn in this course._

**Who is this course for?**

This course is for developers who are familiar with JavaScript, and are interested in understanding how GraphQL can improve your applications performance, and significantly improve the developer experience.

**What Will I learn in this course?**

You can think of GraphQL as 2 separate, but related parts:

- A Query Language and
- A Server Runtime to satisfy queries

In the first part of the course, we’ll focus on learning the _Query Language_, which includes topics such as:

- Scalar Types
- Object Types
- Query Parameters
- Variables
- Interfaces
- Aliases
- Fragments
- Union Types
- Directives
- Input Types
- Root types (query & mutation)
- Error handling
- Discoverability
- Tooling / GraphiQL
- ...

In the second part of the course, we’ll focus on building a _GraphQL server_, for the courses project app Hacker Book Review (see below).

We’ll build the server with [Node.js](https://nodejs.org) and (PostgreSQL)[https://www.postgresql.org/], and we’ll use excellent and popular open source GraphQL libraries.

**What are the pre-requisites for taking this course?**

You should be familiar with Modern JavaScript.

**What will we be building in this course?**

In this course, we’ll be building the GraphQL server, needed for our project app:

_Hacker Book Review_ - A book review app for hackers like us.

![alt text](https://knowthen.com/wp-content/uploads/2018/08/hackerbookreview.png 'Hacker Book Review')

**How do I get Help?**

If you’ve got questions, or you’re stuck, you can either:

- Ask a question in the comment portion of each video or
- You can join the knowthen slack community, and get realtime help from other students or myself. I try to make myself available for 1 hour every weekday in slack, you can see when I'm available in my slack profile.

**​Why should I take this course from you?**

​My courses are different from most Instructors.​ I keep things as practical as possible, I try to provide good visuals and animations to help you learn as fast as possible. I put hundreds of hours into making these course, so they are well thought out and to the point... and most importantly, I don't want to waste your time.
