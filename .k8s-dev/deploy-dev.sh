#!/bin/bash
# read the yml template from a file and substitute the string 

template=`cat "./.k8s-dev/deployment.yaml" | sed "s@{{DOCKER_REGISTRY}}@$DOCKER_REGISTRY_STAGE@g"`

# apply the yml with the substituted value
echo "$template" | kubectl apply -f -

#Apply HPA  
#kubectl apply -f ./Deployment_cicd/hpa-prod.yaml
