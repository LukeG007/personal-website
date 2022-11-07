from flask import Flask, render_template, request, make_response

app = Flask(__name__)

@app.route('/')
def home():
    if 'theme' in request.cookies:
        theme = request.cookies['theme']
    else:
        theme = 'dark'
        resp = make_response(render_template('home.html', theme=theme))
        resp.set_cookie('theme', theme)
        return resp
    return render_template('home.html', theme=theme, title='About')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6743)
