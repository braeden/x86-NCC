/**
 * @fileoverview Entry point of the application.
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'id': 'recovery_tool',
    'bounds': {
      'width': 800,
      'height': 480
    },
    'resizable': false,
    'frame': 'none'
  }, function(createdWindow) {
    // For non-chromeos recovery mode, we need to initiate the
    // appType.
    createdWindow.contentWindow['appType'] = 'OnHub';
  });
});
