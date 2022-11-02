#!/bin/zsh

# Make this file executable by running
# chmod 700 run-deploy-ssr.sh

echo "copying ./app-ssr.yaml from "
echo "$PWD"
if cp -f ./app-ssr.yaml ../../dist/ssr; then
  # below dir will be created by quasar build command
  cd "../../dist/ssr"
  echo "cd-ing to ../../dist/ssr"
  echo "deploying from: "
  echo "$PWD"
  gcloud app deploy --version=v-1a --appyaml=app-ssr.yaml

  echo "Finished deploying"
else
  echo "Unable to deploy"
fi
