# [Optional] Use a Debian base image
FROM mcr.microsoft.com/devcontainers/base:debian

# Set environment variables to avoid locale warnings
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=en_US.UTF-8

# Install core tools and locale support
RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg \
    locales \
    sudo \
    git \
    build-essential \
    software-properties-common && \
    locale-gen en_US.UTF-8 && \
    update-locale LANG=en_US.UTF-8

# Install Node.js (v18 LTS) and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# [Optional] Clean up to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PostgreSQL
RUN apt-get update && \
    apt-get install -y postgresql postgresql-contrib

# Set working directory
WORKDIR /workspaces/SaaS_PortfolioDev

# [Optional] Preinstall frontend tooling like lite-server
# Uncomment if you'd like to include it directly
# COPY package.json ./
# RUN npm install

# Default shell
SHELL ["/bin/bash", "-c"]
