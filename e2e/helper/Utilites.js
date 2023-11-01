import { copyFile as _copyFile, createReadStream } from 'fs-extra';
import tempfile from 'tempfile';
import { promisify } from 'util';

const copyFile = promisify(_copyFile);

class Utilitites {
    async sleep(milliceconds){
        return new Promise(resolve => setTimeout(resolve, milliceconds))
    }

    async typeInElement(mobileElement, text) {
        await mobileElement.replaceText(text);
        await mobileElement.tapReturnKey();
    }

    async softElementAssertion(mobileElement){
        try {
            await expect(mobileElement).toBeVisible();
            return true;
        } catch {
            return false;
        }
    }

    async softTextAssertion(mobileElement, text){
        try {
            await expect(mobileElement).toHaveText(text);
            return true;
        } catch {
            return false;
        }
    }

    async getElementText(mobileElement){
        const attributes = await mobileElement.getAtributes();
        return attributes.text;
    }

    async takeScreenshotStream(value) {
        const imagePath = await device.takeScreenshot(value);
        const persistedImagePath = tempfile('.png');
        await copyFile(imagePath, persistedImagePath);
        return createReadStream(persistedImagePath);
    }
}

export default new Utilitites();