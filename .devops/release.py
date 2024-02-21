import os
import platform

PLATFORM = platform.processor()
DOCKER_FILE_PATH = '.devops/docker/Dockerfile'
DOCKER_IMAGE_NAME = 'harbor.maax.gr/grossmax/frontend'
DOCKER_TAG_VERSION = '1.1.0'

os.system("npm run build")

if PLATFORM == 'arm':
    print("Run on arm platform...")
    os.system(f'docker buildx build --platform linux/amd64 -t {DOCKER_IMAGE_NAME}:{DOCKER_TAG_VERSION} -f {DOCKER_FILE_PATH} --push .')
else:
    print(f"Run on other {PLATFORM} platform...")
    os.system(f'docker build -t {DOCKER_IMAGE_NAME}:{DOCKER_TAG_VERSION} -f {DOCKER_FILE_PATH} .')

os.system(f'docker push {DOCKER_IMAGE_NAME}:{DOCKER_TAG_VERSION}')
os.system(f"ssh vh07.maax.gr 'cd /srv/grossmax && docker-compose pull && docker-compose up -d'")