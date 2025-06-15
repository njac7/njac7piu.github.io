# Cinemini – dokumentacja projektu

## 1. Wstęp

Cinemini to projekt strony internetowej poświęconej tematyce filmowej, stworzony w ramach realizacji zadania zaliczeniowego. Serwis oferuje przegląd filmów i seriali, galerię zdjęć, aktualne wiadomości z branży oraz prosty system forum i formularz kontaktowy. Projekt został zaprojektowany z myślą o pełnej responsywności i przyjaznym, nowoczesnym wyglądzie, inspirowanym platformami streamingowymi.

## 2. Opis struktury serwisu

Strona składa się z siedmiu głównych podstron:

- `index.html` – Strona główna z logo, krótkim opisem i tłem
- `filmy.html` – Lista filmów z możliwością filtrowania i sortowania
- `seriale.html` – Lista seriali z dodatkowymi informacjami (np. liczba sezonów)
- `galeria.html` – Galeria zdjęć z układem 3-2-1 kolumnowym w zależności od rozdzielczości
- `nowosci.html` – Lista wiadomości z możliwością rozwijania treści na urządzeniach mobilnych
- `wpisy.html` – Forum z pobieranymi dynamicznie wpisami z zewnętrznego API
- `kontakt.html` – Formularz kontaktowy z potwierdzeniem wysłania wiadomości

Dodatkowe pliki:
- `style.css` – główny plik stylów
- `burger.js` – obsługa mobilnego menu nawigacyjnego

## 3. Opis technologii zastosowanych przy tworzeniu serwisu

- HTML5 – struktura i semantyka dokumentów
- CSS3 – ciemny motyw kolorystyczny, neonowe efekty, animacje
- JavaScript – dynamiczne interakcje (menu, filtrowanie, formularz)
- JSONPlaceholder API – pobieranie danych do sekcji wpisów (wpisy.html)
- Media queries – pełna responsywność dla urządzeń mobilnych, tabletów i komputerów

## 4. Testy

Projekt został przetestowany pod kątem działania na różnych urządzeniach i przeglądarkach.

| Przeglądarka | Desktop (≥ 1024px) | Tablet (768–1023px) | Mobile (≤ 767px) |
|--------------|--------------------|----------------------|------------------|
| Chrome       |         ✔          |          ✔           |        ✔         |
| Firefox      |         ✔          |          ✔           |        ✔         |
| Opera        |         ✔          |          ✔           |        ✔         |
| Edge         |         ✔          |          ✔           |        ✔         |
| Safari*      |         ✖          |          ✖           |        ✖         |

\* Testy nie zostały przeprowadzone na przeglądarce Safari ze względu na brak urządzeń kompatybilnych z tym środowiskiem.

## 5. Podsumowanie

Projekt Cinemini spełnia wszystkie założenia funkcjonalne i techniczne. Strona jest w pełni responsywna, estetyczna i zgodna z wymaganiami zadania. Zastosowane rozwiązania techniczne pozwalają na dalszą rozbudowę serwisu np. o system logowania lub integrację z bazą danych.
