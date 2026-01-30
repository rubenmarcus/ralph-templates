# Kubernetes Deployment

Build Kubernetes manifests for deploying a web application.

## Overview

Production-ready Kubernetes manifests for deploying a typical web application. Includes deployments, services, ingress, configmaps, secrets, horizontal pod autoscaling, and monitoring. Uses Kustomize for environment management and follows Kubernetes best practices.

## Features

- Deployment with rolling updates
- Service and Ingress configuration
- ConfigMaps and Secrets management
- Horizontal Pod Autoscaler
- Resource limits and requests
- Liveness and readiness probes
- Persistent volume claims
- Network policies
- RBAC configuration
- Kustomize overlays for environments
- Helm chart (optional)

## Tasks

### Task 1: Project Structure
- [ ] Create k8s folder structure
- [ ] Set up base and overlays directories
- [ ] Configure kustomization files
- [ ] Document structure

### Task 2: Base Deployment
- [ ] Create deployment manifest
- [ ] Configure container specs
- [ ] Add resource requests/limits
- [ ] Configure probes (liveness, readiness, startup)
- [ ] Add environment variables from ConfigMap/Secret

### Task 3: Services
- [ ] Create ClusterIP service
- [ ] Add NodePort service (optional)
- [ ] Configure service ports
- [ ] Add service labels and selectors

### Task 4: Ingress
- [ ] Create Ingress resource
- [ ] Configure TLS termination
- [ ] Add path-based routing
- [ ] Configure annotations for ingress controller

### Task 5: Configuration
- [ ] Create ConfigMap for app config
- [ ] Create Secret for sensitive data
- [ ] Set up external secrets (optional)
- [ ] Document environment variables

### Task 6: Database
- [ ] Create StatefulSet for database
- [ ] Add PersistentVolumeClaim
- [ ] Configure headless service
- [ ] Add backup CronJob

### Task 7: Autoscaling
- [ ] Create HorizontalPodAutoscaler
- [ ] Configure CPU/memory metrics
- [ ] Set min/max replicas
- [ ] Add custom metrics (optional)

### Task 8: Security
- [ ] Create NetworkPolicy
- [ ] Add PodSecurityPolicy/PodSecurityStandard
- [ ] Configure ServiceAccount
- [ ] Add RBAC rules

### Task 9: Environment Overlays
- [ ] Create development overlay
- [ ] Create staging overlay
- [ ] Create production overlay
- [ ] Configure environment-specific values

### Task 10: Monitoring
- [ ] Add ServiceMonitor for Prometheus
- [ ] Create alerts
- [ ] Configure logging
- [ ] Add dashboard configs

### Task 11: Helm Chart (Optional)
- [ ] Create Chart.yaml
- [ ] Build values.yaml
- [ ] Create templates from manifests
- [ ] Add helper templates

## Tech Stack

- Kubernetes
- Kustomize
- Helm (optional)
- Nginx Ingress Controller
- cert-manager
- Prometheus

## Files to Create

- `k8s/base/deployment.yaml`
- `k8s/base/service.yaml`
- `k8s/base/ingress.yaml`
- `k8s/base/configmap.yaml`
- `k8s/base/secret.yaml`
- `k8s/base/hpa.yaml`
- `k8s/base/pdb.yaml`
- `k8s/base/kustomization.yaml`
- `k8s/overlays/dev/kustomization.yaml`
- `k8s/overlays/staging/kustomization.yaml`
- `k8s/overlays/prod/kustomization.yaml`
- `k8s/overlays/prod/patches/replicas.yaml`
- `k8s/database/statefulset.yaml`
- `k8s/database/service.yaml`
- `k8s/database/pvc.yaml`
- `k8s/monitoring/servicemonitor.yaml`
- `k8s/network/networkpolicy.yaml`
- `README.md`
