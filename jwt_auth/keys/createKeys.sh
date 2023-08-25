#!/bin/bash
ssh-keygen -t rsa -b 4096 -E SHA512 -m PEM -N "" -f signing_key.pkcs1
openssl rsa -in signing_key.pkcs1 -pubout -outform PEM -out signing_key.pub
rm signing_key.pkcs1.pub
openssl pkey -in signing_key.pkcs1 -out signing_key.pkcs8
rm signing_key.pkcs1
