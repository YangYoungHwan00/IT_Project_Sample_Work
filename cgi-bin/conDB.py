import psycopg2 as db
conn = db.connect("host='localhost' port='5432' dbname='test' user='yang-yeonghwan' password=''")
cursor = conn.cursor()
conn.close()