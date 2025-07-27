#!/bin/bash
set -e

echo "Initializing PostgreSQL database..."

# Customize user/db as needed
psql -U postgres <<EOF
CREATE USER saas_dev WITH PASSWORD 'password';
CREATE DATABASE saas_portfolio OWNER saas_dev;
EOF

echo "PostgreSQL setup complete!"
