#!/bin/bash
#$1 is the path to the directory
#$2 is the SSH URI of the git repo
#$3 is the branch
echo "$1"
echo "$2"
echo "$3"
if [ ! -d "$1" ]; then
    mkdir "$1";
    #git clone "$2"
    #git fetch
    #git checkout "$3"
    #git pull origin "$3"
fi

#./pull.sh "../sharelab_reps/git@github.com:jordanabderrachid-be-ec-3.git" "git@github.com:jordanabderrachid/be-ec-3.git" "master"
