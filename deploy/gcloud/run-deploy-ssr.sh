#!/bin/zsh

# Make this file executable by running
# chmod 700 run-deploy-ssr.sh
# Run this file by first changing directory to "./deploy/gcloud"
# and then typing "./run-deploy-ssr.sh"

# service_name="florida-1"
printf "%s" "Enter service_name: "
read service_name
current_git_rev=$(git log --pretty=format:"%h %s" -n 1)
date_now=$(date +"%Y-%m-%d")
time_now=$(date +"%H:%M")
all_deploys_log_file="../../deploy/gcloud/services/aall-depoys.txt"
build_log_file="./services/${service_name}-$date_now-build.result.txt"
single_deploy_log_file="../../deploy/gcloud/services/${service_name}-$date_now-deploy.result.txt"
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

# [ ! -f ../../.env ] || export $(grep -v '^#' ../../.env | xargs)
# Above would silently fail if .env file not found
export $(grep -v '^#' ../../.env | xargs)
# Above will make variables in .env file available for the build below
quasar build -m ssr 2>&1 | tee -a $build_log_file

echo "copying ./services/${service_name}-app-ssr.yaml "
echo "$PWD"
if cp -f ./services/${service_name}-app-ssr.yaml ../../dist/ssr; then
  # below dir will be created by quasar build command
  cd "../../dist/ssr"
  touch $single_deploy_log_file
  # touch $all_deploys_log_file
  echo "On $date_now at $time_now:" 2>&1 | tee -a $single_deploy_log_file
  echo "cd-ing to ../../dist/ssr"
  echo "deploying from:  $PWD" | tee -a $single_deploy_log_file
  if gcloud app deploy --version=v-1a --appyaml=${service_name}-app-ssr.yaml 2>&1 | tee -a $single_deploy_log_file; then
    echo "" 2>&1 | tee -a $all_deploys_log_file
    echo "On $date_now at $time_now deployed:" 2>&1 | tee -a $all_deploys_log_file
    gcloud app browse -s $service_name --no-launch-browser 2>&1 | tee -a $all_deploys_log_file
    echo "( $current_git_rev )" 2>&1 | tee -a $all_deploys_log_file
    gcloud app browse -s $service_name
    gcloud app logs tail -s $service_name
  else
    echo "On $date_now at $time_now:" 2>&1 | tee -a $single_deploy_log_file
    echo "Unable to deploy to gcloud" 2>&1 | tee -a $single_deploy_log_file
  fi
else
  echo "On $date_now at $time_now:" 2>&1 | tee -a $single_deploy_log_file
  echo "Unable to copy deploy yaml file" 2>&1 | tee -a $single_deploy_log_file
fi
