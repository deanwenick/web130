Responsive Menu
======

This project builds a responsive, dropdown menu

Last class we left off with a partially completed menu

This [repo http://github.com/deanwenick/menu] (http://github.com/deanwenick/menu) is where we left off

For this class, let's all start with the same code. It is exactly where I left off. Even if your code is the same do the following exercise so we all start at the same place. You can go back and work with your old code later, if you like.

We are going to clone a repository into your classwork directory. This can make for a complicated git repo. There are several ways to do this depending on your end goal. Our goal is just to bring n some new code. We do not need to track changes in the original repo so our steps will be:

1. clone repo into our project
2. remove .git file  so our main project won't track the new files

1. navigate to your classwork directory `cd workspace/www/classwork`
2. add new files `git clone https://github.com/deanwenick/menu.git 04.1-responsive-menu`
  * this adds a new directory to your project. Currently these files are tracked in a new repo, this is complicated, so:
3. navigate to your new directory `cd 04.1-responsive-menu`
4. remove the git files tracking this "submodule" `rm -rf .git`
5. navigate back to your www folder
6. do `git status` to make sure everything worked
7. `git add .` to track all your new files
8. `git commit -m "short meaningful message"`
9. `git push origin master`

Now we can do the tutorial together

##### There likely won't be time to get to Bootstrap today so let's work more with git

when all your code has been pushed to github the entire repository can be cloned on another computer. This means that we can delete everything on your nitrous box and restore it just the way it was.

Let's do that `cd` to your workspace directory

`rm -rf *` will delete everything in your workspace

do it and take a look. Everything is gone

now go to your github repo for web130 and get the url that looks like this `https://github.com/deanwenick/web130.git`

from you workspace directory run `git clone https://github.com/<yourName>/web130.git www`  
this will clone your whole project back and name it "www" which is what the server needs to recognize your web root

now go back and delete everything from nitrous again. We are going to play with forking repos. Putting a repo in a repo is [possible] (http://www.arlocarreon.com/blog/git/git-repo-inside-a-git-repo/), and sometimes desired, but we don't need that yet. So, to keep things simple 

we need a www folder for this project so navigate to www and `rm -rf *`

now that we have created and cloned repos, let's fork one. This is very common.
[do this demo alone] (https://guides.github.com/activities/forking/index.html)

Now team up for a pair programming exercise. **Odd Black with Odd Red, and Even Black with Even Red** This will best be done with two computers, but one will work if you use two browsers.

1. One person make a repo, name it whatever you like. Initialize the repo with a README.md, that will be enought to work with. Make other files if you like
2. The other person fork the repo on github and clone it to nitrous
3. Make some changes
4. add, commit and push your changes
5. submit a "Pull Request" to the repo author
5. Repo author review, accept and merge the changes

Look out for merging into your master branch. What is a branch? How can the person making the pull request make a new branch?