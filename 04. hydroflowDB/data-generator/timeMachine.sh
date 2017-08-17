#!/bin/sh
#
# -----------------------------------------
# A Random Data Simulator
# 
# by Max Tsai
# Last updated: 2017/08/08
# -----------------------------------------
# Here2cOde/HydroFlow.Solutions
#

startTS=`date -u -j -f "%b %d %Y %T" "May 1 2017 00:00:00" "+%s"`

# METADATA INPUTS
DEVID=$1
CATID=$2
LOCATION=$3
PARENTID=$4
FLOWMAX=$5
FLOWMIN=$6
FLOWTOTAL=$7
DURATIONMAX=$8
DURATIONMIN=$9

################################

TOTAL_DAYS=100

################################
# HERE WE GO
################################
RUN=$(( $FLOWTOTAL / ( (($FLOWMAX + $FLOWMIN) / 2) * (($DURATIONMAX + $DURATIONMIN) / 2) ) ))

echo "RUN INFO>> NOW:$startTS|$DEVID|$CATID|$LOCATION|$PARENTID|FLOW:$FLOWMAX~$FLOWMIN|DURATION:$DURATIONMAX~$DURATIONMIN"

date -u -j -r $startTS
echo "==============="

# init
D=0
RUN=$(( $FLOWTOTAL / ( (($FLOWMAX + $FLOWMIN) / 2) * (($DURATIONMAX + $DURATIONMIN) / 2) ) ))


for (( d=0; d<=$TOTAL_DAYS; d++ )); do

  fromTS=$(( $startTS + (86400 * $d) ))
  toTS=$(( $startTS + (86400 * ($d + 1)) ))

  for currentTS in `jot -r $RUN $fromTS $toTS | sort`; do

    D=$(( (($RANDOM % ( $DURATIONMAX - $DURATIONMIN) + $DURATIONMIN) % $DURATIONMAX) ))

    for (( count=0; count <= $D; count++ )); do

	TIMESTAMP=$(( $currentTS + $count ))

        FLOW=$(( (($RANDOM % ( $FLOWMAX - $FLOWMIN) + $FLOWMIN) % $FLOWMAX) ))
        FLOW=$FLOW"."$(( ($RANDOM % 100) ))

	TS=`date -u -j -r $TIMESTAMP`
	echo "waterflow,category=$CATID,deviceID=$DEVID,location=$LOCATION,parent=$PARENTID microRate=$FLOW $TIMESTAMP""000000000"

    done

  done

done
