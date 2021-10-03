#!/usr/bin/env python3
import selenium
from selenium import webdriver

driver = webdriver.Safari()

driver.get('file:///Users/pbalazs101/Code/2021:2/SoftMod/final/SZFM-kisprojekt/converter.html')

from_box = driver.find_element_by_id('inputAmount')
from_box.send_keys('10')

convert_button = driver.find_element_by_class_name('convertbutton')
convert_button.click()

result = driver.find_element_by_id('outputAmount')
print(result.get_attribute('value'))
