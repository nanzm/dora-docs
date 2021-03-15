#!/bin/sh

ip=""
dest=""

if [ -n "$1" ]; then
  ip=$1
else
  echo "缺少 ip "
  exit
fi

if [ -n "$2" ]; then
  dest=$2
else
  echo "缺少 dest "
  exit
fi

destination="root@$ip:$dest"


echo ""
echo ""
echo "开始上传... ————> $destination"
rsync -avh build $destination
echo ""
echo ""
