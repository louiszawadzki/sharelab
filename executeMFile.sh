#!/bin/bash
MATLABPATH="/usr/local/MATLAB/R2015a/bin/matlab"

# $1 is the path to the .m file
# $2 is the name of the .m file to execute

cd $1
matlabCmd="$MATLABPATH -nodisplay -nosplash -nodesktop -r \'run $2;exit;\'"
matlabCmdRun=$($matlabCmd 2>&1)
echo -e "Running \n$ $matlabCmd"
echo -e "${matlabCmdRun}\n"
