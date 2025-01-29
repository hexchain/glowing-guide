const { _electron: electron } = require('playwright');

(async () => {
    const electronApp = await electron.launch();
    const appPath = await electronApp.evaluate(async ({ app }) => {
        return app.getAppPath();
    });
    console.log(appPath);
    await electronApp.close();
})()
