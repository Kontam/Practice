#!/bin/bash

HTML_PATH='../src/html/';
DIST_PATH='../dist/'

cd $(dirname $0) && pwd

cp -pr $HTML_PATH  $DIST_PATH
