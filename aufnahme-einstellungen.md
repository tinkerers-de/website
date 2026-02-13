# Aufnahme-Einstellungen

Damit die Rohdateien einheitlich sind und nicht unnoetig gross werden.

## Einstellungen

| Einstellung | Wert |
|---|---|
| Format | FLAC |
| Kanaele | **Mono** |
| Samplerate | 48 kHz |
| Bittiefe | 16-bit |

## Warum Mono?

Ein Mikro = ein Kanal. Stereo verdoppelt die Dateigroesse ohne Vorteil — beide Kanaele waeren identisch.

## Warum FLAC?

- Verlustfrei (keine Qualitaetsverluste)
- Etwa halb so gross wie WAV
- Audacity kann es direkt oeffnen

Kein MP3, kein M4A/AAC — die sind verlustbehaftet. Wenn wir spaeter fuer den Podcast encoden, wollen wir nur einmal Qualitaet verlieren.

## Warum 48 kHz / 16-bit?

- 48 kHz ist der Standard fuer Video/Audio-Produktion
- 16-bit reicht fuer Sprache voellig aus (24-bit bringt bei Podcast nichts)

## Dateiname

```
episodes/XXX/raw/vorname.flac
```

Also z.B. `episodes/001/raw/michael.flac` und `episodes/001/raw/levin.flac`.
