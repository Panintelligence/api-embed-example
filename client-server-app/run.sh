#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [[ -h "${SOURCE}" ]]; do # resolve ${SOURCE} until the file is no longer a symlink
    DIR="$( cd -P "$( dirname "${SOURCE}" )" && pwd )"
    SOURCE="$(readlink "${SOURCE}")"
    [[ ${SOURCE} != /* ]] && SOURCE="${DIR}/${SOURCE}" # if ${SOURCE} was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
CURRENT_DIR="$( cd -P "$( dirname "${SOURCE}" )" && pwd )"

function teardown() {
    # Ensure express is killed
    express_server=$(ps aux | grep node | grep www | awk '{ print $2 }')
    echo "Shutting server down..."
    kill "${express_server}"  > /dev/null 2>&1
}

trap teardown SIGINT

export PI_URL="https://localhost:8224"
export PI_USERNAME="admin"
export PI_PASSWORD="dashboard"

echo "Starting backend..."
cd "${CURRENT_DIR}/backend"
npm start &

echo "Starting frontend..."
cd "${CURRENT_DIR}/frontend"
npm start