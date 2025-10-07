# Мини соцсеть — React + Redux Toolkit 2.0

> Небольшое приложение социальной сети. Реализована работа
> с [REST‑API](https://docs.google.com/document/d/1ZSXmTzkgq_Kj1VbWuq8fTv_DPD95GFDvPZgqFeIYGoM/edit?tab=t.0),
> маршрутизацией, состоянием и современными браузерными API.

<p align="left">
  <a href="#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE">Запуск</a> ·
  <a href="#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8">Функции</a> ·
  <a href="#%D1%81%D1%82%D0%B5%D0%BA">Стек</a> ·
  <a href="#%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0">Архитектура</a>
</p>

---

## Демо и доступ

* **Регистрация:** *https://social-network.samuraijs.com/signUp*
* **Авторизация:** *https://social-network.dpcs.ru/signin*

> После регистрации можно авторизоваться и пользоваться приложением.

---

## Функции

* **Состояние:** классический **Redux + Redux Toolkit (в т.ч. RTK 2.0 API)**
* **Маршрутизация:** **React Router DOM**
* **Тема:** контекст для переключения светлой/тёмной темы
* **Паттерны UI:** переиспользуемый **Layout**, **Provider Composer** для аккуратного подключения провайдеров
* **Надёжность:** **Error Boundary** для отлова ошибок
* **Производительность:** **React.lazy** , **Suspense**, **debounce**, **Intersection Observer** (ленивая
  подгрузка/инфинит‑скролл/поиск)
* **Инфраструктура UI:** **React Portal** (модалки/оверлеи)
* **Онлайн‑функции:** **WebSocket** (чат/уведомления)
* **Хранилища:** **LocalStorage** (настройки/сессии) и **IndexedDB** (офлайн‑данные)
* **Валидация:** **Zod** для схем форм
* **REST‑клиент:** работа с REST‑эндпоинтами (CRUD‑операции, авторизация)

---

## Стек

* **Ядро:** React
* **Состояние:** Redux, Redux Toolkit (RTK 2.0)
* **Маршрутизация:** React Router DOM
* **Валидация:** Zod
* **WS/Сеть:** WebSocket API, AXIOS
* **Браузерные API:** matchMedia, Intersection Observer, LocalStorage, IndexedDB

---

## Архитектура

* **Provider Composer**: группирует ThemeProvider, ErrorBoundaryProvider, SuspenseProvider, SkeletonProvider,
  AppRouterProvider, StoreProvider, .
* **Theme Context**: переключение темы
* **Store**: классический Redux + слайсы RTK 2.0
* **Error Boundary**: изоляция сбоев рендера
* **Lazy + Suspense**: ленивые страницы/виджеты
* **WebSocket Layer**: подключение и подписки (чат/статусы)
* **Persistence**: LocalStorage (настройки), IndexedDB (удаленные данные)
* **Validation Layer**: схемы Zod на вход/выход