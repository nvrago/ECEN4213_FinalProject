#This is a basic script to host a webpage at the IP specified
# By the 'IP_Address' variable

# Import library to create webserver to host webpage
from flask import Flask, render_template
from flask import Flask, render_template, Response,redirect,request, url_for
import itertools
import time
app = Flask(__name__)



#Find the IP Address of your device
#Use the 'ifconfig' terminal command, the address should be in the format  "XX.XXX.XXX.XXX"
IP_Address = 'XX.XXX.XXX.XXX'
PORT = 8080
#Connect the *.html page to the server and run as the default page


@app.route('/')
def index():
    if request.headers.get('accept') == 'text/event-stream':
        def events():
            for i, c in enumerate(itertools.cycle('\|/-')):

                # the following codes send the random sensor status to the webpage. Finsh the parse_data.js code
                yield "data: %s\n\n" % ('b1c0d0')
                time.sleep(0.1)
                yield "data: %s\n\n" % ('b0c4d0')
                time.sleep(0.1)
                yield "data: %s\n\n" % ('b0c2d0')
                time.sleep(0.1)
                yield "data: %s\n\n" % ('b0c1d0')
                time.sleep(0.1)
                yield "data: %s\n\n" % ('b0c0d3')
                time.sleep(0.1)
                yield "data: %s\n\n" % ('b4c0d0')
                time.sleep(0.1)
                
        return Response(events(), content_type='text/event-stream')
    return render_template('FinalEXE2b.html')



@app.route('/UpFunction')
def UpFunction():
    print('In UpFunction')
    return "Nothing"

# define the rest of the functions to handle the left, right, down and stop buttons (4 functions)
@app.route('/function_name')
def function_name():
    print('In XXFunction')
    return "Nothing"


    

#Start the server
if __name__ == "__main__":
    app.run(debug=True, host=IP_Address, port=PORT, use_reloader=False)
