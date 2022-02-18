import { getLeadFromUrl } from "./helper"
import { markConversion as markConversionApi } from "./referrify-core";
import { getExecutionEnvironment } from "./util"

export function markConversion(originalUrl?: string): Promise<boolean> {
  const env = getExecutionEnvironment()
  if (!originalUrl) {
    if (env === "browser") {
      originalUrl = window.location.href
    } else {
      throw new Error("no url provided")
    }
  }
  const leadId = getLeadFromUrl(originalUrl)
  return markConversionApi(leadId)
}
