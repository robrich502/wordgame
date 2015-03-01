# wordgame

SET-UP TO WORK WITH WORDGAME, IF YOU HAVE PUSH ACCESS (all students will be given access)

1.  Clone the Repository.  git clone https://github.com/robrich22/wordgame.git
2.  Checkout "dev" branch.  git checkout dev

PUSH YOUR CHANGES BACK

1.  git add .
2.  git commit -m "performed xyz change"
3.  git push origin dev

SYNC YOUR LOCAL REPO WITH REMOTE

1.  git pull origin dev

IF YOU DO NOT HAVE PUSH ACCESS TO THE PROJECT send me a message Slack.  @robrich22

---------------------------------------------

SET-UP TO WORK WITH WORDGAME Fork & Pull Strategy

1.  FORK THE REPOSITORY to your GitHub Account!
2.  Open the Command Line on Windows or Terminal on MAC
3.  Select the folder that you would like to use for the wordgame.
4.  git clone https://github.com/[insert your username]/WordGame.git

SET-UP REMOTES  **IMPORTANT**

5.  git remote add upstream https://github.com/robrich22/WordGame.git
6.  additional help read https://help.github.com/articles/configuring-a-remote-for-a-fork/

SYNC YOUR FORK WITH MASTER REPO (Sync frequently, as there are always new updates)

1.  git fetch upstream
2.  git checkout master
3.  git merge upstream/master

Now your local copy is sync'ed with the UPSTREAM MASTER repo.  You now need to push the updates to your github forked version of the REPO.  You will use your updated local repo, to push the changes back to github.  It's as simple as 

4.  git push 
 
MAKE SOME CHANGES TO REPO AND PUSH THEM TO GITHUB

1.  git add .
2.  git commit -m "I made xyz changes"
3.  git push origin master
4.  login to github, and issue pull request on http://github.com/robrich22/WordGame.git repo.

   

Macintosh
   1.  I don't know because I don't own a mac.
   2.  Switch to PC.
   3.  I assume all the commands are the same, once you figure out how to open the terminal on a Mac.
    

