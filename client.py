from socketIO_client import SocketIO, LoggingNamespace

# Define a function to be used when we receive a message
def on_alert_response(*args):
    print('Received Message: ' + args[0]['m'])

# Connect to SocketIO using http://localhost:3000
socketIO = SocketIO('localhost', 3000, LoggingNamespace)

# When the 'alert' event is received, call on_alert_response
socketIO.on('alert', on_alert_response)

# Wait continuously so our program doesn't stop right away
socketIO.wait()
