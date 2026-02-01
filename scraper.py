
import bs4

import os
import traceback
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

image_class = "eA0Zlc PZPZlf WghbWd FnEtTd mkpRId m3LIae RLdvSe qyKxnc ivg-i GMCzAd"

search_url = "https://www.google.com/search?q=Lebron James&source=lnms&tbm=isch"
driver.get(search_url)

a = input()

driver.execute_script("window.scrollTo(0,0)")

page_html = driver.page_source
pageSoup = bs4.BeautifulSoup(page_html, 'html.parser')
containers = pageSoup.find_all('div', {'class':image_class})

len_containers = len(containers)


print("the number of containers is: ", len_containers)

# driver.find_element('//*[@id="rso"]/div/div/div[1]/div/div/div[1]',by="xpath").click()   

driver.find_element(by='xpath',value= '//*[@id="rso"]/div/div/div[1]/div/div/div[1]').click() 
