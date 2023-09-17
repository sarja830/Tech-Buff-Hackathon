from bardapi import Bard 
import os
from dotenv import load_dotenv

load_dotenv()
token = os.getenv("BARD_API_KEY")

bard = Bard(token = token)
response = bard.get_answer("What is the stock price of NVIDIA?")
print(response)
