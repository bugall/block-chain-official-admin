#!/usr/bin/env bash
pm2 stop idac-explorer
NODE_ENV=production pm2 start server-dist/index.js --name pool-frontend
