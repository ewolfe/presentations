#!/bin/sh

rm -rf ./dist

for folder in ./src/*;
  do
     [ -d $folder ] && echo building $folder && yarn build-single $folder --no-html --out-dir dist/${folder#./src/}
  done;
