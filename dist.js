var parseUserAgent = require('ua-parser-js')

function getPlatformFromFilename (filename) {
  // 'some/Bizarr-FILE_name.zip' -> ['some', 'bizarre', 'file', 'name', 'zip']
  var parts = filename.toLowerCase().split(/[-._/]/)
  var ext = parts[parts.length - 1]

  if (ext === 'exe') { return 'win32' }

  if (ext === 'dmg') { return 'darwin' }
  if (ext === 'pkg') { return 'darwin' }
  if (ext === 'zip' && parts.includes('osx')) { return 'darwin' }
  if (ext === 'zip' && parts.includes('mac')) { return 'darwin' }
  if (ext === 'zip' && parts.includes('macos')) { return 'darwin' }
  if (ext === 'zip' && parts.includes('darwin')) { return 'darwin' }

  if (ext === 'rpm') { return 'linux' }
  if (ext === 'deb') { return 'linux' }
  if (ext === 'appimage') { return 'linux' }

  return null
}

function getPlatformFromUserAgent (ua) {
  var name = ua ? parseUserAgent(ua).os.name : parseUserAgent().os.name

  // node os.platform() possible values:
  // aix darwin freebsd linux openbsd sunos win32
  if (/mac/i.test(name)) { return 'darwin' }
  if (/windows/i.test(name)) { return 'win32' }
  if (/ubuntu|linux|gentoo|netbsd|freebsd|centos|openbsd|redhat|suse|unix/i.test(name)) { return 'linux' }
  return null
}

function getPlatformLabel (platform) {
  if (platform === 'darwin') { return 'macOS' }
  if (platform === 'win32') { return 'Windows' }
  if (platform === 'linux') { return 'Linux' }
  return platform
}

module.exports = {
  getPlatformFromFilename: getPlatformFromFilename,
  getPlatformFromUserAgent: getPlatformFromUserAgent,
  getPlatformLabel: getPlatformLabel
}

