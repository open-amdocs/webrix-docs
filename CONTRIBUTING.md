Hi there!

If you are visiting this page, it means that you are interested in contributing to
the Webrix documentation site. So first off, thanks!

Contributing is simple! Simply follow the steps below:

1. Fork the repository.
1. Clone the fork to your local machine:
    ```
    git clone git@github.com:open-amdocs/webrix-docs.git
    ```
1. Clone the webrix repository (both folders should be at the same level)
    ```
    git clone git@github.com:open-amdocs/webrix.git
    ```
1. Synchronize your local master branch with the upstream one:
    ```
    git checkout master
    git pull upstream master
    ```
1. Install the dependencies in both repos:
    ```
    npm i
    ```
1. Run both repos in dev mode
    ```
    npm run dev
    ```
   This will build `webrix` and watch it for changes, and will open `webrix-docs` in 
   your browser at `http://localhost:9000`
1. Create a new topic branch:
    ```
    git checkout -b my-topic-branch
    ```
1. Make changes, commit and push to your fork:
    ```
    git push -u
    ```
Go to [the repository](https://github.com/open-amdocs/webrix-docs) and make a Pull Request.


## Settings for Amdocs Employees

Since we use git for our internal projects with a work email/password, you may face issues login into GitHub with your personal username/password.
The best way to avoid it is to create a personal access token:

1. [Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
2. Clone the repo
3. When prompted for a username, use the access token you generated in step 1. Leave the password blank.
