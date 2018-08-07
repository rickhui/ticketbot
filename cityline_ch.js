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
      const btn = await driver.findElement(By.className("btn_cta"));
      // driver.navigate().refresh();
      await driver.get("http://event.cityline.com/utsvInternet/enrollment/action/login.do?activityCode=CITIPB&actionType=5&lang=TW");
      continue;
    }catch (err){
      break;
    }
  }
  console.log("Successfully get in www.cityline.com");
}

for (var i = 1; i <= 5; i++){
  // refresh('https://www.cityline.com/slim/site_select.html');
  refresh('http://event.cityline.com/utsvInternet/enrollment/action/login.do?activityCode=CITIPB&actionType=5&lang=TW')
}
