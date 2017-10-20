require('chai').should()
const {describe, it} = require('mocha')
const {
  getPlatformFromFilename,
  getPlatformFromUserAgent,
  getPlatformLabel
} = require('..')

describe('getPlatformFromFilename', () => {
  it('returns `win32` for exe files', () => {
    getPlatformFromFilename('some/file.exe').should.eq('win32')
  })

  it('returns `darwin` for dmg files', () => {
    getPlatformFromFilename('some/file.dmg').should.eq('darwin')
  })

  it('returns `darwin` for pkg files', () => {
    getPlatformFromFilename('some/file.pkg').should.eq('darwin')
  })

  it('returns `darwin` for files with darwin in the name', () => {
    getPlatformFromFilename('some/darwin-file.pkg').should.eq('darwin')
  })

  it('returns `darwin` for zip files with mac in the name', () => {
    getPlatformFromFilename('some/file-for-mac.zip').should.eq('darwin')
    getPlatformFromFilename('some/mac-file.zip').should.eq('darwin')
  })

  it('returns `darwin` for zip files with macOS in the name', () => {
    getPlatformFromFilename('some/file-for-macOS.zip').should.eq('darwin')
    getPlatformFromFilename('some/macOS-file.zip').should.eq('darwin')
  })

  it('returns `linux` for rpm files', () => {
    getPlatformFromFilename('some/file.rpm').should.eq('linux')
  })

  it('returns `linux` for deb files', () => {
    getPlatformFromFilename('some/file.deb').should.eq('linux')
  })

  it('returns `linux` for AppImage files', () => {
    getPlatformFromFilename('some/file.AppImage').should.eq('linux')
  })
})

describe('getPlatformFromUserAgent', () => {
  it('returns `darwin` for macOS', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    getPlatformFromUserAgent(ua).should.eq('darwin')
  })

  it('returns `linux` for Linux', () => {
    const ua = 'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.9) Gecko/20100915 Gentoo Firefox/3.6.9'
    getPlatformFromUserAgent(ua).should.eq('linux')
  })

  it('returns `win32` for Windows', () => {
    const ua = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.71 (KHTML like Gecko) WebVideo/1.0.1.10 Version/7.0 Safari/537.71'
    getPlatformFromUserAgent(ua).should.eq('win32')
  })
})

describe('getPlatformLabel', () => {
  it('returns `macOS` for darwin', () => {
    getPlatformLabel('darwin').should.eq('macOS')
  })

  it('returns `Windows` for win32', () => {
    getPlatformLabel('win32').should.eq('Windows')
  })

  it('returns `Linux` for linux', () => {
    getPlatformLabel('linux').should.eq('Linux')
  })
})
