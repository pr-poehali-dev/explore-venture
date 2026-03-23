import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки участника-кулинара на фестиваль 'Вкус моей улицы' на email организатора"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    format_ = body.get('format', '').strip()
    cuisine = body.get('cuisine', '').strip()
    comment = body.get('comment', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Имя и телефон обязательны'}
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'stuwen0509@gmail.com'
    recipient = 'stuwen0509@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка участника — {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <h2>Новая заявка на участие в фестивале «Вкус моей улицы»</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Имя / Название</td><td style="padding:8px;">{name}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Телефон</td><td style="padding:8px;">{phone}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;">{email or '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Формат участия</td><td style="padding:8px;">{format_ or '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Кухня / Блюда</td><td style="padding:8px;">{cuisine or '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Комментарий</td><td style="padding:8px;">{comment or '—'}</td></tr>
    </table>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'success': True}
    }