from django.conf import settings
from django.shortcuts import render, redirect
from django.core.mail import send_mail

def index(request):
    return render(request, 'app/index.html')

def politika(request):
    return render(request, 'app/politika.html')

def mail(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        check = request.POST.get('check')
        if check is None:
            check = "Не нажал галочку согласен на обработку персональных данных"
        tel = request.POST.get('tel')
        dis = request.POST.get('dis')
        print(name)
        print(check)
        print(tel)
        print(dis)

        content = 'Имя: '+name+'\nСогласен на обработку данных: '+check+'\nТелефон: '+tel+'\nСообщение: '+dis
        subject = 'Хочу на бесплатную консультация'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['prizivnik75@yandex.ru']
        send_mail(subject, content, email_from, recipient_list)
    return redirect('/')