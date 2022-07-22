7.  Запустить анализ <https://memcrab.com> в Page Speed Insights (<https://developers.google.com/speed/pagespeed/insights/>). Написать две следующие задачи по улучшению показателей
8.  Запустить анализ <https://memcrab.com> в Chrome Devtools Lighthouse. Чем отличается от запуска на pageSpeed?

Відповідь:
Лайтхаус використовує готову дату (lab data) в тестовому мередовищі, а спідпейдж реальний юзер експіріенс з реальними умовами + lab data

Лайтхауз

**----------------------------------**

First Contentful Paint
1.0 s

Time to Interactive
2.5 s

Speed Index
1.2 s

Total Blocking Time
10 ms

Largest Contentful Paint
1.0 s

Cumulative Layout Shift
0.208

**----------------------------------**

LCP є меншим ніж 2.5 секунди - це добре
Якби був поганий, то можна зробити 4 наступні кроки (їх потрібно робити всі, а не ожин так, один ні, тому що якщо покращити лише 1 або 2 - ефекту практично не буде)

1. Зменшити час загрузки сторінки. Наприклад CDN. Тут ми маємо найменше контролю. Time to first byte
2. SSR щоб воно генерувало html на сервері, а не на клієнті (джс не має блочити рисовку) Element render delay

3.Зменшити вагу картинок (наприклад під певний скрін йде менша картинка). Також не потрібно тримати high resolution images. Resource load time

4. Забрати усі непотрібні стилі, або те що робить загрузку ассетів довшою. Resource load delay

Cumulative Layout Shift більший ніж 0.1 - потрібно покращити (зазвичай це через зображення, тому потрібно давати статичну ширину та висоту, або робити predefined height)

Total Blocking Time 10 мілісекунд + Time to Interactive - джс не блочить основний потік, що робить сайт зразу інтерактивним - добре

Вебсайт є SEO-friendly
