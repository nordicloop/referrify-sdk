import axios from 'axios'

const host = 'https://tinny.me'

export function markConversion(leadId: string): Promise<boolean> {
  const url = host + `/conversion?ld=${leadId}`
  return axios.post(url)
    .then(res => res.data?.success === true)
    .catch(e => false)
}
