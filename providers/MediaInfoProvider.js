'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class MediaInfoProvider extends ServiceProvider {
  /**
   * Register MediaInfo under 'Adonis/Addons/MediaInfo'
   * 
   * @method _registerMediaInfo
   * @memberof MediaInfoProvider
   */
  _registerMediaInfo() {
    this.app.singleton('Adonis/Addons/MediaInfo', app => {
      const MediaInfo = require('../src/MediaInfo')
      return new MediaInfo()
    })
    this.app.alias('Adonis/Addons/MediaInfo', 'MediaInfo')
  }

  /**
   * Register bindings
   * 
   * @method register
   * @return {void}
   * @memberof MediaInfoProvider
   */
  register() {
    this._registerMediaInfo()
  }
}

module.exports = MediaInfoProvider
