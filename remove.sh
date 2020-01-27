#!/bin/bash

# Initialize basic vars and helpers
source blueprint-lib/init.sh

##
# Add dependencies here
##

# source blueprint-lib/docker.sh

##
# ADD BLUEPRINT CODE BELOW HERE
#
# BASE_PATH is the full path to the project root
# APP_NAME is the name of the Django app that will be modified
##

BLUEPRINT="ArticlesBlueprint"
NAME="Articles"

DATA_1="{ name: '${BLUEPRINT}', human_name: '${NAME}', access_route: '${BLUEPRINT}'},"
DATA_2="import { ${BLUEPRINT}Navigator } from '..\/features\/${BLUEPRINT}\/navigator';"
DATA_3="${BLUEPRINT}: { screen: ${BLUEPRINT}Navigator },"

echo ">> remove blueprint folder"
if [ -d "$BASE_PATH/src/features/$BLUEPRINT" ]; then rm -Rf $BASE_PATH/src/features/$BLUEPRINT; fi

echo ">> remove 1" 
sed -i "s/${DATA_1}/ /g" $BASE_PATH/src/config/installed_blueprints.js

echo ">> remove 2"
sed -i "s/${DATA_2}/ /g" $BASE_PATH/src/navigator/mainNavigator.js

echo ">> remove 3"
sed -i "s/${DATA_3}/ /g" $BASE_PATH/src/navigator/mainNavigator.js
