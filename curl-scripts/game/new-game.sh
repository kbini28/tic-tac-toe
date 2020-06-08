curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cells": ["","","","","","","","",""],
      "over": false,

    }
  }'

echo
