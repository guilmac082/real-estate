#!/bin/zsh

# Make this file executable by running
# chmod 700 run-deploy-ssr.sh
# Run this file by first changing directory to "./deploy/gcloud"
# and then typing "./run-deploy-ssr.sh"

service_name="florida"
date_now=$(date +"%Y-%m-%d")
time_now=$(date +"%H-%M")
build_log_file="./services/${service_name}-$date_now-build.result.txt"
deploy_log_file="../../deploy/gcloud/services/${service_name}-$date_now-deploy.result.txt"
echo "${date_now}"

# exec >>$log_file 2>&1 && tail $log_file

# below errors:
# make 2>&1 | tee -a file.txt
# below just hangs
# exec &> >(tee -a $log_file)
# below 2 do not show output on screen:
# exec >>$log_file 2>&1 && tail $log_file
# exec &>>$log_file && tail $log_file

# exec 2>&1 | tee -a $log_file
quasar build -m ssr 2>&1 | tee -a $build_log_file

echo "copying ./services/${service_name}/app-ssr.yaml "
echo "$PWD"
if cp -f ./services/${service_name}/app-ssr.yaml ../../dist/ssr; then
  # below dir will be created by quasar build command
  cd "../../dist/ssr"
  touch $deploy_log_file
  echo "cd-ing to ../../dist/ssr"
  echo "deploying from:  $PWD" | tee -a $deploy_log_file
  if gcloud app deploy --version=v-1a --appyaml=app-ssr.yaml 2>&1 | tee -a $deploy_log_file; then
    echo "Finished deploying" 2>&1 | tee -a $deploy_log_file
    gcloud app browse -s $service_name
    gcloud app logs tail -s $service_name
  else
    echo "Unable to deploy to gcloud" 2>&1 | tee -a $deploy_log_file
  fi
else
  echo "Unable to copy deploy yaml file" 2>&1 | tee -a $deploy_log_file
fi
