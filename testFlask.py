from flask import Flask
from threading import Thread
from LedTest1 import receive_serial_data

app = Flask(__name__)


def read_serial_data():
    while True:
        result = receive_serial_data('COM12', 9600)  # 다른 파일의 함수 호출
        # 여기서 데이터를 처리하거나 필요에 따라 전역 변수를 업데이트하도록 수정
        print(result)


@app.route('/')
def hello():
    return 'Flask Server Running'

if __name__ == '__main__':
    serial_thread = Thread(target=read_serial_data)
    serial_thread.daemon = True
    serial_thread.start()
    app.run(debug=True)

