# Evently Architektur (PlanB)

# Evently Architektur (PlanB)

## Kurzbeschreibung

Dieses Excalidraw-Diagramm zeigt eine übersichtliche Systemarchitektur für das Projekt "Evently" (PlanB). Es enthält Client/Frontend, UI-System, Authentifizierung, geschützte Routen, Events API, Events DB, externe Services, Deployment sowie Team- und Projektfortschrittsbereiche.

## Architektur / Aufbau

Links: Benutzer / Client (Browser, Mobilgerät)
Mitte: Frontend (React + Vite) und UI-System (EVENTLY UI)
Mitte/Rechts: Auth (OAuth2 / JWT) und geschützte Routen
Rechts: Events API, Events DB, Externe Services
Unten: Deployment, Projektfortschritt, Projektbeschreibung & Team

## Wichtige Komponenten

- Benutzer / Client: Interagiert über HTTPS mit dem Frontend.
- Frontend: React + Vite, nutzt das EVENTLY UI Designsystem.
- EVENTLY UI: Komponentenbibliothek für konsistente UI.
- Auth: Login, OAuth2 / JWT für Token-Management.
- Geschützte Route: Route Guards prüfen Tokens vor API-Zugriff.
- Events API: REST-API für Event-Management (JSON).
- Events DB: Persistenz (z. B. Postgres).
- Externe Services: Webhooks, 3rd-Party Integrationen.
- Deployment: CI/CD, Docker/K8s für Backend und Hosting des Frontends.

## Interaktionen

- Client → Frontend: HTTPS, UI Interaktionen
- Frontend → Auth: POST /login → OAuth2 / JWT
- Auth → Protected Route: Ausgabe JWT (Access Token)
- Protected Route → Events API: autorisierte REST-Calls
- Events API → Events DB: Read/Write (SQL)
- Events API → Externe Services: Webhooks / API-Calls

## Authentifizierung / Sicherheit

- OAuth2 / JWT werden im Diagramm als Auth-Mechanismus dargestellt.
- Tokens werden vom Auth-Service ausgegeben und bei geschützten Routen geprüft.
- Wichtige Verbindungen sind mit Protokollangaben (HTTPS, REST, JWT) beschriftet.

## Team / Verantwortung

Siehe Bereich "Projektbeschreibung & Team" und "Team / Verantwortung" im Diagramm. Aktuelle Rollen/Aufgaben sind noch nicht final zugewiesen — entsprechend markiert.

## Projektfortschritt

Hinweis: Keine belastbaren prozentualen Fortschrittswerte liegen vor. Alle folgenden Werte sind als "noch zu bestimmen" gekennzeichnet und müssen vom Team validiert werden.

Projektfortschritt (sichtbarer Bereich im Diagramm):

- Gesamt: noch zu bestimmen
- Frontend / UI: noch zu bestimmen
- Auth: noch zu bestimmen
- API: noch zu bestimmen
- Dokumentation: noch zu bestimmen
- Deployment: noch zu bestimmen
- Tests: noch zu bestimmen

Wenn belastbare Metriken vorliegen, bitte die Prozentwerte aktualisieren.

## Legende

- Blau: Frontend / Client (im Diagramm als Frontend)
- Türkis: UI-System / Designsystem
- Orange: Auth / Login / Token
- Gelb: Geschützte Route / Berechtigungen
- Grün: Backend / API / Services
- Dunkelgrün/Grau-Grün: Datenbank / Storage
- Grau: DevOps / Deployment
- Rot: Fehler / Risiken
- Hellgrau: Dokumentation / Hinweise

Farbzuordnung im Excalidraw-Editor bitte konsistent anwenden.

## Hinweise

- Verbindungen sind beschriftet (z. B. HTTPS, REST, JWT) — das erleichtert den technischen Austausch.
- Der Bereich "Projektfortschritt" ist deutlich sichtbar und enthält die aktuellen Schätzungen bzw. Platzhalter.
- Die Teamrollen sind absichtlich als "noch zu bestimmen" markiert, bis die Aufgabenverteilung bestätigt ist.

## Offene Punkte

- Konkrete Prozentwerte für den Projektfortschritt fehlen.
- Verantwortlichkeiten der Teammitglieder müssen finalisiert werden.
- CI/CD-Details (Branch-Strategie, Secrets-Management) noch offen.

## Nächste Schritte

- Team-Zuordnung klären und im Diagramm aktualisieren.
- Fortschrittsmetriken erheben und Prozentwerte ergänzen.
- Detaillierte Deployment-Pipeline dokumentieren.

---

Dateien:
- Diagramm: docs/evently-architektur.excalidraw
- Empfehlung für Dokumentation: docs/evently-architektur.md
