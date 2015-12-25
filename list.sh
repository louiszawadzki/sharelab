#!/bin/bash
# $1 is the path to the repo that needs to be listed
# $2 is the type of files to list (e.g. *.m, *.tex)

cd "$1"
ls $2
