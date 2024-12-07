export const getVisaPolicyData = () => {
  let cachedVisaPolicy
  if(!cachedVisaPolicy) {
    cachedVisaPolicy = require('/public/visaPolicy.json')
  }

  return cachedVisaPolicy
}

export const getVisaDurationData = () => {
  let cachedVisaDuration
  if(!cachedVisaDuration) {
    cachedVisaDuration = require('/public/visaDuration.json')
  }

  return cachedVisaDuration
}