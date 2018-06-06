# Exercise Instructions

## Prerequisite

Install the nodejs dependancies by running the `npm install` command, from within the `helloworld_exercise` folder.

## Challenge

Modify the `index.js` file, so this query:

```
query {
  hello
  name
}
```

returns the following result:

```
{
  "data": {
    "hello": "World"
    "name": "James"
  }
}
```

## Running the app

You can run the app with the following command: `node index.js " query { hello name } "`

## Answer

You can see how I solved this by looking at the `index.js` file, in the `helloworld_completed` folder.
