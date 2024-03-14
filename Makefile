.PHONY: build webpack
COMPOSE_PROJECT_NAME ?= [project-name]
COMPOSE=docker-compose -f docker-compose.yml
RUN=${COMPOSE} run --rm [project-name]

ENV=staging

help:		## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:		## Start the local development environment, Ctrl+C to stop.
	docker-compose up

up:		## Start the local development environment, daemonised.
	(docker network create theladbiblegroup || true) && docker-compose up -d

start:		## Start the local environment in production mode, Ctrl+C to stop.
	docker-compose -f docker-compose.yml -f docker-compose.production.yml up

down:		## Stop the local development environment.
	docker-compose down --remove-orphans

build:		## Build and initlaise the Terraform Docker Image
build: 	build-docker

build-docker:		## Rebuild the local Dockerfile.
	docker-compose build ${args}

build-production:		## Rebuild the local Dockerfile
	docker-compose -f docker-compose.yml -f docker-compose.production.yml build ${args}

logs:		## Tail the docker logs.
	docker-compose logs -f

npm:		## Install npm packages.
	${RUN} npm i ${args}

npm-lock-update:		## Update npm lock file.
	${RUN} npm i --package-lock-only

test:		## Run the test suite using jest.
	${RUN} npm run test ${args}

test-update:
	${RUN} npm run test:update

lint:		## Run ESLint.
	${RUN} npm run lint ${args}
