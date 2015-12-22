#!/bin/bash
#$1 is the path to the directory
#$2 is the SSH URI of the git repo
#$3 is the branch
echo "path: $1"
echo "SSH: $2"
echo "branch: $3"
if [ -d "$1" ]; then
    echo "Repository already cloned \n"
fi
if [ ! -d "$1" ]; then
    cloneCmd="git clone $2 $1"
    cloneCmdRun=$($cloneCmd 2>&1)
    echo -e "Running \n$ $cloneCmd"
    echo -e "${cloneCmdRun}\n"
fi

cd "$1"

#fetching data
fetchCmd="git fetch"
fetchCmdRun=$($fetchCmd 2>&1)
echo -e "Running \n$ $fetchCmd"
echo -e "${fetchCmdRun}\n"

#checking out on the right branch
checkoutCmd="git checkout $3"
checkoutCmdRun=$($checkoutCmd 2>&1)
echo -e "Running \n$ $checkoutCmd"
echo -e "${checkoutCmdRun}\n"

#pulling data from the branch
pullCmd="git pull origin $3"
pullCmdRun=$($pullCmd 2>&1)
echo -e "Running \n$ $pullCmd"
echo -e "${pullCmdRun}\n"

echo "done"

#./pull.sh "../sharelab_reps/git@github.com:jordanabderrachid-be-ec-3.git" "git@github.com:jordanabderrachid/be-ec-3.git" "master"
