function fetchIds() {
  return Array.from(document.querySelectorAll('code')).map( (x) => {
    try {
      return JSON.parse(x.innerText)
    }
    catch {
      return null
    }
  }).filter( x => x != null && x.hasOwnProperty('included') && x.included.length != 0)
    .map( x => x.included)
    .flat()
    .filter( x => x.hasOwnProperty('entityUrn'))
    .map( x => x.entityUrn )
    .filter(x => x.match(/(urn:li:fs_normalized_company:)(?<linkedin_uid>\d*)/))
    .map( x => x.match(/(urn:li:fs_normalized_company:)(?<linkedin_uid>\d*)/).groups.linkedin_uid);
}

function createUrl(ids) {
  return ids.map((id) => {
    return { 'id': id, 'url': `https://www.linkedin.com/company/${id}/`}
  });
}

createUrl(fetchIds());
