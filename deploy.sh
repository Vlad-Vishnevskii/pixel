#!/bin/bash

ssh pixel@pixel.one -p 4227 << EOF
  cd /srv/adobe-illustrator-landing/
  npm i
  npm run build
  exit
EOF
