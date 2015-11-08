App.info({
  id: 'com.nicholaspsmith.lana',
  version: '0.0.1',
  name: 'Lana',
  description: '',
  author: 'Nicholas P Smith',
  email: 'me@nicholaspsmith.com',
  website: 'http://nicholaspsmith.com'
});


// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarBackgroundColor', '#ffffff');
App.setPreference('ShowSplashScreenSpinner', 'false');

App.accessRule('*');
