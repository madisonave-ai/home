import logging
import azure.functions as func
import json
from azure.communication.email import EmailClient
import os
import re
connection_string = os.getenv("EMAIL_SERVICE_CONNECTION_STRING")


def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        content = req.get_json()
        email_pattern = r"\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?"   
        token = content["token"] or None
        full_name = content["fullName"] or None
        email = content["email"] or None
        message = content["message"] or None
        if email is None or message is None or full_name is None or token is None:
            return func.HttpResponse(status_code=400)
        if not re.match(email_pattern, email):
            return func.HttpResponse(status_code=400)
        client = EmailClient.from_connection_string(connection_string)
        email_to=os.getenv("EMAIL_RECEIVER")
        email_sender=os.getenv("EMAIL_SENDER")
        message = {
            "content": {
                "subject": "New message from madisonave.ai contact form",
                "html": f"<html><head><title>New Email</title></head><body>User {full_name} ({email}) has sent you new message from contact form. <br/><br/>Message:<br/><br/>{message}</body></html>",
            },
            "recipients": {
                "to": [
                    {
                        "address": f"{email_to}",
                        "displayName": f"{email_to}",
                    }
                ]
            },
            "senderAddress": f"{email_sender}",
        }
        poller = client.begin_send(message)
        result = poller.result()
        #logging.info(result)
        return func.HttpResponse(f"Message sent.", status_code=200)
    except Exception as e:
        logging.error(e)
        return func.HttpResponse(status_code=400)
