#!/bin/bash

ssh pixel@pixel.one -p 4227 /bin/bash << EOF
    source ~/.bashrc
    source ~/.nvm/nvm.sh
    nvm use 14.4.0
    cd /srv/adobe-illustrator-landing/
    git pull --rebase origin HEAD
    npm install && npm run build
    echo "Ok"
EOF
