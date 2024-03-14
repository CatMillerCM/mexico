variable "commit_hash" {
  type = string
}

variable "project_id" {
  type    = string
  default = "channels-001"
}

variable "region" {
  type    = string
  default = "europe-west2"
}

variable "environment" {
  type    = string
  default = "staging"
}
