import { ValueToQueryMapping } from './UrlParamsMapping'

export function addLeadToUrl(originalUrl: string, leadId: string): string {
  const url = new URL(originalUrl)
  const leadIdKey = ValueToQueryMapping.leadId
  url.searchParams.append(leadIdKey, leadId)
  return url.toString()
}

export function getLeadFromUrl(originalUrl: string): string {
  const url = new URL(originalUrl)
  const leadIdKey = ValueToQueryMapping.leadId
  return url.searchParams.get(leadIdKey)
}
