var webdriver = require('selenium-webdriver'),
By = webdriver.By;

const firefox = require('selenium-webdriver/firefox');

require('geckodriver');

async function refresh(url) {
  var path = '/Applications/Firefox.app/Contents/MacOS/firefox-bin';
  // var args = '-headless';
  
  const driver = new webdriver.Builder()
  .setFirefoxOptions(new firefox.Options().setBinary(path))
  // .addArguments(args))
  .withCapabilities({
    // 'acceptInsecureCerts': true,
    'browserName': 'firefox'
  }).build();
  
  await driver.get(url);
  
  while (1){
    try {
      const btn = await driver.findElement(By.xpath("//button"));
      // driver.navigate().refresh();
      btn.click();
      continue;
    }catch (err){
      break;
    }
  }
  console.log("Successfully get in www.urbtix.hk");
}

for (var i = 1; i <= 5; i++){
  refresh('http://www.urbtix.hk/');
}
