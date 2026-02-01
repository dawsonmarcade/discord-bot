# import os
# import requests
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager

import bs4

import os
import traceback
import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)


search_url = "https://www.google.com/search?q=Lebron James&source=lnms&tbm=isch"
driver.get(search_url)

a = input()

driver.execute_script("window.scrollTo(0,0)")

page_html = driver.page_source
pageSoup = bs4.BeautifulSoup(page_html, 'html.parser')
containers = pageSoup.find_all('div', {'class':"PG8i1e 0oz8t PyLEff"})

len_containers = len(containers)
print(f"Found {len_containers} containers")
