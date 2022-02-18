import { ValueToQueryMapping } from './UrlParamsMapping'

export function addLeadToUrl(originalUrl: string, leadId: string) {
  const url = new URL(originalUrl)
  const leadQuery = ValueToQueryMapping.leadId
  url.searchParams.append(leadQuery, leadId)
  return url.toString()
}
