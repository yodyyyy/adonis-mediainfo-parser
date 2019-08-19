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
  _getMediaInfo(url) {
    return new Promise((resolve, reject) => {
      execFile('mediainfo', ['--output=JSON', url], (err, stdout) => {
        if (err) {
          if (err.code === 'ENOENT') {
            throw new Error('mediainfo not installed')
          }
        } else {
          resolve(stdout)
        }
      })
    })
  }

  /**
   * Return the data
   *
   * @method getInstance
   *
   * @param {*} url
   * @returns {JSON}
   * @memberof MediaInfo
   */
  async getInstance(url) {
    return await this.getMediaInfoInstance(url)
  }
}

module.exports = MediaInfo
