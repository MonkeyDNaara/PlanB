# Evently - Systemarchitektur & Projektübersicht

Evently - Systemarchitektur

Kurzbeschreibung:
Dieses Diagramm zeigt die grundlegende Systemarchitektur von Evently: Client (Browser/Mobile) kommuniziert mit dem React/Vite-Frontend. Das UI-System (Design System) liefert wiederverwendbare Komponenten. Authentifizierung läuft über den Auth Service (OAuth/JWT), geschützte Routen prüfen Tokens bevor Anfragen an das API-Gateway weitergeleitet werden. Backend-Services (Events API) verwalten Business-Logik und persistieren in der Events DB. Externe Services (OAuth Provider, Payments, Webhooks) sind angeschlossen. Deployment erfolgt über CI/CD in K8s/Docker.

Wichtige Komponenten:
- Client / Frontend (React + Vite)
- UI-System / Design System
- Auth Service (OAuth, JWT)
- Protected Routes
- API Gateway (REST / JSON)
- Events API (Backend Services)
- Events DB (Postgres)
- External Services (OAuth Provider, Payments)
- Deployment / CI-CD

Interaktionen (Beispiel):
1) Benutzer -> Frontend (HTTPS)
2) Frontend -> Auth (Login POST)
3) Auth -> External OAuth Provider (OAuth Token)
4) Auth issues JWT -> Frontend
5) Frontend -> Protected Route -> API Gateway (Authenticated requests)
6) API Gateway -> Events API (REST / JSON)
7) Events API -> Events DB (Read/Write)

Projektfortschritt:
Gesamt: 45% (Schätzung)
Frontend / UI: 70% (Schätzung)
Auth: 50% (Schätzung)
API: 30% (Schätzung)
Dokumentation: 40% (Schätzung)
Deployment: 20% (Schätzung)

Hinweise:
- Prozentwerte sind geschätzt und klar als Schätzung gekennzeichnet, solange keine belastbaren Zahlen vorliegen.
- Teamrollen sind noch nicht final verteilt; Platzhalter wurden eingesetzt.

Nächste Schritte:
- Verifizieren der Teamverantwortlichkeiten
- Detaillierte API- und Auth-Flows ausarbeiten
- CI/CD-Pipeline definieren
- Tests und Dokumentation ausbauen
