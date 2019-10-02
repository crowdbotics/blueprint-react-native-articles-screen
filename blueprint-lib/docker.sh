#!/bin/bash

##
# Docker related functions
##

# Define file paths
DOCKER_DOCKERFILE_PATH="$BASE_PATH/Dockerfile"

##
# Add a system dependency to the dockerfile
##
add_dockerfile_dependency() {
  if [ -f "$DOCKER_DOCKERFILE_PATH" ] && ! grep -q $1 $DOCKER_DOCKERFILE_PATH
  then
    echo "Adding dependency $1 to Dockerfile"
    sed -i '' -e 's/\(RUN apk add.*\)/\1\'$'\n  '"$1 \\\/" $DOCKER_DOCKERFILE_PATH
  fi
}
