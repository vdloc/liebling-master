import { themeController } from './ThemeButton';

export default class Comment {
  constructor() {
    console.warn(themeController.theme);
    this.remark_config = {
      host: 'https://remark42.netwalker.vn',
      site_id: 'netwalker.vn',
      theme: themeController.theme,
      locale: 'vi',
    };
    this.init();
  }

  init() {
    themeController.registerOnChangeCallback(this.handleChangeTheme);
    window.remark_config = this.remark_config;
    this.injectScript();
  }

  injectScript() {
    !(function (e, n) {
      for (var o = 0; o < e.length; o++) {
        var r = n.createElement('script'),
          c = '.js',
          d = n.head || n.body;
        'noModule' in r ? ((r.type = 'module'), (c = '.mjs')) : (r.async = !0),
          (r.defer = !0),
          (r.src = remark_config.host + '/web/' + e[o] + c),
          d.appendChild(r);
      }
    })(remark_config.components || ['embed'], document);
  }

  handleChangeTheme(isDarkTheme) {
    window.REMARK42.changeTheme(isDarkTheme ? 'dark' : 'light');
  }
}
