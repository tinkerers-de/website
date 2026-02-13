# Audiodateien aufbereiten

Anleitung fuer Levin: Was du in Audacity machen musst, bevor Claude den Rest uebernimmt.

## Voraussetzungen

- [Audacity](https://www.audacityteam.org/) installiert
- Sonst nichts — kein ffmpeg, kein Terminal

## Was du machst vs. was Claude macht

| Du (Audacity) | Claude (DevContainer) |
|---|---|
| Spuren synchronisieren, schneiden, normalisieren | M4A-Dateien zu FLAC konvertieren |
| Kapitel-Labels setzen | Encoden (MP3, AAC, Opus) |
| `master.flac` + `labels.txt` exportieren | Labels importieren, Transkription |
| Ins Repo pushen | Upload auf B2, MDX aktualisieren, Website deployen |

---

## 1. Rohdateien runterladen

Die Dateien liegen im Repo unter `episodes/XXX/raw/`.

Beide Dateien sind FLAC — die kannst du direkt in Audacity oeffnen.

> Falls dort eine `.m4a` statt `.flac` liegt: Sag mir Bescheid, ich konvertiere sie.

## 2. Spuren in Audacity importieren

- Datei → Importieren → Audio...
- Erst `levin.flac`, dann `michael.flac` importieren
- Beide erscheinen als separate Spuren

## 3. Klatscher synchronisieren

- In beiden Spuren den Klatscher suchen (kurzer, lauter Amplitude-Spike)
- Mit dem Auswahlwerkzeug (**F1**) den Klatscher in einer Spur anklicken
- Stark reinzoomen (**Ctrl+Mausrad**) um die Spike-Spitze genau zu finden
- Die spaetere Spur mit dem Zeitverschiebungswerkzeug (**F5**) verschieben, bis beide Spikes uebereinander liegen
- Abspielen und pruefen: der Klatscher darf nur einmal zu hoeren sein, nicht als Echo

## 4. Schneiden

- Anfang vor dem Intro abschneiden (alles vor "Hallo" etc.)
- Ende nach dem Outro abschneiden
- Bereich markieren → Bearbeiten → Auswahl entfernen
- **Tipp:** Am Anfang und Ende ein kurzes Fade setzen: Effekt → Ein-/Ausblenden

## 5. Normalisieren

- Beide Spuren auswaehlen (**Ctrl+A**)
- Effekt → Lautstaerke-Normalisierung (Loudness Normalization)
- Ziel: **-16 LUFS** (Podcast-Standard)
- Alternativ: Effekt → Normalisieren → Spitzenamplitude auf **-1.0 dB**

## 6. Kapitel-Labels setzen

- Beim Durchhoeren an wichtigen Stellen **Ctrl+B** druecken
- Label-Name eingeben, z.B. "Intro", "Thema: ChatGPT", "Outro"
- Labels koennen nachtraeglich verschoben und umbenannt werden

## 7. Exportieren

Zwei Dateien muessen ins Repo:

### labels.txt

- Datei → Exportieren → Labels exportieren...
- Speichern als `episodes/XXX/labels.txt`

### master.flac

- Datei → Exportieren → Als FLAC exportieren...
- Speichern als `episodes/XXX/master.flac`
- Einstellungen: Level 5, 48 kHz, 16-bit

## 8. Hochladen

- `master.flac` und `labels.txt` committen und pushen
- Mir sagen: **"Episode XXX ist fertig"**

Dann mache ich den Rest.
