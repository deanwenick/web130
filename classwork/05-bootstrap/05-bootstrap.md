Bootstrap
======

Twitter Bootstrap slides will be available next class

[Download] (https://github.com/twbs/bootstrap/archive/v3.2.0.zip) the **Source Code** .zip from [getbootstrap.com] (http://getbootstrap.com)

To set up your files today clone the `https://github.com/deanwenick/bootstrap.git` bootstrap repo to your classwork directory

1. clone repo into our project
2. remove .git file  so our main project won't track the new files

To do this:

1. navigate to your classwork directory `cd workspace/www/classwork`
2. add new files `git clone https://github.com/deanwenick/bootstrap.git 05-bootstrap`
  * this adds a new directory to your project. Currently these files are tracked in a new repo, this is complicated, so:
3. navigate to your new directory `cd 05-bootstrap`
4. remove the git files tracking this "submodule" `rm -rf .git`
5. navigate back to your www folder
6. do `git status` to make sure everything worked
7. `git add .` to track all your new files
8. `git commit -m "short meaningful message"` something like "add bootstrap exercisesti"
9. `git push origin master`


