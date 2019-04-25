from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect

from .models import *

from prizivnik75 import settings


def index(request):
    work = Howword.objects.all()
    trust = Trust.objects.all()
    content = Content.objects.all()
    voil = Violations.objects.all()
    faq = FAQ.objects.all()
    review= Reviews.objects.all()
    about = About.objects.all()
    context= {
        "work": work,
        "trust": trust,
        "content": content,
        "voil": voil,
        "faq":faq,
        "review": review,
        "about":about
    }
    return render(request, 'app/index.html',context)


def politika(request):
    return render(request, 'app/politika.html')


def polzovatel(request):
    return render(request, 'app/polzovatel.html')


def mail(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        check = request.POST.get('check')
        tel = request.POST.get('tel')
        dis = request.POST.get('dis')

        if name and check is not None and tel:
            content = 'Имя: ' + name + '\nСогласен на обработку данных: ' + check + '\nТелефон: ' + tel + '\nСообщение: ' + dis
            subject = 'Хочу на бесплатную консультация'
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ['prizivnik75@yandex.ru']
            # recipient_list = ['gentostage@gmail.com']
            send_mail(subject, content, email_from, recipient_list)
            messages.success(request, '<li class="greentext" ><h5>Ваша заявка успешно отправлена, ожидайте звонка.</h5></li>')
        else:
            temp="\n"
            if not name:
                temp=temp+"<li class ='red-text'> Заполните Имя </li>"

            if check is None:
                temp=temp+"<li class ='red-text'> Согласитесь на обработку данных </li>"

            if not tel:
                temp=temp+"<li class ='red-text'> Заполните телефон </li>"
            messages.error(request, '<li>Не правильно заполнены данные. Или не все поля заполнены:</li> '+temp)

    return redirect('/')
