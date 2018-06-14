const parseUserAgent = require('ua-parser-js')

function getPlatformFromFilename (filename) {
  // 'some/Bizarr-FILE_name.zip' -> ['some', 'bizarre', 'file', 'name', 'zip']
  const parts = filename.toLowerCase().split(/[-._/]/)
  const ext = parts[parts.length - 1]

  if (ext === 'exe') return 'win32'
  if (ext === 'zip' && parts.includes('win32')) return 'win32'
  if (ext === 'zip' && parts.includes('windows')) return 'win32'
  if (ext === 'zip' && parts.includes('win')) return 'win32'
  if (ext === 'zip' && parts.includes('ia32')) return 'win32'

  if (ext === 'dmg') return 'darwin'
  if (ext === 'pkg') return 'darwin'
  if (ext === 'zip' && parts.includes('osx')) return 'darwin'
  if (ext === 'zip' && parts.includes('mac')) return 'darwin'
  if (ext === 'zip' && parts.includes('macos')) return 'darwin'
  if (ext === 'zip' && parts.includes('mas')) return 'darwin'
  if (ext === 'zip' && parts.includes('darwin')) return 'darwin'

  if (ext === 'rpm') return 'linux'
  if (ext === 'deb') return 'linux'
  if (ext === 'appimage') return 'linux'
  if (ext === 'zip' && parts.includes('linux')) return 'linux'

  return null
}

function getPlatformFromUserAgent (ua) {
  const name = ua ? parseUserAgent(ua).os.name : parseUserAgent().os.name

  // node os.platform() possible values:
  // aix darwin freebsd linux openbsd sunos win32
  if (/mac/i.test(name)) return 'darwin'
  if (/windows/i.test(name)) return 'win32'
  if (/ubuntu|linux|gentoo|centos|redhat|suse|unix/i.test(name)) return 'linux'
  if (/freebsd/i.test(name)) return 'freebsd'
  if (/openbsd/i.test(name)) return 'openbsd'

  return null
}

function getPlatformLabel (platform) {
  if (platform === 'darwin') return 'macOS'
  if (platform === 'win32') return 'Windows'
  if (platform === 'linux') return 'Linux'
  return platform
}

module.exports = {
  getPlatformFromFilename,
  getPlatformFromUserAgent,
  getPlatformLabel
}
