diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..762aade68d9a3866638614aab830e09fc756ee76
--- /dev/null
+++ b/script.js
@@ -0,0 +1,147 @@
+const STORAGE_KEY = 'collion-items-v1';
+const placeholderImage =
+  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=320&q=60';
+
+const form = document.getElementById('item-form');
+const searchInput = document.getElementById('search');
+const collectionList = document.getElementById('collection-list');
+const wishlistList = document.getElementById('wishlist-list');
+const stats = document.getElementById('stats');
+const template = document.getElementById('item-template');
+
+let items = loadItems();
+
+function loadItems() {
+  try {
+    const raw = localStorage.getItem(STORAGE_KEY);
+    return raw ? JSON.parse(raw) : [];
+  } catch {
+    return [];
+  }
+}
+
+function saveItems() {
+  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
+}
+
+function makeId() {
+  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
+}
+
+function createItem(formData) {
+  return {
+    id: makeId(),
+    name: formData.get('name').trim(),
+    category: formData.get('category').trim(),
+    year: formData.get('year').trim(),
+    rarity: formData.get('rarity'),
+    condition: formData.get('condition'),
+    image: formData.get('image').trim() || placeholderImage,
+    notes: formData.get('notes').trim(),
+    listType: formData.get('listType'),
+    createdAt: Date.now()
+  };
+}
+
+function filterItems() {
+  const query = searchInput.value.toLowerCase().trim();
+  if (!query) return [...items].sort((a, b) => b.createdAt - a.createdAt);
+
+  return items
+    .filter((item) => {
+      const haystack = [item.name, item.category, item.notes, item.rarity, item.condition]
+        .join(' ')
+        .toLowerCase();
+      return haystack.includes(query);
+    })
+    .sort((a, b) => b.createdAt - a.createdAt);
+}
+
+function renderCards(container, listItems, targetList) {
+  container.innerHTML = '';
+
+  if (!listItems.length) {
+    container.innerHTML = `<p class="empty">Пока пусто. Добавьте предмет в раздел «${targetList === 'collection' ? 'Моя коллекция' : 'Вишлист'}».</p>`;
+    return;
+  }
+
+  listItems.forEach((item) => {
+    const node = template.content.firstElementChild.cloneNode(true);
+    node.querySelector('.card__image').src = item.image || placeholderImage;
+    node.querySelector('.card__title').textContent = item.name;
+    node.querySelector('.card__meta').textContent = [
+      item.category || 'Без категории',
+      item.year ? `год: ${item.year}` : '',
+      item.rarity || '',
+      item.condition || ''
+    ]
+      .filter(Boolean)
+      .join(' • ');
+    node.querySelector('.card__notes').textContent = item.notes || 'Без заметок';
+
+    const toggleButton = node.querySelector('[data-action="toggle"]');
+    toggleButton.textContent =
+      targetList === 'collection' ? 'В вишлист' : 'В коллекцию';
+    toggleButton.addEventListener('click', () => toggleList(item.id));
+
+    node
+      .querySelector('[data-action="remove"]')
+      .addEventListener('click', () => removeItem(item.id));
+
+    container.appendChild(node);
+  });
+}
+
+function updateStats(visibleItems) {
+  const collectionCount = items.filter((item) => item.listType === 'collection').length;
+  const wishlistCount = items.filter((item) => item.listType === 'wishlist').length;
+  stats.textContent = `Всего: ${items.length} • В коллекции: ${collectionCount} • В вишлисте: ${wishlistCount} • Найдено: ${visibleItems.length}`;
+}
+
+function render() {
+  const filtered = filterItems();
+  renderCards(
+    collectionList,
+    filtered.filter((item) => item.listType === 'collection'),
+    'collection'
+  );
+  renderCards(
+    wishlistList,
+    filtered.filter((item) => item.listType === 'wishlist'),
+    'wishlist'
+  );
+  updateStats(filtered);
+}
+
+function toggleList(id) {
+  items = items.map((item) =>
+    item.id === id
+      ? { ...item, listType: item.listType === 'collection' ? 'wishlist' : 'collection' }
+      : item
+  );
+  saveItems();
+  render();
+}
+
+function removeItem(id) {
+  items = items.filter((item) => item.id !== id);
+  saveItems();
+  render();
+}
+
+form.addEventListener('submit', (event) => {
+  event.preventDefault();
+  const data = new FormData(form);
+  const item = createItem(data);
+
+  if (!item.name) return;
+
+  items.push(item);
+  saveItems();
+  form.reset();
+  render();
+});
+
+searchInput.addEventListener('input', render);
+
+render();
