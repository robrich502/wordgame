# WordGame

SET-UP TO WORK WITH WORDGAME

1.  FORK THE REPOSITORY to your GitHub Account!
2.  Open the Command Line on Windows or Terminal on MAC
3.  Select the folder that you would like to use for the wordgame.
4.  git clone https://github.com/[insert your username]/WordGame.git

SET-UP REMOTES  **IMPORTANT**

5.  git remote add upstream https://github.com/robrich22/WordGame.git
6.  additional help read https://help.github.com/articles/configuring-a-remote-for-a-fork/

===================================================================================

SYNC YOUR FORK WITH MASTER REPO (Sync frequently, as there are always new updates)

1.  git fetch upstream
2.  git checkout master
3.  git merge upstream/master

Now your local copy is sync'ed with the UPSTREAM MASTER repo.  You now need to push the updates to your github forked version of the REPO.  You will use your updated local repo, to push the changes back to github.  It's as simple as 

4.  git push 

====================================================================================
 
MAKE SOME CHANGES TO REPO AND PUSH THEM TO GITHUB

1.  git add .
2.  git commit -m "I made xyz changes"
3.  git push origin master
4.  login to github, and issue pull request on http://github.com/robrich22/WordGame.git repo.

   

Macintosh
   1.  I don't know because I don't own a mac.
   2.  Switch to PC.
   3.  I assume all the commands are the same, once you figure out how to open the terminal on a Mac.
   


02/05/2015 - Rob Richardson Notes

RULES -- You must only use technologies that we have learned in class.  So as of 02/05/2015 this will be
   - HTML5
   - CSS
   - JavaScript
In the coming weeks, we can throw in some jquery, ajax calls, use some sass.  

