ARG BASE_IMAGE_NAME=ubuntu
ARG BASE_IMAGE_VERSION=latest

FROM ${BASE_IMAGE_NAME}:${BASE_IMAGE_VERSION}

RUN apt-get update && \
    apt-get upgrade -y

RUN apt-get install -y nodejs npm && \
    apt-get clean

VOLUME /root/env
WORKDIR /root/env