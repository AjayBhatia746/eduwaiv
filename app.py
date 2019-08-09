from flask import Flask
import sqlite3
from flask_cors import CORS,cross_origin#A Flask extension for handling Cross Origin Resource Sharing (CORS),
# making cross-origin AJAX possible.
#This package has a simple philosophy, when you want to enable CORS, you wish to enable it for all use cases on a domain. 
from flask import request,jsonify
app=Flask("__main__")
cors=CORS(app)
@app.route('/info',methods=['GET'])
@cross_origin(allow_headers=['Content-Type','Authorization'])
def run():
    try:
        data=request.get_json()
        print (request.args['first_name'])
        first_name=request.args['first_name']
        last_name=request.args['last_name']
        location=request.args['location']
        dob="asdasd"#data['dob']
        gender=request.args['gender']
        with sqlite3.connect("student_info.db") as con:
            cur=con.cursor()
            print("Connection Done")
            cur.execute("INSERT INTO student1(first_name,last_name,gender,dob,location) VALUES(?,?,?,?,?)",(first_name,last_name,gender,dob,location))
            con.commit()
            cur.close()
        return {"res":"sucess"}
    except Exception as err:
        print(err)
        return{"res":"error"}


@app.route('/academic',methods=['GET'])
@cross_origin(allow_headers=['Content-Type','Authorization'])
def run1():
    try:
        data=request.get_json()
        email=request.args['email']
        contact_no=request.args['contact_no']
        git_link=request.args['git_link']
        linkd_link=request.args['linkd_link']
        with sqlite3.connect("student_info.db") as con:
            cur=con.cursor()
            print("Connection Done")
            cur.execute("INSERT INTO biodata(email,contact_no,git_link,linkd_link) VALUES(?,?,?,?)",(email,contact_no,git_link,linkd_link))
            con.commit()
            cur.close()
        return {"res":"Success"}
    except Exception as err:
        print(err)
        return{"res":"Error"}

@app.route('/biodata',methods=['GET'])
@cross_origin(allow_headers=['Content-Type','Authorization'])
def run2():
    try:
        data=request.get_json()
        clg_name=request.args['clg_name']
        degree=request.args['degree']
        from_year=request.args['from_year']
        with sqlite3.connect("student_info.db") as con:
            cur=con.cursor()
            print("Connection Done")
            cur.execute("INSERT INTO academic(clg_name,degree,from_year) VALUES(?,?,?)",(clg_name,degree,from_year))
            con.commit()
            cur.close()
        return {"res":"Sucess"}
    except Exception as err:
        print(err)
        return{"res":"Error"}

if __name__=="__main__":
    app.run(debug=True,host='127.0.0.1',port='5050')
