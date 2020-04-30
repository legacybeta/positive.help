# Positive.help

The purpose of the site is to share positive messages with people, and allow for people add their own messages.

The easiest way for people to add new messages is to submit them for review via Typeform. <a href="https://legacybeta.typeform.com/to/cK0Ztb" target="_blank">Fill out this form.</a>

This allows anyone and everyone to be able to suggest new messages. If you know how to use Github and want to add your own we are happy to take pull requests for new messages. The messages are in Markdown and are in the src/markdown-pages folder.  

The site is hosted on Cloudflare Workers at the moment, which has been working well so far... 

If you are adding messages in languages that require UTF8 characters, you will need to md5 the message to use as the Route. Something with Cloudflare doesn't allow us to have UTF8 Routes. Seaching DuckDuckGo is an easy way to generate the hash. "md5 message".

**Rules For New Messages**

1. Be Positive and Helpful
2. No duplicates but shorter or longer, similar messages are allowed
3. Change content rather than Routes
4. If you change existing content on a Route, add a new post with the previous content
5. Emojis are welcome, but try to keep them at the end of the message


This site was built with Gatsby and Gatsby Starter Theme so some of their Readme info was retained to help people get it setup locally. 

---

## 🚀 Gatsby Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd positivehelp/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). 

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
