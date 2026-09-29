import { buildProjects, splitProjects } from '../i18n/buildContent'
import { es } from '../i18n/locales/es'

const projects = buildProjects(es.projectCopy)

export { projects }
export const featuredProjects = splitProjects(projects).featuredProjects
export const otherProjects = splitProjects(projects).otherProjects
