import { PROJECT_META } from './projectMeta'

export function buildProjects(projectCopyById) {
  return PROJECT_META.map((meta) => ({
    ...meta,
    ...projectCopyById[meta.id],
  }))
}

export function splitProjects(projects) {
  return {
    featuredProjects: projects.filter((project) => project.featured),
    otherProjects: projects.filter((project) => !project.featured),
  }
}
