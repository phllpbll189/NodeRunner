#!/bin/bash
#used to restart the server after it has been updated
#intended to be ran after a change in an IDE
#The first variable needs to be the 
echo "server recieving changes"
set=0               #found PID?
index=0

netResults=$(netstat -lpn | grep $1) 

while [ $set -ne 1 ]
do
    if [ ${netResults:$index:6} -e "LISTEN" ]
    then
        set=1
    else
        echo ${netResults:$index:6} 
        set=1
    fi

    index=`expr $index + 1`
done
