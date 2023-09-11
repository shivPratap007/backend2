# Important git commands

## Normal commands for windows and mac

- `press i` -> to start writing in vim.
- `press esc+:wq` -> to escape form vim.
- `ls||dir` => To get the list of all the folders.

- `ls -a` => To see the hidden files in linux. 

* `cd /c/user` or `cd /d/Backend Development/` => To move to any folder in linux.
- `cd path of the folder inside same directory`=> To move to any folder into the same directory.
- `D: or C:`=> To change any the directory.

- `mkdir folderNameWithoutSpaces`=> To create a new folder in both cmd and linux.

- `touch filename` => Used to create file in linux.     
- `echo Your content here > filename.txt`=> To create file in windows.

## Commands for git 

* `git init` => To initialize a new local git repository.

* `git status` => To give the current status of the local repository.(like branch,commit,untracked files)

*  `git add filename || git add .` => To move to the file to the staging area from here file changes starts getting tracked.

* `git config --global user.email "your@gmail.com" && git config --global user.name "Shiv Pratap"` => It is used when you are making the commits for the first time.

* `git commit -m "message"` => It is used to add the new feature into the application thats why it contain a message.

* `git log` => To give information about all the commit with their id and name of the committer.

* `git remote add origin(alias name for the repo) link of repo.`=> to connect to the repo on github. Here "origin" is used as an alias name for the link of repo

* `git push origin master` => It is used to send the data to the repository and master is the branch name.

* `If you pass a README.md file from the local repo to the github then it will automatically identifies it and place it at its place`