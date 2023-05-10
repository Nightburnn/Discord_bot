# Api Advanced

This project is from ALX_AFRICA and it was centered using Python as it's programming language, so i wanted to learn if i can do the same thing with React.

## Firstly 
For this task we were asked to use Reddit (home of memes in my opinion) API. There’s a lot of endpoints available, many that don’t require any form of authentication, and there’s tons of information to be parsed out and presented. 

### Questions:
* How to read API documentation to find the endpoints you’re looking for:
Understanding the purpose of the API involves understanding what kind of data and functionality it provides, which is important for using the API effectively. In the case of the Reddit API, its purpose is to allow developers to access and interact with Reddit's content and user data.

This includes endpoints for retrieving information about subreddits, posts, comments, users, and more. The API also provides functionality for creating, editing, and deleting content, managing user accounts and permissions, and other actions related to interacting with the Reddit platform.

Knowing this purpose is important when reading the API documentation and identifying relevant endpoints for a given project. For example, if you want to display information about a particular subreddit, you would look for endpoints related to subreddits, such as the /r/{subreddit}/about.json endpoint which returns information about a subreddit, including the number of subscribers.
examples

```css
/subreddits/search
/r/{subreddit}/about.json
```

* Look for an API reference or documentation index: Many API documentation pages have an index or reference page that lists all available endpoints. Look for links or menus that take you to this page.

* Search for keywords: Use the search function on the documentation page to look for keywords related to the data or functionality you're interested in. For example, if you're looking for endpoints related to user data, search for "user" or "profile."

* Read the endpoint descriptions: Each endpoint should have a description that explains what it does, what data it returns, and any parameters it requires. Read these descriptions carefully to determine if an endpoint is relevant to your needs.

### Endpoint 
Just to explain Endpoint in the easiest term
An endpoint is like a door or a window that you can use to ask a computer program for information or to do something for you. Just like you can knock on a door and ask someone to give you some candy, you can use an endpoint to ask a computer program for information or to do something for you, like giving you a list of all the cats in your neighborhood or helping you make a new post on a website.

When you use an endpoint, you need to tell the computer program what you want by sending it a message called a "request." Then the program will use the endpoint to figure out what you want and send you back a message called a "response" with the information or action you asked for.

Please Read the documentation [Reddit API](https://www.reddit.com/dev/api/)


### How to use an API with pagination

When working with an API that uses pagination, you typically need to make multiple requests to retrieve all of the data. Here are the general steps to follow:

* Make an initial request to the API with a limit or page size that determines how many results are returned per page.

* Parse the response to extract the data you need.

* Look for pagination information in the response, such as a "next page" link or a cursor to use for the next request.

* If there is a "next page" link, make another request to the API with the link as the URL to retrieve the next page of data.
Repeat steps 2-4 until you have retrieved all of the data. 

Here's an example of how to use pagination with the GitHub API:

Make an initial request to the GitHub API to retrieve a list of repositories:
```bash
https://api.github.com/users/{username}/repos?per_page=10
```

In this example, we're requesting the first 10 repositories for a given GitHub user.

Parse the response to extract the repository data you need.

Look for pagination information in the response. In the case of the GitHub API, the response includes a Link header that provides pagination links. For example, the header might look like this:
```bash
Link: <https://api.github.com/user/123/repos?page=2&per_page=10>; rel="next", <https://api.github.com/user/123/repos?page=3&per_page=10>; rel="last"
```



