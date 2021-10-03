#!/usr/bin/env python3
import sys
import numpy
import random
import selenium
from selenium import webdriver


rounds = int(sys.argv[1])
driver = webdriver.Safari()

driver.get('file:///Users/pbalazs101/Code/2021:2/SoftMod/final/SZFM-kisprojekt/converter.html')

i = 0
correct = 0
failed = 0

while i != rounds:
    number = random.randint(1,10000)
    base = random.randint(2,36)

    driver.refresh()

    from_box = driver.find_element_by_id('inputAmount')
    from_box.send_keys(str(number))

    #Set the output base
    to_base_box = driver.find_element_by_id('outputBase')
    to_base_box.clear()
    to_base_box.send_keys(str(base))

    # Press convert
    convert_button = driver.find_element_by_class_name('convertbutton')
    convert_button.click()

    # Save result of converted number
    result = driver.find_element_by_id('outputAmount')
    converted_value_szk = result.get_attribute('value')
    numpy_calculated_value = numpy.base_repr(number,base)

    print()
    print("Value from számkonverter: {}".format(converted_value_szk))
    print("Value for verification: {}".format(numpy_calculated_value.lower()))
    if converted_value_szk == str(numpy_calculated_value).lower():
        print("PASSED")
        correct += 1
    else:
        print("FAILED")
        failed += 1


    i += 1

print()
print("--------------------------------------")
print()
print("Number of successfull conversions: {}".format(correct))
print("Number of unsuccessfull conversions: {}".format(failed))
print()
