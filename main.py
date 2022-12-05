from flask import Flask, render_template  # , request, session, redirect, url_for

app = Flask(__name__)
app._static_folder = "static"


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/bs', methods=['GET'])
def bs():
    return render_template('bs.html')


@app.route('/av', methods=['GET'])
def av():
    return render_template('av.html')


@app.route('/pk', methods=['GET'])
def pk():
    return render_template('pk.html')


@app.route('/pr', methods=['GET'])
def pr():
    return render_template('pr.html')


@app.route('/mk', methods=['GET'])
def mk():
    return render_template('mk.html')


if __name__ == '__main__':
    app.run(
        # host='0.0.0.0', port=5151
    )

"""
@app.route('/checkout', methods=['GET'])
def checkout():
    return render_template('newCheckoutPage.html')


@app.route('/login')
def login():
    if 'email' in session:
        return redirect(url_for('main'))
    return render_template('newLoginPage.html')


@app.route('/main')
def main():
    if 'email' in session:
        return render_template('newMainPage.html', login=session['email'])
    else:
        redirect(url_for('login'))


@app.route('/logout')
def logout():
    session.pop('email', None)
    session.pop('hash', None)
    session.pop('id', None)
    return redirect(url_for('index'))


@app.route('/log-success', methods=['POST'])
def success():
    if request.method == 'POST':
        email = request.form['email']
        passwd = request.form['password']
        userid = random.randint(1, 1000)
        if email not in session:
            session['email'] = email
            session['hash'] = generate_password_hash(passwd)
            session['id'] = userid
        return redirect(url_for('main'))
    else:
        pass
"""

"""
Route template:
@app.route(<html-route>, <methods>)
def <html-name>():
    return render_template('html-file')
"""
