#!/bin/bash

##
# Python specific functions
##

# Define file paths
PYTHON_PIPFILE_PATH="$BASE_PATH/Pipfile"
PYTHON_SETTINGS_PATH="$BASE_PATH/$APP_NAME/settings.py"
PYTHON_URLS_PATH="$BASE_PATH/$APP_NAME/urls.py"

##
# Add a package to the Pipfile
##
add_python_package() {
  if ! grep -q $1 $PYTHON_PIPFILE_PATH
  then
      echo "Adding $1 to Pipfile"
      echo "$1 = \"*\"" >> $PYTHON_PIPFILE_PATH
  fi
}

##
# Add a django app to INSTALLED_APPS
##
add_installed_app() {
  if ! grep -q $1 $PYTHON_SETTINGS_PATH
  then
    echo "Adding $1 to INSTALLED_APPS"
    sed -i '' -e 's/\(INSTALLED_APPS =.*\)/\1\'$'\n    '"'$1',/" $PYTHON_SETTINGS_PATH
  fi
}

##
# Add a django app to THIRD_PARTY_APPS
##
add_third_party_app() {
  if ! grep -q $1 $PYTHON_SETTINGS_PATH
  then
    echo "Adding $1 to THIRD_PARTY_APPS"
    sed -i '' -e 's/\(THIRD_PARTY_APPS =.*\)/\1\'$'\n    '"'$1',/" $PYTHON_SETTINGS_PATH
  fi
}

##
# These are defaults that run every time. They clean up, improve, or add items
# to the basic scaffold that may be missing.
# @TODO These should be part of the base scaffold
##

# Add comma in INSTALLED_APPS if missing
sed -i '' -e "s/\('django.contrib.sites'\)$/\1,/" $PYTHON_SETTINGS_PATH

# Add MEDIA_ROOT if it's not set
if ! grep -q "MEDIA_ROOT" $PYTHON_SETTINGS_PATH
then
  echo "Adding MEDIA_ROOT to $PYTHON_SETTINGS_PATH"
  echo 'MEDIA_ROOT = os.path.join(BASE_DIR, "media")' >> $SETTINGS_PATH
fi
