#!/bin/sh
#
# This script running via crontab to extra-transform-load data from
# the individual repositories (additional providerID) to the regional/central 
# Data Warehouse
#
# mt8168@gmail.com 2017-08-10
#

DUMPFILE="/tmp/`date +%s`.dump"

fromDB="hydroflow"
dwDB="hydroflowDW"

providerID="0000000000"

influx -execute "SELECT * FROM \"waterflow\" where \"time\" >= now() - 48h "  -database="$fromDB" -precision=s > $DUMPFILE

tail -n +4 $DUMPFILE | while read rec; do
  record=`echo $rec | awk -F' ' '{print "waterflow,providerID=0000000000,category="$2",deviceID="$3",location="$4",parent="$6" microRate="$5" "$1"000000"}'`
  echo $record
  curl -i -XPOST "http://localhost:8086/write?db=$dwDB" --data-binary "$record"

done

