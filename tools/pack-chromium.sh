#!/usr/bin/env bash
set -e
echo "*** Creating Autofillr Chrome web store package"

DES=dist/chromium
PKG_NAME=Autofillr_"$1".chromium.zip

rm -rf $DES
mkdir -p $DES

pushd build > /dev/null
zip -rq ../$PKG_NAME *
popd > /dev/null
mv $PKG_NAME $DES


echo "*** Autofillr chromium package is created at ${DES}/${PKG_NAME}"