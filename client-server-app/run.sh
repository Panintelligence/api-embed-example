#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [[ -h "${SOURCE}" ]]; do # resolve ${SOURCE} until the file is no longer a symlink
    DIR="$( cd -P "$( dirname "${SOURCE}" )" && pwd )"
    SOURCE="$(readlink "${SOURCE}")"
    [[ ${SOURCE} != /* ]] && SOURCE="${DIR}/${SOURCE}" # if ${SOURCE} was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
CURRENT_DIR="$( cd -P "$( dirname "${SOURCE}" )" && pwd )"

PI_URL="https://localhost:8224"
PI_USERNAME="admin"
PI_PASSWORD="dashboard"

echo "Starting backend..."
cd "${CURRENT_DIR}/backend"
npm start &

echo "Starting frontend..."
cd "${CURRENT_DIR}/frontend"
npm start &