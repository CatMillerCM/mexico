resource "google_cloud_run_service" "control_center" {
  name     = "[project-name]"
  location = var.region

  metadata {
    annotations = {
      "run.googleapis.com/client-name"    = "terraform"
      "run.googleapis.com/ingress"        = "internal-and-cloud-load-balancing"
    }
  }

  template {
    spec {
       containers {
        image = "eu.gcr.io/channels-001/[project-name]:${var.commit_hash}"

        ports {
          container_port = 3000
        }

        env {
          name = "GCLOUD_PROJECT"
          value = var.project_id
        }

        env {
          name = "GIT_HASH"
          value = "latest"
        }
      }
    }
  }

  autogenerate_revision_name = true

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_compute_backend_service" "control_center" {
  name = "[project-name]-backend"

  protocol    = "HTTP"
  port_name   = "http"
  timeout_sec = 30

  backend {
    group = google_compute_region_network_endpoint_group.control_center.id
  }
}

resource "google_compute_region_network_endpoint_group" "control_center" {
  name                  = "[project-name]-neg"
  network_endpoint_type = "SERVERLESS"
  region                = google_cloud_run_service.control_center.location
  cloud_run {
    service = google_cloud_run_service.control_center.name
  }
}

resource "google_cloud_run_service_iam_binding" "control_center_policy" {
  location = google_cloud_run_service.control_center.location
  project = google_cloud_run_service.control_center.project
  service = google_cloud_run_service.control_center.name
  role = "roles/run.invoker"
  members = [
    "allUsers"
  ]
}
