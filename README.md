diff --git a/README.md b/README.md
index 843c9855c786eb8ae705ebc7d58a00c3d5b8cb09..92e574d8a5394c69ff902a80fe2c60d879ac5bbf 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,22 @@
 # Collion
-Catalog web site for dolls collectors
+
+Catalog web site for dolls collectors.
+
+## Что реализовано
+
+- добавление предметов в каталог;
+- два раздела: **Моя коллекция** и **Вишлист**;
+- поиск по названию, категории и заметкам;
+- быстрый перенос предмета между коллекцией и вишлистом;
+- удаление предметов;
+- хранение данных в `localStorage` (без сервера).
+
+## Запуск
+
+Рекомендуется запускать через локальный сервер, чтобы гарантированно подключались `styles.css` и `script.js`:
+
+```bash
+python3 -m http.server 8000
+```
+
+После этого откройте `http://localhost:8000`.
