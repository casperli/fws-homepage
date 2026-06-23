# Anleitung: Website bearbeiten

Diese Anleitung erklärt, wie Inhalte auf der Website der Feuerwehr Schwerzenbach bearbeitet werden. Alle Änderungen werden direkt auf GitHub gemacht — es ist keine Software-Installation nötig.

## Übersicht

Die Website besteht aus einfachen Textdateien (Markdown). Jede Seite hat eine eigene Datei im Ordner `content/`. Änderungen an diesen Dateien werden automatisch auf der Website veröffentlicht.

## Aufbau einer Seite

Jede Datei beginnt mit einem Block zwischen `---`-Zeichen (sogenannter Frontmatter). Dort stehen Metadaten wie Titel und Datum. Darunter folgt der eigentliche Inhalt.

```markdown
---
title: Mein Seitentitel
date: 2025-06-15
---

Hier kommt der Text der Seite.
```

## Inhalte bearbeiten

### Bestehende Seite bearbeiten

1. Auf [GitHub](https://github.com) zum Repository navigieren
2. In den Ordner `content/` gehen
3. Die gewünschte Datei anklicken
4. Auf das Stift-Symbol (Bearbeiten) klicken
5. Änderungen vornehmen
6. Unten auf **"Commit changes"** klicken
7. Im Dialog **"Create a new branch and start a pull request"** wählen
8. Pull Request erstellen

### Neue Neuigkeit erstellen

1. Auf GitHub in den Ordner `content/aktuelles/` navigieren
2. Auf **"Add file" → "Create new file"** klicken
3. Dateiname eingeben, z.B. `tag-der-offenen-tuer.md`
4. Folgenden Inhalt einfügen:

```markdown
---
title: Tag der offenen Tür
date: 2025-09-20
---

Am 20. September laden wir zum Tag der offenen Tür ein.
Kommt vorbei und erlebt die Feuerwehr hautnah!
```

5. **"Commit changes"** → neuen Branch erstellen → Pull Request erstellen

### Neues Fahrzeug hinzufügen

1. Auf GitHub in den Ordner `content/fahrzeuge/` navigieren
2. Neue Datei erstellen, z.B. `tankloesch­fahrzeug.md`
3. Folgenden Inhalt anpassen und einfügen:

```markdown
---
title: Tanklöschfahrzeug
weight: 50
image: images/fahrzeuge/tlf.jpeg
vehicle_type: Löschfahrzeug
specs:
  Baujahr: "2020"
  Besatzung: "6"
  Gewicht: "14t"
---

Beschreibung des Fahrzeugs hier eingeben.
```

- `weight`: Bestimmt die Reihenfolge in der Übersicht (kleinere Zahl = weiter oben)
- `image`: Pfad zum Fahrzeugbild (siehe "Bilder hinzufügen")
- `specs`: Technische Daten als Liste von Bezeichnung und Wert

## Bilder hinzufügen

Bilder werden automatisch optimiert (verkleinert und ins WebP-Format konvertiert). Dafür müssen sie im richtigen Ordner liegen.

1. Auf GitHub in den passenden Ordner navigieren:
   - Fahrzeuge: `assets/images/fahrzeuge/`
   - Aktuelles (Neuigkeiten): `assets/images/aktuelles/`
   - Hero-Bilder: `assets/images/hero/`
2. Auf **"Add file" → "Upload files"** klicken
3. Bild hochladen (**JPEG oder PNG** verwenden, kein AVIF)
4. Commit erstellen (direkt oder via Pull Request)

Im Frontmatter wird das Bild ohne `assets/` referenziert:

```markdown
image: images/fahrzeuge/mein-bild.jpeg
```

Im Markdown-Text können Bilder so eingebunden werden:

```markdown
![Beschreibung des Bildes](/images/fahrzeuge/mein-bild.jpeg)
```

**Hinweis:** Die Bilder werden beim Erstellen der Website automatisch in verschiedene Grössen und ins WebP-Format konvertiert. Es reicht, ein Bild in guter Qualität hochzuladen — die Optimierung passiert automatisch.

## Textformatierung (Markdown)

| Was | Markdown | Ergebnis |
|-----|----------|----------|
| Fett | `**fetter Text**` | **fetter Text** |
| Kursiv | `*kursiver Text*` | *kursiver Text* |
| Überschrift | `## Überschrift` | Überschrift |
| Link | `[Text](https://example.com)` | [Text](https://example.com) |
| Bild | `![Beschreibung](/images/bild.jpg)` | (Bild) |
| Liste | `- Punkt 1` | Aufzählung |

## Navigation anpassen

Die Navigationsleiste (Menü) wird in der Datei `hugo.yaml` definiert. Um Menüpunkte hinzuzufügen, zu entfernen oder umzusortieren, muss diese Datei bearbeitet werden.

### Aktueller Aufbau

In `hugo.yaml` gibt es einen Abschnitt `menus.main`, der so aussieht:

```yaml
menus:
  main:
    - name: Startseite
      pageRef: /
      weight: 10
    - name: Aktuelles
      pageRef: /aktuelles
      weight: 20
    - name: Jahresprogramm
      pageRef: /jahresprogramm
      weight: 25
    - name: Einsätze
      pageRef: /einsaetze
      weight: 30
    - name: Impressionen
      pageRef: /eindruecke
      weight: 40
    - name: Fahrzeuge
      pageRef: /fahrzeuge
      weight: 60
    - name: Kontakt
      pageRef: /kontakt
      weight: 70
    - name: Mitmachen
      pageRef: /mitmachen
      weight: 80
```

- `name`: Der Text, der im Menü angezeigt wird
- `pageRef`: Der Pfad zur Seite (entspricht dem Ordner oder der Datei unter `content/`)
- `weight`: Bestimmt die Reihenfolge (kleinere Zahl = weiter links)

### Neuen Menüpunkt hinzufügen

1. Auf GitHub die Datei `hugo.yaml` öffnen und bearbeiten
2. Unter `menus.main` einen neuen Eintrag hinzufügen, z.B.:

```yaml
    - name: Über uns
      pageRef: /ueber-uns
      weight: 45
```

3. Sicherstellen, dass die passende Inhaltsseite existiert (z.B. `content/ueber-uns.md`)
4. Commit erstellen → Pull Request → Merge

**Wichtig:** Die Einrückung muss exakt stimmen (4 Leerzeichen vor dem `-`, 6 Leerzeichen vor `name`, `pageRef` und `weight`).

### Menüpunkt entfernen

1. Auf GitHub die Datei `hugo.yaml` öffnen und bearbeiten
2. Den gesamten Eintrag löschen (alle 3 Zeilen: `name`, `pageRef`, `weight`)
3. Commit erstellen → Pull Request → Merge

Die zugehörige Inhaltsseite unter `content/` bleibt bestehen — sie ist einfach nicht mehr im Menü sichtbar, aber weiterhin über die direkte URL erreichbar.

### Menüpunkt umbenennen oder umsortieren

1. Auf GitHub die Datei `hugo.yaml` öffnen und bearbeiten
2. Den `name` ändern (für Umbenennung) oder den `weight`-Wert anpassen (für Umsortierung)
3. Commit erstellen → Pull Request → Merge

**Tipp:** Zwischen den Gewichtungen Platz lassen (z.B. 10, 20, 30 statt 1, 2, 3), damit später neue Einträge einfach dazwischen eingefügt werden können.

## Workflow: Von der Änderung zur Website

1. **Bearbeiten**: Datei auf GitHub bearbeiten oder neu erstellen
2. **Branch erstellen**: Beim Speichern "Create a new branch" wählen
3. **Pull Request**: Pull Request erstellen, damit die Änderung geprüft werden kann
4. **Review**: Ein anderes Teammitglied prüft die Änderung
5. **Merge**: Nach der Freigabe wird der Pull Request gemergt
6. **Automatisch online**: Die Website wird automatisch aktualisiert (dauert ca. 1-2 Minuten)

## Lokale Entwicklung (optional)

Für die meisten Änderungen reicht die Bearbeitung direkt auf GitHub (siehe oben). Wer grössere Anpassungen macht oder die Website vor dem Veröffentlichen lokal testen möchte, kann sie auf dem eigenen Computer laufen lassen. Dazu wird **Hugo (Extended)** und **Git** benötigt.

### Hugo installieren

**macOS** (mit [Homebrew](https://brew.sh)):

```bash
brew install hugo git
```

**Windows** (mit [winget](https://learn.microsoft.com/windows/package-manager/), in PowerShell):

```powershell
winget install Hugo.Hugo.Extended
winget install Git.Git
```

Alternativ unter Windows mit [Chocolatey](https://chocolatey.org): `choco install hugo-extended git`

> **Wichtig:** Es muss die **Extended**-Variante von Hugo sein (nicht die normale), da die Website Bilder zu WebP konvertiert. Mit `hugo version` prüfen — die Ausgabe muss `+extended` enthalten.

### Projekt herunterladen

Einmalig das Repository klonen (Pfad/URL ggf. anpassen):

```bash
git clone https://github.com/casperli/fws-homepage.git
cd fws-homepage
```

Die Befehle sind auf macOS (Terminal) und Windows (PowerShell oder Eingabeaufforderung) identisch.

### Website lokal starten

Im Projektordner:

```bash
hugo server
```

Danach im Browser http://localhost:1313 öffnen. Die Seite aktualisiert sich automatisch (Live-Reload), sobald eine Datei gespeichert wird. Zum Beenden im Terminal `Strg + C` drücken.

Nützliche Varianten:

- `hugo server -D` — zeigt auch Entwürfe an (Seiten mit `draft: true`)
- `hugo --minify` — erzeugt einmalig die fertige Website im Ordner `public/` (ohne Server, wie beim automatischen Deploy)

> **Hinweis:** Die Mitglieder-Onboarding-Seite (`content/willkommen.md`) erscheint bewusst in keinem Menü und in keiner Übersicht. Sie ist lokal nur über ihre direkte URL erreichbar: http://localhost:1313/x7k2m9f4w8p3r6n1v5b8j3q2/

## Tipps

- **Dateinamen**: Kleinbuchstaben, Bindestriche statt Leerzeichen (z.B. `tag-der-offenen-tuer.md`)
- **Bilder**: Werden automatisch optimiert. JPEG oder PNG hochladen (kein AVIF). Ordner: `assets/images/`
- **Vorschau**: Im Pull Request kann die Änderung vor dem Veröffentlichen geprüft werden
- **Rückgängig machen**: Über die Git-Historie können alle Änderungen jederzeit zurückgenommen werden
