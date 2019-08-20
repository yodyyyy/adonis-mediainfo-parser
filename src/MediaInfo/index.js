const { execFile } = require('child_process')

class MediaInfo {
  /**
   * Getting data from 'mediainfo' command
   *
   * @method _getMediaInfo
   *
   * @param {*} url
   * @returns {JSON}
   * @memberof MediaInfo
   */
  get(url) {
    return new Promise((resolve, reject) => {
      execFile('mediainfo', ['--output=JSON', url], (err, stdout) => {
        if (err) {
          if (err.code === 'ENOENT') {
            reject()
            throw new Error('mediainfo not installed')
          }
        } else {
          resolve(JSON.parse(stdout))
        }
      })
    })
  }

}

module.exports = MediaInfo
