# ViolentConsentBanner

**Beschreibung**

Das Projekt **ViolentConsentBanner** umfasst eine Sammlung von Skripten, die entwickelt wurden, um störende Zwangsbanner auf Websites zu blockieren und den Zugriff auf Inhalte ohne Zustimmung zu ermöglichen. Die Skripte richten sich an Entwickler und Forscher, die die Mechanismen solcher Banner analysieren und verstehen möchten.

**Disclaimer**

Diese Skripte wurden ausschließlich zu Forschungs- und Bildungszwecken entwickelt. Sie dienen dazu, technologische Mechanismen zu verstehen und deren Funktionsweise zu analysieren. Die Nutzung der Skripte zur Umgehung von Tracking-Mechanismen oder Bannern, die die Zustimmung der Nutzer erfordern, ist möglicherweise rechtswidrig und verstößt gegen die Nutzungsbedingungen der betroffenen Websites.

Die Autoren übernehmen keine Verantwortung für jegliche Missbrauchs- oder illegalen Aktivitäten, die durch den Einsatz dieser Skripte entstehen könnten. Nutzer sind dafür verantwortlich, die rechtlichen Bestimmungen in ihrem Land zu beachten und sicherzustellen, dass sie die Tools nur im Einklang mit den geltenden Gesetzen und den Nutzungsbedingungen der besuchten Webseiten einsetzen.

Diese Skripte sind nicht zur dauerhaften oder regelmäßigen Nutzung gedacht und sollten ausschließlich in kontrollierten Umgebungen und zu wissenschaftlichen Zwecken eingesetzt werden.

## Installation

### Voraussetzungen

- **Browser**: Ein moderner Webbrowser wie Firefox, Chrome oder Edge.
- **Erweiterung**: Installiere die [Violentmonkey](https://violentmonkey.github.io/) Erweiterung.

### Schritt-für-Schritt-Anleitung

1. **Violentmonkey installieren**:
   - Lade die Violentmonkey-Erweiterung über den jeweiligen Browser-Store herunter und installiere sie.

2. **Skript hinzufügen**:
   - Öffne Violentmonkey durch Klicken auf das Erweiterungs-Symbol in deinem Browser.
   - Wähle "Neues Skript erstellen" oder gehe zum Violentmonkey Dashboard.
   - Klicke auf "Import from URL" (bzw. "Von URL importieren").

3. **URL des Skripts eingeben**:
   - Füge die URL des gewünschten Skripts in das Eingabefeld ein. Beispiel: Für das PUR-Abo-Banner-Entfernungsskript verwende die folgende URL:
     ```
     https://raw.githubusercontent.com/scotty86/ViolentConsentBanner/main/PurAboBannerRemover.js
     ```
   - Bestätige die Eingabe, indem du auf "OK" klickst.
   
4. **Speichern und aktivieren**:
   - Nachdem das Skript importiert wurde, speichere es und stelle sicher, dass es aktiviert ist.

5. **Updates verwalten**:
   - Violentmonkey prüft automatisch auf Updates für deine installierten Skripte.
   - Um manuell nach Updates zu suchen, gehe in das Violentmonkey Dashboard, suche das betreffende Skript, und klicke auf "Check for updates" (bzw. "Nach Updates suchen").

## Verfügbare Skripte

- **PUR Abo Banner Remover**: Entfernt die Zwangsbanner, die den Zugang zu Inhalten ohne PUR-Abonnement blockieren und IP-Tracking erzwingen.  
  URL: `https://raw.githubusercontent.com/scotty86/ViolentConsentBanner/main/PurAboBannerRemover.js`
  
  Weitere Skripte werden in Zukunft verfügbar sein, um andere Arten von Bannern auf verschiedenen Websites zu entfernen.

## Unterstützung

Bei Fragen oder Problemen wende dich bitte über die [Issues-Seite](https://github.com/scotty86/ViolentConsentBanner/issues) des Repositories an uns.
