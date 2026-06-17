import { Page, Locator } from "@playwright/test";
import {
    FillOptions,
    ClickOptions,
    defaultFillOptions,
    defaultClickOptions,
    WaitForOptions,
    defaultWaitOptions
} from "./baseOptions";

export class BaseClass {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Method to fill value for Locator or specific input field or text area
     * @param  {Locator} locator 
     * @param {string} value 
     * @param {FillOptions} options 
     */

    async getAllInnerTexts(locator: Locator): Promise<string[]> {
        try {
            return await locator.allInnerTexts();
        } catch (e: any) {
            throw new Error(`Failed to get allInnerTexts | ${e.message}`);
        }
    }
    /*Method to get text content of all elements matching the locator and return as an array of strings
    *@param {Locator} locator - the locator of the elements to get text contents from
    *@returns an array of strings containing the text contents of all matching elements
    */
    async getAllTextContents(locator: Locator): Promise<string[]> {
        try {
            return await locator.allTextContents();
        } catch (e: any) {
            throw new Error(`Failed to get allTextContents | ${e.message}`);
        }
    }
    /**
   * Method to get all text contents of elements matching the locator and return as an array of strings 
  */

    async blur(locator: Locator) {
        try {
            await locator.blur();
        } catch (e: any) {
            throw new Error(`Failed to blur element | ${e.message}`);
        }
    }


    /**
     * Method to blur the element 
     * @param {Locator} locator 
     */


    async getBoundingBox(locator: Locator) {
        try {
            return await locator.boundingBox();
        } catch (e: any) {
            throw new Error(`Failed to get boundingBox | ${e.message}`);
        }
    }

    /** Method to get the bounding box of the element*/

    async check(locator: Locator) {
        try {
            await locator.check();
        } catch (e: any) {
            throw new Error(`Failed to check element | ${e.message}`);
        }
    }
    /* Method to check a checkbox or radio button
    @param {Locator} locator - the locator of the checkbox or radio button to check
    */
    async clear(locator: Locator) {
        try {
            await locator.clear();
        } catch (e: any) {
            throw new Error(`Failed to clear element | ${e.message}`);
        }
    }
    /* Method to clear the value of an input field or textarea
       * @param {Locator} locator - the locator of the input field or textarea to clear
       */
    async click(locator: Locator, options: ClickOptions = defaultClickOptions) {
        try {
            await locator.click(options);
        } catch (e: any) {
            throw new Error(`Failed to click element | ${e.message}`);
        }
    }
    /* * Method to getcount of elements matching the locator
         * @param {Locator} locator 
         * @returns 
         */

    async count(locator: Locator): Promise<number> {
        try {
            return await locator.count();
        } catch (e: any) {
            throw new Error(`Failed to get count | ${e.message}`);
        }
    }
    /* Method to double click an element
    * @param {Locator} locator - the locator of the element to double click
    */
    async doubleClick(locator: Locator) {
        try {
            await locator.dblclick();
        } catch (e: any) {
            throw new Error(`Failed to double click | ${e.message}`);
        }
    }
    /* Method to dispatch an event on the element
* @param {Locator} locator - the locator of the element to dispatch the event on
* @param {string} event - the name of the event to dispatch
    */
    async dispatchEvent(locator: Locator, event: string) {
        try {
            await locator.dispatchEvent(event);
        } catch (e: any) {
            throw new Error(`Failed to dispatch event ${event} | ${e.message}`);
        }
    }
    /* Method to drag an element to a target element
    * @param {Locator} source - the locator of the element to drag
    * @param {Locator} target - the locator of the target element to drop onto
    * Note: This method may not work in all browsers or with all elements, and may require additional configuration or permissions to function properly    
    */
    async dragTo(source: Locator, target: Locator) {
        try {
            await source.dragTo(target);
        } catch (e: any) {
            throw new Error(`Failed to drag element | ${e.message}`);
        }
    }
    /* Method to evaluate a function in the context of the element
        * @param {Locator} locator - the locator of the element to evaluate
        * @param {Function} fn - the function to evaluate
        */
    async evaluate(locator: Locator, fn: any) {
        try {
            return await locator.evaluate(fn);
        } catch (e: any) {
            throw new Error(`Failed to evaluate | ${e.message}`);
        }
    }
    /* Method to evaluate a function in the context of all elements matching the locator
    * @param {Locator} locator - the locator of the elements to evaluate
    * @param {Function} fn - the function to evaluate
        * Note: This method will return an array of results, one for each matching element, in the same order as the elements appear in the DOM. If no elements match the locator, this method will return an empty array.
    * Example: const results = await baseClass.evaluateAll(locator, (elements) => elements.map(el => el.textContent));
    * This example will return an array of text contents for all elements matching the locator.
    */
    async evaluateAll(locator: Locator, fn: any) {
        try {
            return await locator.evaluateAll(fn);
        } catch (e: any) {
            throw new Error(`Failed to evaluateAll | ${e.message}`);
        }
    }
    /* Method to fill value for Locator or specific input field or text area
    * @param  {Locator} locator
    * @param {string} value
    * @param {FillOptions} options
     */
    async fill(locator: Locator, value: string, options: FillOptions = defaultFillOptions) {
        try {
            await locator.fill(value, options);
        } catch (e: any) {
            throw new Error(`Failed to fill value '${value}' | ${e.message}`);
        }
    }
    /* Method to focus an element
      * @param {Locator} locator - the locator of the element to focus
    * Note: This method may not work in all browsers or with all elements, and may require additional configuration or permissions to function properly
    * Example: await baseClass.focus(locator);  
    * This example will attempt to focus the element matching the locator, which may trigger focus-related events or behaviors on the page. If the element cannot be focused, this method will throw an error with a message indicating the failure.
    * Caution: Use this method with care, as it may cause unexpected side effects or interfere with user interactions if used improperly. Always ensure that the element you are trying to focus is intended to receive focus and that it does not disrupt the user experience.
    */
    async focus(locator: Locator) {
        try {
            await locator.focus();
        } catch (e: any) {
            throw new Error(`Failed to focus element | ${e.message}`);
        }
    }
    /* Method to get the value of an attribute of an element*/
    async getAttribute(locator: Locator, attr: string) {
        try {
            return await locator.getAttribute(attr);
        } catch (e: any) {
            throw new Error(`Failed to get attribute ${attr} | ${e.message}`);
        }
    }
    /* Method to hover over an element*/
    async hover(locator: Locator) {
        try {
            await locator.hover();
        } catch (e: any) {
            throw new Error(`Failed to hover element | ${e.message}`);
        }
    }
    /* Method to get innerText of an element*/
    async getInnerHTML(locator: Locator) {
        try {
            return await locator.innerHTML();
        } catch (e: any) {
            throw new Error(`Failed to get innerHTML | ${e.message}`);
        }
    }
    /* Method to get the inner text of an element*/
    async getInnerText(locator: Locator) {
        try {
            return await locator.innerText();
        } catch (e: any) {
            throw new Error(`Failed to get innerText | ${e.message}`);
        }
    }
    /* Method to get the value of an input field or textarea*/
    async getInputValue(locator: Locator) {
        try {
            return await locator.inputValue();
        } catch (e: any) {
            throw new Error(`Failed to get input value | ${e.message}`);
        }
    }
    /* Method to check if an element is hidden**/
    async isChecked(locator: Locator) {
        try {
            return await locator.isChecked();
        } catch (e: any) {
            throw new Error(`Failed to check isChecked | ${e.message}`);
        }
    }
    /* Method to check if an element is hidden**/
    async isDisabled(locator: Locator) {
        try {
            return await locator.isDisabled();
        } catch (e: any) {
            throw new Error(`Failed to check isDisabled | ${e.message}`);
        }
    }
    /* Method to check if an element is disabled**/
    async isEditable(locator: Locator) {
        try {
            return await locator.isEditable();
        } catch (e: any) {
            throw new Error(`Failed to check isEditable | ${e.message}`);
        }
    }
    /* Method to check if an element is enabled**/
    async isEnabled(locator: Locator) {
        try {
            return await locator.isEnabled();
        } catch (e: any) {
            throw new Error(`Failed to check isEnabled | ${e.message}`);
        }
    }
    /* Method to check if an element is hidden**/
    async isHidden(locator: Locator) {
        try {
            return await locator.isHidden();
        } catch (e: any) {
            throw new Error(`Failed to check isHidden | ${e.message}`);
        }
    }
    /* Method to check if an element is visible**/
    async isVisible(locator: Locator) {
        try {
            return await locator.isVisible();
        } catch (e: any) {
            throw new Error(`Failed to check isVisible | ${e.message}`);
        }
    }
    /* Method to press a key on an element**/

    async press(locator: Locator, key: string) {
        try {
            await locator.press(key);
        } catch (e: any) {
            throw new Error(`Failed to press key ${key} | ${e.message}`);
        }
    }

    /* Method to take a screenshot of an element
    * @param {Locator} locator - the locator of the element to take a screenshot of
    * @param {string} path - the file path to save the screenshot to
    * Note: This method may not work in all browsers or with all elements, and may require additional configuration or permissions to function properly
    * Example: await baseClass.takeScreenshot(locator, 'screenshot.png');
    */
    async takeScreenshot(locator: Locator, path: string) {
        try {
            await locator.screenshot({ path });
        } catch (e: any) {
            throw new Error(`Failed to take screenshot | ${e.message}`);
        }
    }
    /* Method to scroll an element into view if needed
    * @param {Locator} locator - the locator of the element to scroll into view
    */
    async scroll(locator: Locator) {
        try {
            await locator.scrollIntoViewIfNeeded();
        } catch (e: any) {
            throw new Error(`Failed to scroll element | ${e.message}`);
        }
    }
    /* Method to select an option from a dropdown or select element
    * @param {Locator} locator - the locator of the dropdown or select element
    * @param {string} value - the value of the option to select
    */
    async selectOption(locator: Locator, value: string) {
        try {
            await locator.selectOption(value);
        } catch (e: any) {
            throw new Error(`Failed to select option ${value} | ${e.message}`);
        }
    }
    /* Method to set the checked state of a checkbox or radio button
    * @param {Locator} locator - the locator of the checkbox or radio button to set
    * @param {boolean} value - the desired checked state (true for checked, false for unchecked)
    * Note: This method will check the element if value is true, and uncheck it if value is false. If the element is already in the desired state, this method will do nothing. If you want to toggle the checked state regardless of its current state, you can use the click method instead.
    * Example: await baseClass.click(locator);  
    */
    async setChecked(locator: Locator, value: boolean) {
        try {
            await locator.setChecked(value);
        } catch (e: any) {
            throw new Error(`Failed to setChecked ${value} | ${e.message}`);
        }
    }
    /* Method to tap on an element
* @param {Locator} locator - the locator of the element to tap on
    **/
    async tap(locator: Locator) {
        try {
            await locator.tap();
        } catch (e: any) {
            throw new Error(`Failed to tap element | ${e.message}`);
        }
    }
    /* Method to get text content of an element
* @param {Locator} locator - the locator of the element to get text content from
    * @returns the text content of the element, or null if the element has no text content
    */
    async getTextContent(locator: Locator) {
        try {
            return await locator.textContent();
        } catch (e: any) {
            throw new Error(`Failed to get textContent | ${e.message}`);
        }
    }
    /* Method to type text into an input field or textarea * @param {Locator} locator - the locator of the input field or textarea to type into
    * @param {string} value - the text to type into the input field or textarea
    * Note: This method will clear the existing value before typing the new value. If you want to append text instead, you can use the fill method with the existing value concatenated with the new value.
    * Example: await baseClass.fill(locator, (await baseClass.getInputValue(locator)) + value);
    */
    async type(locator: Locator, value: string) {
        try {
            await locator.type(value);
        } catch (e: any) {
            throw new Error(`Failed to type '${value}' | ${e.message}`);
        }
    }
    /* Method to uncheck a checkbox or radio button
    @param {Locator} locator - the locator of the checkbox or radio button to uncheck    
    */
    async uncheck(locator: Locator) {
        try {
            await locator.uncheck();
        } catch (e: any) {
            throw new Error(`Failed to uncheck element | ${e.message}`);
        }
    }
    /* Method to check wait for an element to be in a specific state or to meet certain conditions
     @param {Locator} locator - the locator of the element to wait for
     */
    async waitFor(locator: Locator, options: WaitForOptions = defaultWaitOptions) {
        try {
            await locator.waitFor(options);
        } catch (e: any) {
            throw new Error(`Failed to waitFor element | ${e.message}`);
        }
    }
}