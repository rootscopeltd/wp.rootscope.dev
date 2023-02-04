function generateUUID() {
  const uuid = crypto.randomUUID()
  localStorage.setItem('uuid', uuid)

  return uuid
}

function getUUID() {
  let uuid = localStorage.getItem('uuid')

  if (!uuid) {
    uuid = generateUUID()
  }

  return uuid
}
