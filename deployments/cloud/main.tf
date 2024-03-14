provider "google" {
  project = var.project_id
  region  = var.region
}

terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "ladbible"
  }
}
