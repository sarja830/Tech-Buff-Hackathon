import os
import openai
from flask import Flask
from flask import request

openai.organization = "org-hmLTnmUwpQ26fR7nqDqxWwVq"
openai.api_key = os.getenv("OPENAI_API_KEY")

# app = Flask(__name__)
json=" The json string should have a key Actionable_Steps with value as json object list. Each object in the list is one step and include the step number, category, tasks, team positions , resources"
prefix= "Act like a venture coach and mentor and give me actionable steps with points to build my start from scratch which is "
suffix= " Give an answer in json format and also give me local actual resources for each step around Niagara Falls Buffalo Western New york region. I also need different positions I would need in my team for each step."

@app.route('/bplan',methods=['POST'])
def bplan():
    data = request.json 
    prompt = data['prompt']     
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prefix+prompt+suffix_json}
        ]
    )
    print(response['choices'][0]['message']['content'])
 
# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()


# prompt="By 2026, more than 217 million people in the U.S. will use online food delivery services. Tap into that market and start a meal-prep service to make people’s lives easier and cater to specialized diets (keto, vegan, Whole30)."
# print(prefix+prompt+suffix+json)
# response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "user", "content": prefix+prompt+suffix+json}
#         ]
#     )
# print(response['choices'][0]['message']['content'])

