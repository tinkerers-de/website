# Transcript - Episode 001

## Vorstellung

**[00:00:00]** Ja, willkommen hier zu der ersten Ausgabe von unserem sogenannten Podcast.

**[00:00:03]** Ich weiß noch nicht genau, ob wir das nachher ein bisschen noch rausschneiden,

**[00:00:06]** was wir jetzt hier am Anfang machen.

**[00:00:07]** Ja, vielleicht stellen wir uns ganz kurz einmal vor.

**[00:00:11]** Michael, willst du anfangen?

**[00:00:12]** Ja, sehr gerne.

**[00:00:14]** Ja, hi, ich bin Micha, ich bin 33 Jahre alt,

**[00:00:19]** komme aus der Softwarewelt,

**[00:00:21]** bin mittlerweile irgendwie acht Jahre als Fullstack-Entwickler unterwegs

**[00:00:25]** und ja, jetzt in der AI-Bubble, die ja gerade so heiß ist.

**[00:00:30]** Und genau.

**[00:00:32]** Schön, ja, ich bin Lewin, ich bin 41 gerade geworden.

**[00:00:38]** Genau, und wie, also ich bin auch Softwareentwickler,

**[00:00:42]** aber eben so ein bisschen bezeichne mich aus Tinkerer auch.

**[00:00:45]** Also seit jetzt auch einem halben Jahr bin ich auch total in der AI-Bubble

**[00:00:49]** und versuche vor allem Content oder Solutions für Leute zu bauen.

**[00:00:55]** Kleine Apps und so, die halt früher nicht möglich waren,

**[00:00:58]** baue ich halt heute für die Leute mit AI schnell dahin.

**[00:01:02]** Es sind hauptsächlich so Non-Profit-Sachen.

**[00:01:05]** Und genau, bin also schon bei JavaScript, TypeScript, Fullstack-Developer gewesen,

**[00:01:11]** habe da in verschiedenen Startups früher mitgearbeitet und so.

**[00:01:15]** Und genau, Michael und ich kennen uns aus dem Prinzip aus Uplink,

**[00:01:20]** da haben wir uns kennengelernt und sind beide halt total enthusiastisch,

**[00:01:24]** was AI angeht und was man damit bauen kann.

**[00:01:27]** Und deswegen dachten wir, vielleicht gibt es dann doch noch Interesse

**[00:01:30]** für yet another Podcast im deutschsprachigen Raum.

**[00:01:34]** Und wir schauen einfach mal, wo uns diese Reise hinführt.

**[00:01:37]** Das ist jetzt hier die erste improvisierte Folge.

**[00:01:40]** Wir haben hier jetzt auch die ganze Zeit damit verbracht,

**[00:01:43]** zu gucken, wie man das aufnehmen kann.

**[00:01:45]** Und haben auch nicht so einen richtigen Plan,

**[00:01:47]** so ein paar Themen haben wir uns vorher überlegt.

**[00:01:50]** Und wir schauen einfach mal.

**[00:01:51]** Im Prinzip kann man da mal reinhören.

**[00:01:53]** Wir versuchen auch Kapitel nachher so zu setzen,

**[00:01:55]** dass man sagen kann, interessiert mich nicht,

**[00:01:57]** ich führe mir das nächste Thema an.

**[00:01:59]** Und wenn ihr irgendwelche Rückmeldungen habt, irgendwelche Fragen,

**[00:02:02]** irgendwelche Themen, die ihr gerne von uns besprochen haben wollt,

**[00:02:05]** dann lasst es uns einfach wissen.

**[00:02:07]** Die Kontaktdaten stehen hier auch irgendwo nachher.

**[00:02:12]** Ja, spannend.

**[00:02:14]** Genau.

## Tinkerers Podcast

**[00:02:16]** Ja, vielleicht wollen wir noch mal ganz kurz darauf eingehen,

**[00:02:21]** was uns eigentlich dazu bringt, hier auch noch mal das anzuschneiden.

**[00:02:30]** Du musst immer einspringen, Michael.

**[00:02:32]** Ich spreche viel, da musst du mich auch mal stoppen.

**[00:02:34]** Ja, sehr gerne.

**[00:02:36]** Aber wir beide haben halt das Gefühl,

**[00:02:38]** es gibt so viele neue Sachen, die die ganze Zeit passieren.

**[00:02:40]** Und es ist einfach cool, sich damit zu beschäftigen,

**[00:02:42]** aber auch was dazu zu hören.

**[00:02:44]** Und wir wollen aber auf eine sehr tiefe Ebene auch gehen.

**[00:02:48]** Also nicht hier irgendwie, ja, kannst du mal irgendwie,

**[00:02:51]** nimmst du mal Perplexity statt Google oder so,

**[00:02:54]** das ist für uns Schnee von gestern.

**[00:02:58]** Und wir muten euch als Hörern dann auch ein bisschen was zu.

**[00:03:03]** Das heißt, wir nutzen halt Git, wir nutzen halt Programmiersprachen,

**[00:03:06]** wir gehen davon aus, dass ihr das einigermaßen kennt

**[00:03:09]** oder euch halt mal anlest.

**[00:03:11]** Kann man ja jetzt auch die AI fragen.

**[00:03:13]** Und uns geht es halt wirklich darum, wie macht man die Sachen dann konkret?

**[00:03:16]** Also jetzt hier nicht irgendwie stehen bleiben bei, ja,

**[00:03:18]** und dann "there be dragons", sondern wir spielen die Sachen durch.

**[00:03:21]** Wir gehen da bis zum bitteren Ende, um zu gucken,

**[00:03:25]** wie kann man das dann wirklich dann auch umsetzen

**[00:03:27]** und wie machen die Leute das auch,

**[00:03:29]** um es eben auch dann für uns selbst zu nutzen.

**[00:03:31]** Und da ist zum Beispiel ein Thema,

**[00:03:34]** also mein Thema jetzt von Levin ist hier viel,

**[00:03:37]** dass ich in Containern arbeite, weil ich die AI quasi,

**[00:03:42]** ja, ich nehme da alle Fesseln ab.

**[00:03:44]** Ich benutze Cloud immer mit Dangerously Skip Permissions,

**[00:03:47]** damit der einfach alles machen kann.

**[00:03:49]** Aber gleichzeitig will ich natürlich nicht,

**[00:03:51]** dass er meinen Rechner auseinander nimmt

**[00:03:53]** oder mir lauter Daten klaut aus anderen Projekten.

**[00:03:55]** Deswegen mache ich viel mit Isolierung und so.

**[00:03:57]** Dazu werde ich bestimmt nochmal was erzählen,

**[00:03:59]** vielleicht heute, vielleicht machen wir auch eine Folge dazu.

**[00:04:02]** Und was ich von Micha so mitbekommen habe,

**[00:04:04]** ist, dass er einfach ein ziemlich profundes Setup hat

**[00:04:08]** mit vielen Agents, Markdown-Dateien,

**[00:04:11]** die er auch wahrscheinlich gerne teilt mit euch,

**[00:04:13]** um dann Parallelarbeiten zu starten von Cloud und so weiter.

**[00:04:18]** Ne, Micha?

**[00:04:19]** Ja, genau.

**[00:04:20]** Also das war tatsächlich so mein ganzer Setup,

**[00:04:23]** dass ich mir versuche, ein ordentliches Workflow-Setup aufzubauen,

**[00:04:28]** sodass ich halt, ich sag mal,

**[00:04:30]** wiederkehrender Arbeit relativ einfach mit Cloud

**[00:04:34]** oder halt jetzt auch Codex,

**[00:04:36]** das Gute ist, dieses ganze neue Skill-Thema,

**[00:04:39]** das ist halt ein Standard, der sich etabliert

**[00:04:42]** und quasi von jeder CLI, jedem LLM aufgenommen wird.

**[00:04:46]** Und dadurch versuche ich mir dann halt Workflows,

**[00:04:50]** wiederkehrender Arbeiten einfach zu vereinfachen

**[00:04:54]** und Cloud einfach effizienter zu nutzen.

**[00:05:01]** Genau.

## Unser Setup

**[00:05:02]** Also ich würde vielleicht sagen, wir fangen auch nochmal ganz kurz an.

**[00:05:06]** Beschreib doch mal vielleicht dein Setup

**[00:05:08]** und wofür du Cloud im Moment hauptsächlich einsetzt.

**[00:05:11]** Was wir da vielleicht auch noch davor sagen sollten ist,

**[00:05:14]** heute ist der 12. Februar 2026, es ist jetzt 10.09 Uhr.

**[00:05:18]** Das ist vielleicht die Uhrzeit ein bisschen übertrieben,

**[00:05:21]** aber das Datum ist schon wichtig,

**[00:05:23]** weil morgen kommen ja schon drei neue Models raus.

**[00:05:26]** Ja, richtig.

**[00:05:27]** Also momentan ist ja Opus 4.6 Heiser Shit und Codex 5.3.

**[00:05:34]** Ich bin momentan beides so mehr oder minder am Ausprobieren,

**[00:05:38]** weil Codex 5.3 hat mich schon sehr imponiert,

**[00:05:41]** vor allem wie sie auch das neue Model trainiert haben,

**[00:05:46]** was für mich super viel Sinn gemacht hat,

**[00:05:48]** dass sie einfach auf, ich sag mal, eigenes Behavior

**[00:05:51]** und quasi auf dem Model davor trainiert haben.

**[00:05:56]** Und da merkt man auf jeden Fall,

**[00:05:58]** dass das Model 5.3 wesentlich konkreter

**[00:06:03]** und sehr spitzfindig antwortet.

**[00:06:07]** Das finde ich sehr charmant.

**[00:06:09]** Deswegen probiere ich das so gerade ein bisschen aus.

**[00:06:12]** Dadurch, dass ich eh eine JGPT-Subscription hatte,

**[00:06:15]** konnte ich da einfach drauf aufspringen.

**[00:06:18]** Und dadurch, dass sie es jetzt, glaube ich, bis April anbieten,

**[00:06:22]** höhere Rate Limits eingeführt zu haben,

**[00:06:25]** ich glaube irgendwie zweifach oder so,

**[00:06:27]** ist es damit ganz nett zu arbeiten gerade.

**[00:06:30]** Aber ja, nach wie vor ist Claude so mein Working Horse,

**[00:06:38]** worauf ich setze.

**[00:06:41]** Und mit Opus 4.6 ist da halt auch noch mal einiges passiert.

**[00:06:47]** Ist viel besser im Planning geworden,

**[00:06:51]** im Verständnis vom Projekt.

**[00:06:55]** Stellt viel bessere Fragen.

**[00:06:58]** Finde ich deutlich noch mal besser als 4.5.

**[00:07:02]** Aber ja, genau.

**[00:07:06]** Ich kann auch noch mal so ein bisschen was zu unserem Setup sagen.

**[00:07:09]** Also für die Leute, die jetzt vielleicht auch sagen,

**[00:07:12]** hey, ich habe es irgendwie softwaremäßig drauf

**[00:07:15]** oder kenne die Sachen hier zu größtenteils,

**[00:07:17]** aber bin jetzt noch nicht so in der AI-Welt.

**[00:07:19]** Also meiner Meinung nach sollte man,

**[00:07:21]** also ich nutze halt jetzt hier Mac zum Entwickeln.

**[00:07:23]** Ich habe aber auch noch einen Linux-Laptop,

**[00:07:25]** den ich dann auch zum Entwickeln benutze.

**[00:07:27]** Windows fand ich schon immer sehr schwierig zum Entwickeln.

**[00:07:30]** Ist einfach immer umständlich, da die Tools zu installieren.

**[00:07:33]** Aber eben basierend auf dem Setup, finde ich,

**[00:07:36]** braucht man dann schon auch eine Pro-Subscription von Claude.

**[00:07:39]** Und man sollte auch immer nur die neuesten Models benutzen.

**[00:07:42]** Also ich selbst triviale Sachen mache ich mit Opus 4.6.

**[00:07:46]** Und ich persönlich habe die 90 Euro Max-Subscription bei Claude.

**[00:07:52]** Mit der Pro-Subscription geht es auch.

**[00:07:54]** Da renne ich aber dann durchaus,

**[00:07:55]** wenn ich mal ein paar Agents parallel starte,

**[00:07:57]** dann schnell in meine Tonken-Limits rein.

**[00:07:59]** Muss dann irgendwie warten. Das nervt mich.

**[00:08:01]** Mit 90 Euro komme ich ganz gut zurecht.

**[00:08:04]** Ich hatte auch immer 180.

**[00:08:05]** Das habe ich also überhaupt nicht ausgeschöpft.

**[00:08:07]** Ich glaube, das ist, wenn man alleine ist,

**[00:08:09]** als Einzelperson schwer.

**[00:08:11]** Genau, ich weiß nicht, du hast auch Abos bei denen.

**[00:08:14]** Ja, genau.

**[00:08:15]** Hast du auch bei ChatGPT dann auch ein Abo für Codex?

**[00:08:17]** Genau, also bei ChatGPT habe ich dieses 20-Euro-Plus-Abo,

**[00:08:20]** glaube ich, oder wie das heißt.

**[00:08:23]** Keine Ahnung, wie das heißt.

**[00:08:24]** Wie gesagt, da gibt es momentan dieses Rate-Limit-Erhöhung.

**[00:08:27]** Damit kommt man vollkommen fein aus.

**[00:08:30]** Bei Cloud Code bin ich momentan auf dem 180-Euro-Plan,

**[00:08:35]** weil ich das diesen Monat irgendwie komplett ausgeschöpft habe.

**[00:08:42]** Das Ding ist, ich teste halt super viel mit den Workflows rum

**[00:08:46]** und dann verbrennst du halt Tokens ohne Ende.

**[00:08:51]** Vor allem, wenn man dann mit Opus unterwegs ist.

**[00:08:53]** Was ich auch gemerkt habe jetzt,

**[00:08:55]** Opus 4.6 ist deutlich günstiger, aber es ist günstiger geworden.

**[00:09:02]** Aber das war ja schon, weil als Opus 4.5 rausgekommen ist,

**[00:09:05]** war das ja krass viel billiger als das Opus vorher.

**[00:09:08]** Was war das, 4.0 oder so?

**[00:09:12]** Vor dem 4.5 habe ich Opus nie benutzt,

**[00:09:14]** weil da waren sofort die Tokens alle.

**[00:09:16]** Und jetzt seit Opus 4.5 kann man das als Dauerbrenner einsetzen.

**[00:09:19]** Und wenn jetzt 4.6 noch mal günstiger geworden ist,

**[00:09:21]** ist ja auch nice dann.

**[00:09:23]** Ja, genau.

**[00:09:24]** Ich versuche da tatsächlich noch die Models

**[00:09:26]** so effizient wie möglich zu nutzen,

**[00:09:29]** dass ich halt wirklich, wenn ich nur Sachen durchlese

**[00:09:33]** oder nur Translation-Keys ändere,

**[00:09:36]** dann nutze ich auch mal Haiku, das doofe Model von Cloud.

**[00:09:44]** Aber ja, theoretisch kann man da mit den Subscriptions

**[00:09:46]** einfach mit Opus langlaufen und die machen dann alles.

**[00:09:49]** Also ich würde auf jeden Fall empfehlen,

**[00:09:51]** die 90-Euro-Version von Cloud zu nutzen,

**[00:09:55]** wenn man als ambitionierter Dev, sag ich jetzt mal,

**[00:09:58]** damit arbeiten will.

**[00:10:00]** Ich weiß gar nicht, ob auf dem 20-Euro-Subscription

**[00:10:06]** Opus dabei ist.

**[00:10:07]** Und wenn, dann glaube ich nur zweimal schießen

**[00:10:10]** und dann ist schon wieder vorbei.

**[00:10:12]** Nee, also da ist ja Opus dabei, aber es geht schon schnell leer.

**[00:10:15]** Also manchmal habe ich halt vier, fünf Sachen parallel.

**[00:10:18]** Also gerade mit dem Cloud Code Web,

**[00:10:20]** da kommen wir vielleicht auch nochmal drauf zu sprechen.

**[00:10:22]** Da kann man ja super easy lauter Tasks spinnen und so.

**[00:10:25]** Und da sind dann schon mal zehn gleichzeitig.

**[00:10:27]** Und da habe ich jetzt erlebt in der 20-Dollar-Version,

**[00:10:30]** Euro-Version, dass der dann auf einmal sagt,

**[00:10:32]** out of the rate limit reached, waiting oder sowas in der Richtung.

**[00:10:36]** Geht weiter heute Abend um sechs.

**[00:10:38]** Da hatte ich dann keinen Bock drauf.

**[00:10:39]** Dann ist es dann wieder auf 90 hochgestellt.

**[00:10:41]** 180, boah, ist schon ganz schön heftig.

**[00:10:44]** Aber da kriegst du, also das schaffst du nicht mehr aus.

**[00:10:47]** Nee, also da muss es schon wirklich Bonkers gehen.

**[00:10:51]** Und ich würde mal sagen, wie Peter Steinberger das durchjagt.

**[00:10:57]** Der hat ja, glaube ich, vier Subscriptions im Pro-Segment bei JGPT.

**[00:11:03]** Also da muss es schon ordentlich was durchfeuern, dass sich das ...

**[00:11:09]** Ich finde, da kann man auch nochmal was zu sagen.

**[00:11:11]** Und zwar, was mir halt aufgefallen ist,

**[00:11:13]** ich bin halt so ein Pay-as-you-go-Freund eigentlich.

**[00:11:20]** Ich mag ja eigentlich keine Abos.

**[00:11:22]** Ich benutze so Simple E-Mail-Service von Amazon.

**[00:11:25]** Ist der Knaller, ja.

**[00:11:26]** Kostet mich irgendwie zwei Cent im Monat für ein paar hundert E-Mails,

**[00:11:30]** die ich da verschicke und so.

**[00:11:32]** Und dann drehe ich immer durch,

**[00:11:33]** wenn ich irgendwo zehn Euro pro Monat verzahlen soll

**[00:11:35]** für so Transactional E-Mails oder sowas.

**[00:11:38]** Und das finde ich mega.

**[00:11:40]** Das dachte ich auch, dass ich das bei AI auch mal mache

**[00:11:43]** und habe mir da so ein Anthropic API-Key geklickt.

**[00:11:46]** Ja, und da hast du dann, wenn du da 50 Euro auflädst

**[00:11:49]** und zwei Minuten arbeitest, sind die weg oder nicht?

**[00:11:51]** Also das steht ja gar nicht im Verhältnis.

**[00:11:53]** Überhaupt nicht, ja.

**[00:11:54]** Also jetzt ist die beste Zeit eigentlich, darauf aufzuspringen.

**[00:11:58]** Weil es kann halt einfach nicht so günstig bleiben.

**[00:12:02]** Oder, I don't know, wie die Strategie da sein wird.

**[00:12:06]** Aber ich nutze als Tool CC-Usage.

**[00:12:12]** Das ist ein Terminal-Tool.

**[00:12:13]** Das kann man sich auch als Statusleiste für Cloud-Code installieren.

**[00:12:17]** Und dann hast du halt immer eine Übersicht,

**[00:12:19]** wie viele Tokens du eigentlich verbrannt hast.

**[00:12:21]** Und dann gibt er dir die API-Key-Usage,

**[00:12:26]** also quasi wie viel du an monetärem Geld im Verhältnis ausgegeben hast.

**[00:12:32]** Und ich bin jeden Tag halt über 100 Dollar.

**[00:12:35]** Genau, also ich glaube, die 90-Dollar-Subscription

**[00:12:38]** entspricht irgendwie 5.000-Dollar-API-Calls oder so.

**[00:12:41]** Ja, also meiner Meinung nach macht es halt voll Sinn,

**[00:12:46]** da in die 90 Euro zu investieren.

**[00:12:51]** Genau, aber also diese API-Geschichte ist eine Geldverbrennungsmaschine.

**[00:12:55]** Ja, voll.

**[00:12:56]** Also aus der Sicht des Users.

**[00:12:57]** Und ich weiß nicht genau, warum die das so machen.

**[00:12:59]** Vielleicht wollen sie die Leute eher in diese Abos rein drängen oder so.

**[00:13:02]** Aber ich weiß auch nicht, ob es jetzt eine krasse Subventionierung ist.

**[00:13:05]** Warum sollten sie das nicht bei der API auch machen?

**[00:13:08]** Ich glaube, sie wollen ihre Systeme auch einfach schützen,

**[00:13:13]** weil es gab ja ein ziemlich großes Thema.

**[00:13:16]** Es gibt ja auch Open Code, das CLI-Tool.

**[00:13:20]** Und dort haben sie halt verboten, ihre Subscription zu nutzen,

**[00:13:25]** um sich damit zu registrieren.

**[00:13:27]** Und halt über Open Code die Entropiq-Subscription zu nutzen.

**[00:13:32]** Und da musst du jetzt angeblich mit API-Keys arbeiten.

**[00:13:37]** Ah, okay. Das ist interessant.

**[00:13:39]** Aber das heißt, die versuchen einem dann ihre eigene Software aufzudrängen.

**[00:13:43]** Ja, genau.

**[00:13:44]** Ah ja, okay.

**[00:13:45]** Das ist natürlich schon ein Problem, wenn man da nicht aus der Bubble da rauskommt.

**[00:13:49]** Das war mir jetzt auch nicht bewusst interessant.

**[00:13:55]** Ich meine, was ist jetzt der Vorteil?

**[00:13:58]** Die wollen halt mehr so ein Vendor-Login dann irgendwie damit provozieren oder was?

**[00:14:02]** Ja, genau.

**[00:14:03]** Denke ich, ist auch für die sinnvoll.

**[00:14:07]** Aber ich meine es auch unabhängig davon.

**[00:14:10]** Es ist einfach sinnvoll, Cloud zu nutzen.

**[00:14:13]** Die sind momentan einfach die prägenden AI-Agent-Tool-Hersteller,

**[00:14:22]** weil die geben so ziemlich jetzt jeden Standard vor.

**[00:14:26]** Und jeder andere CLI-Tool-Hersteller zieht quasi nach.

**[00:14:31]** Ja, was ich aber bei dieser ganzen AI-Revolution so geil finde,

**[00:14:34]** ist halt, dass es eigentlich im Prinzip kannst du die Models so tauschen wie die Unterhosen.

**[00:14:38]** Und dieses Plug-in-Ding, das sagt mir sowas von zu, dass ich einfach jetzt sage, so hier.

**[00:14:44]** Und deswegen ist eigentlich dieses Open Code, heißt es.

**[00:14:47]** Ja, genau.

**[00:14:48]** Finde ich eigentlich auch eine mega Idee, dass du einfach sagst,

**[00:14:50]** ach jetzt, das nervt mich hier, ich nehme jetzt Codex, ich nehme jetzt Cloud.

**[00:14:53]** Ich probiere mal beides parallel oder was.

**[00:14:55]** Und dass das dann so teuer sein soll, das finde ich dann schon auch traurig.

**[00:15:00]** Also da so ein Vendor-Login will ich eigentlich am Ende des Tages nicht haben.

**[00:15:05]** Weil das ist halt irgendeine, ich finde das ist, wie heißt das, Layer 4 oder was?

**[00:15:09]** Also halt so ein Internet-mäßiges Dienst-Tool, was ich einfach nutze im AI für mich.

**[00:15:16]** Ich stehe eine Frage, ich kriege was raus.

**[00:15:18]** Das wird immer besser da drin und so.

**[00:15:20]** Aber dieses übertriebene Tooling von Cloud, das brauche ich eigentlich nicht unbedingt.

**[00:15:23]** Das ist jetzt ganz nice, aber ich sehe das mehr als Proof of Concept,

**[00:15:26]** als Unique Selling Point eigentlich von der Firma.

**[00:15:30]** Da kann ich dir aber empfehlen, wenn du auf Open Code gehen möchtest

**[00:15:35]** und die ganzen LLMs nutzen willst, dann über GitHub Copilot.

**[00:15:40]** Die haben, glaube ich, seit Mitte Januar die Möglichkeit,

**[00:15:44]** dass du dich über GitHub Copilot bei Open Code registrieren kannst.

**[00:15:49]** Und dann kannst du quasi Open Code mit allen möglichen LLMs nutzen.

**[00:15:56]** Und dann kannst du halt Entropiq, ChatGPT und Co. nutzen.

**[00:16:01]** Okay, cool.

**[00:16:02]** Gut, also für mich ist jetzt das mit Cloud erstmal soweit noch zu ertragen.

**[00:16:05]** Ich glaube auch einfach, die werden irgendwann,

**[00:16:08]** also man wird die ganzen Sachen mit API-Keys nutzen können.

**[00:16:11]** Ich hatte jetzt gerade auf dem Handy mir eine neue Tastatur installiert.

**[00:16:14]** Vielleicht kann ich den Link da auch mal hier unten reintun.

**[00:16:17]** Und das ist aber keine Tastatur in dem Sinne,

**[00:16:19]** sondern nur so ein Button, Record Now.

**[00:16:22]** Und dann sprichst du da rein und dann drückst du Senden

**[00:16:24]** und dann wird das einmal transkribiert über irgendeine AI

**[00:16:28]** und dann wird es dann nochmal aufbereitet über eine AI.

**[00:16:31]** Und dann pastet der quasi diesen Text in das Pompfenster,

**[00:16:34]** also in ein Chatfenster oder was auch immer du gerade offen hast.

**[00:16:38]** Ich benutze das, um mit AI-Agents zu arbeiten, vom Handy aus gerade jetzt.

**[00:16:43]** Also dann mache ich Cloud Code auf, gehe es ins Repository rein,

**[00:16:47]** dann labere ich da in diese Tastatur und dann wirft er dem das Prompt hin

**[00:16:50]** und dann tage ich Abschicken, dann habe ich wieder einen Job gestartet.

**[00:16:53]** Und bei dieser Tastatur, da kannst du halt in den Einstellungen,

**[00:16:56]** die Tastatur kostet um die 3,50 Euro im Store,

**[00:16:58]** und du kannst in den Einstellungen halt deine eigenen API-Keys mitbringen

**[00:17:01]** und dann kannst du sagen, ich will OpenAI-API haben oder Mistral oder was auch immer.

**[00:17:07]** Und das finde ich halt mega cool, dass die alle so offen sind,

**[00:17:10]** die Sachen, dass man da einfach immer das nehmen kann,

**[00:17:13]** was gerade einem am besten passt und vielleicht auch am billigsten ist

**[00:17:16]** und man eben nicht so verbandelt ist mit den einzelnen Herstellern.

**[00:17:20]** Ja, genau. Vor allem du kannst dann halt auch die LLMs nutzen

**[00:17:24]** für die Fälle, wo sie auch gut performen.

**[00:17:26]** Also zum Beispiel ein Codex ist viel besser in der Research

**[00:17:34]** als ein Entropic-Model.

**[00:17:36]** Ein Gemini-Model ist viel besser, um zum Beispiel PDFs und Bilder zu prozessieren

**[00:17:41]** und Cloud ist dann halt einfach gut, Sachen zu implementieren.

**[00:17:46]** Also theoretisch kannst du dir dann in Open Code

**[00:17:50]** dir ein Workflow erstellen, der genau diese LLMs,

**[00:17:55]** auf diese LLMs zugreift, um dir dann halt so dein Workflow zu fine-tunen.

**[00:18:01]** Ist halt auch ein sehr, sehr spannender Ansatz.

## Michaels AI-Nutzung

**[00:18:05]** Okay, dann vielleicht erzählst du mal ein bisschen,

**[00:18:10]** wofür du konkret eigentlich jetzt AI nutzt.

**[00:18:15]** Ich denke mal, dir geht es wie mit mir.

**[00:18:17]** Du redest eigentlich nur noch mit der AI, oder?

**[00:18:19]** Oder schreibst du noch irgendwie Code selber und so?

**[00:18:21]** Oder ist das so ein Hobby-Ding von dir und du hast noch deine Arbeit?

**[00:18:24]** Oder wie funktioniert das bei dir?

**[00:18:26]** Also ich habe meine Arbeit und ich bin,

**[00:18:31]** vielleicht nochmal hier, um auszuholen,

**[00:18:34]** ich bin freiberuflich unterwegs und versuche mich halt

**[00:18:37]** so ein bisschen auch für die Zukunft aufzustellen

**[00:18:39]** und mich für die Zukunft anders auch zu positionieren.

**[00:18:45]** Ich bin in einem Austausch mit einer alten Company von mir,

**[00:18:51]** wo ich demnächst auch ein paar Trainings anbieten werde,

**[00:18:56]** um halt mit AI quasi zu arbeiten.

**[00:19:01]** Wie sollte man mit agentic Programming

**[00:19:06]** die ersten Baby-Steps machen und halt bis zu einem Workflow

**[00:19:10]** sich was zusammenstellen.

**[00:19:13]** Und leider darf ich auf der Arbeit Cloud-Code nicht nutzen

**[00:19:18]** oder bei meinem aktuellen Projekt Cloud-Code nicht nutzen.

**[00:19:22]** Das sind halt dann immer diese AI-Agreements,

**[00:19:25]** die man quasi eingeht mit dem Kunden.

**[00:19:30]** Und dort gibt es, ich sage mal, wir dürfen Cursor nutzen

**[00:19:34]** und wir dürfen GitHub Copilot nutzen.

**[00:19:41]** Und da nutze ich es schon halt auch bis zum Maximum,

**[00:19:45]** dadurch, dass die Tiers da halt relativ klein sind,

**[00:19:48]** gehe ich da halt sehr schnell an die Grenzen.

**[00:19:51]** Also die sagen, du kannst es nutzen,

**[00:19:53]** aber die zahlen gar nicht genug dafür, dass du es nutzen kannst.

**[00:19:56]** Also ich bin halt an deren Lizenzmodels auch gebunden.

**[00:19:59]** Also ich muss quasi über deren Organisation

**[00:20:03]** dann diese Lizenzen nutzen

**[00:20:06]** und darf da auch nicht meine eigenen Lizenzen nutzen.

**[00:20:10]** Ich meine, das ist doch total dumm.

**[00:20:12]** Da sagen die, du sitzt da irgendwie,

**[00:20:14]** machst da irgendwie deine 100x-Performance da irgendwie,

**[00:20:17]** kostet sich, keine Ahnung, 100 Euro die Stunde.

**[00:20:19]** Und die sagen dann, nee, also 10 Euro extra im Monat hier

**[00:20:22]** dafür, dass du dann da zehnmal so effizient bist,

**[00:20:24]** geben wir nicht aus.

**[00:20:26]** Ist ja schon auch strange.

**[00:20:27]** Ja, weil sie dann die ganze Organisation upsteppen müssten,

**[00:20:30]** weil man da nicht irgendwie ein individuelles Tier hochstufen kann.

**[00:20:36]** Und deswegen machen die das nicht.

**[00:20:38]** Aber das ist ja typisches Beispiel eigentlich dafür,

**[00:20:41]** dass die nachher sagen, ja, wir haben hier AI,

**[00:20:44]** das hat ja gar nichts gebracht.

**[00:20:46]** Ja, ja, richtig.

**[00:20:47]** Ja, weil sie sich damit gar nicht richtig auseinandersetzen können.

**[00:20:50]** Ja, absolut.

**[00:20:51]** Du musst ja dann auch die Schleusen aufmachen.

**[00:20:53]** Das ist ja, als wenn man sagt,

**[00:20:54]** ihr kriegt jetzt irgendwie hier ein Auto,

**[00:20:56]** aber nur fünf Liter Benzin.

**[00:20:57]** Naja, oder nicht?

**[00:20:59]** Ja, ja, richtig.

**[00:21:00]** Versuch mal, dein Feld damit zu pflügen.

**[00:21:03]** Ja, gut.

**[00:21:05]** Und dann, wenn das nicht klappt,

**[00:21:06]** dann ist hier ist der Spaten, mach weiter.

**[00:21:08]** Ja, genau.

**[00:21:10]** Und ja, nebenbei arbeite ich dann halt noch

**[00:21:14]** mit meinem Cloud Code Subscriptions

**[00:21:17]** und lasse meine Agents halt laufen.

**[00:21:20]** Und ich glaube, einen großen Vorteil, den ich habe,

**[00:21:23]** ich kann mich sehr schnell auf verschiedene Arbeiten fixieren

**[00:21:29]** und sehr schnell umdenken.

**[00:21:32]** Und deswegen kann ich dann halt so einen Context Switch

**[00:21:35]** sehr schnell aufarbeiten,

**[00:21:39]** was halt ein ziemlicher kognitiver Overload ist

**[00:21:46]** und man schnell ausbrennt.

**[00:21:49]** Und dadurch, dass ich jetzt schon ungefähr ein Jahr lang so arbeite,

**[00:21:55]** habe ich damit gelernt, umzugehen.

**[00:21:59]** Vielleicht auch da am Anfang brennt es definitiv ein schneller aus,

**[00:22:05]** wenn man mit AI arbeitet,

**[00:22:08]** weil man einfach viel schnellere Steps geht

**[00:22:12]** und man einfach gar nicht hinterherkommt,

**[00:22:17]** einfach den Code zu reviewen.

**[00:22:19]** Aber prinzipiell, wenn ich nicht auf der Arbeit bin

**[00:22:22]** oder beim Kunden bin,

**[00:22:26]** überfliege ich einfach nur noch Reviews

**[00:22:29]** und bin auf einer sehr High-Level-Architektur unterwegs

**[00:22:33]** und gucke einfach nur an.

**[00:22:35]** Aber was machst du denn dann da eigentlich?

**[00:22:37]** Also was baust du denn dann?

**[00:22:40]** Ich habe jetzt für meine Freundin, die gibt Tourenunterricht

**[00:22:45]** und die hat halt immer so Probleme mit Anwesenheitskontrolle.

**[00:22:48]** Für die habe ich jetzt eine kleine App geschrieben,

**[00:22:51]** um so Anwesenheiten zu kontrollieren.

**[00:22:53]** Das ist ein Trainergespann von drei Trainern

**[00:22:56]** und die können sich jetzt untereinander

**[00:22:59]** quasi diese Anwesenheitslisten sharen

**[00:23:02]** und Notizen hinzufügen und so weiter.

**[00:23:04]** Das habe ich, glaube ich, an drei Tagen geschrieben.

**[00:23:07]** Habe da einfach nur high-levelig gesagt, was ich halt haben will.

**[00:23:13]** Bin auf das Feedback von der AI eingegangen

**[00:23:16]** und habe dann quasi Feature für Feature

**[00:23:20]** in einem Feature-Branch entwickelt.

**[00:23:23]** Habe mir dann quasi in einem PR mal angeschaut,

**[00:23:26]** was die KI gemacht hat.

**[00:23:28]** Das, was mir nicht gefallen hatte auf so einen High-Level-Blick,

**[00:23:32]** habe ich gesagt, hier mach das mal anders.

**[00:23:34]** Der hat das dann für mich anders gemacht

**[00:23:36]** und dann habe ich reingemerged und so durch und durch entwickelt.

**[00:23:40]** Das heißt aber, das ist so ein bisschen dein Hobby-Ding

**[00:23:43]** und du machst da halt Projekte, also Software,

**[00:23:46]** die quasi eigentlich vollkommen wirtschaftlich irrational gewesen wäre.

**[00:23:51]** Ja, ja, total.

**[00:23:52]** Die baust du aber jetzt halt einfach vorfahrend mit der AI.

**[00:23:55]** Ja, richtig.

**[00:23:57]** Ich mache das ja so ähnlich.

**[00:23:58]** Also ich habe jetzt hier zum Beispiel

**[00:24:00]** so eine Dienstplanungs-App geschrieben.

**[00:24:03]** Also es ist eigentlich nur eine statische Webseite,

**[00:24:06]** wo man da halt die Dienstpläne

**[00:24:08]** für so eine Kinderbetreuung in der Schule für die Eltern,

**[00:24:12]** so ein Elterndienst ist das.

**[00:24:13]** Da kann man eben so einen Dienstplan sehen.

**[00:24:15]** Wann ist man dran und so weiter?

**[00:24:16]** Und da habe ich eben jetzt auch noch SMS-Benachrichtigungen,

**[00:24:18]** dass man am Abend vorher kriegt man da noch eine SMS und so.

**[00:24:21]** Ja, aber das sind halt Leute, das ist natürlich erst mal so ein bisschen lustig,

**[00:24:26]** aber wenn man da mal drüber nachdenkt,

**[00:24:29]** man kann jetzt halt so krass viele geile Sachen bauen,

**[00:24:32]** die früher, also ich hätte früher sowas auch gerne gebaut,

**[00:24:35]** aber ich habe mir gedacht,

**[00:24:36]** nee, ich setze mich jetzt nicht vier Wochen hin

**[00:24:38]** und baue hier so eine Solution und die Leute sagen dann,

**[00:24:41]** ja, ist ganz nett so,

**[00:24:42]** aber ich hätte hier gerne noch eine Änderung und so.

**[00:24:45]** Aber jetzt geht das halt.

**[00:24:46]** Ich haue ständig sowas raus und das wird ja auch,

**[00:24:50]** geht ja auch nur noch schneller bald.

**[00:24:53]** Aber wenn nochmal zurück zu deiner Use Case,

**[00:24:56]** oder was ich für mich so sehe,

**[00:24:58]** es gibt halt für mich einen riesen Gap zwischen,

**[00:25:00]** ich baue halt was,

**[00:25:01]** wo quasi statischer Content in Git verwaltet wird

**[00:25:04]** und ich baue was, wo so User Interactivity der Fall ist.

**[00:25:09]** Also vielleicht machen wir dazu nochmal einen eigenen Podcast.

**[00:25:12]** Lass uns vielleicht jetzt hier nochmal so kurz das anreißen.

**[00:25:14]** Aber du brauchst ja eine Datenbank,

**[00:25:16]** Authentication, Deployment, so,

**[00:25:19]** und das ist ja alles schon ein ziemlicher Hassle.

**[00:25:22]** Hast du da einen Pattern, so ein Template,

**[00:25:26]** was du sagst, so nimm das,

**[00:25:27]** oder wirst du die AI das aussuchen,

**[00:25:29]** was die machen darf, oder wie ist das?

**[00:25:31]** Ja, genau.

**[00:25:32]** Also ich habe, dadurch,

**[00:25:33]** dass ich das halt schon seit eh und je immer mache

**[00:25:36]** und irgendwelche Side Projects mache,

**[00:25:38]** habe ich halt mittlerweile so meinen Stack,

**[00:25:40]** wo ich weiß, das funktioniert gut.

**[00:25:43]** Das heißt, ich habe schon ein Boilerplate,

**[00:25:45]** die meine Architektur,

**[00:25:50]** mein Deployment von so einem,

**[00:25:52]** ja, ich sag mal ein SaaS-Produkt einfach,

**[00:25:55]** fertig und darauf kann halt die KI zugreifen.

**[00:25:58]** Und das ist halt immer auch meine Referenz.

**[00:26:00]** Ich habe so ein kleines Boilerplate-Projekt,

**[00:26:02]** was ich halt pflege und über die Jahre gewachsen ist.

**[00:26:07]** Da gibt es auch quasi Subscriptions drin,

**[00:26:10]** also Payment quasi und all den Kram.

**[00:26:14]** Das ist über, ich glaube,

**[00:26:16]** die letzten drei Jahre jetzt gewachsen.

**[00:26:18]** Und darauf bezieht sich dann halt auch meine KI,

**[00:26:22]** beziehungsweise Claude,

**[00:26:24]** der nimmt sich das immer als Referenzrepo

**[00:26:27]** und danach kann ich relativ schnell

**[00:26:29]** einfach so ein Projekt halt hochziehen.

**[00:26:32]** Aber was heißt das?

**[00:26:33]** Nimmt das als Referenzrepo?

**[00:26:34]** Hast du das dann jetzt in, also,

**[00:26:36]** lass uns da mal ruhig das mal konkret,

**[00:26:38]** also dieses Referenzrepo,

**[00:26:40]** ist das Open Source oder ist das Closed?

**[00:26:42]** Das ist Closed.

**[00:26:43]** Das ist bei mir in einem privaten Repo.

**[00:26:46]** Aber die Produkte, die du dann baust,

**[00:26:49]** sind die dann teilweise quelloffen?

**[00:26:51]** Die sind zum Teil auch quelloffen, ja.

**[00:26:53]** Dann könnte man es ja daraus reverse engineeren.

**[00:26:55]** Ja, genau.

**[00:26:56]** Ja, das ist jetzt auch kein Hexenwerk alles.

**[00:26:58]** Ich fang jetzt vor allem für die Hörer,

**[00:27:00]** also ich habe sowas ähnliches gebaut,

**[00:27:02]** aber nicht ganz so mit Subscriptions und so.

**[00:27:05]** Da hatte ich immer meine Schwierigkeiten.

**[00:27:07]** Das könnten wir dann auch mal verlinken und so.

**[00:27:09]** Ja.

**[00:27:10]** Aber für die Leute, die jetzt, also,

**[00:27:12]** sag ich mal, zuhören und, ja,

**[00:27:14]** jetzt vielleicht selber noch nicht so die krassesten Coder sind

**[00:27:16]** und auch immer sich überlegt haben, wie,

**[00:27:19]** also, wenn jetzt hier jemand zuhört,

**[00:27:21]** der ist zum Beispiel, sagen wir mal,

**[00:27:22]** ein reiner Frontend-Entwickler

**[00:27:23]** und hat bis jetzt immer in Projekten gearbeitet,

**[00:27:25]** wo halt irgendeine ober-, megamäßig

**[00:27:27]** sophisticated Backend-Solution schon am Start war.

**[00:27:30]** Wenn man jetzt halt dann sagt,

**[00:27:32]** ich möchte jetzt mal eine Full-Stack-App selber bauen

**[00:27:35]** und dann einfach die AI losrennen lässt,

**[00:27:38]** ich finde, dann dreht die durch.

**[00:27:40]** Also, die baut dann irgendwelchen Backend-Kram

**[00:27:43]** und ich finde,

**[00:27:45]** da muss man schon ziemlich klare Vorgaben geben

**[00:27:48]** und am einfachsten ist es halt mit einem konkreten Beispiel,

**[00:27:50]** so wie du das jetzt da hast, oder?

**[00:27:52]** Das heißt, das ist vielleicht irgendwie,

**[00:27:53]** wenn man jetzt mal so eine App bauen will, Schritt 1,

**[00:27:55]** dass man irgendwie so sagt, so, weiß ich nicht,

**[00:27:58]** im Prinzip reicht eine To-Do-App oder so was, ne,

**[00:28:00]** die halt Frontend, Backend, Database-Layer hat und so

**[00:28:04]** und das dann irgendwie alles am besten

**[00:28:06]** noch mit CI-Deployment-Skripten oder so

**[00:28:08]** und sagt, nimm dir das, kopier dir das

**[00:28:10]** und jetzt passt das mal für meine Facebook-Verhunde

**[00:28:13]** oder was ich hier jetzt programmieren will,

**[00:28:15]** dann irgendwie an.

**[00:28:16]** Und wie kriegst du den Kontext in Cloud rein?

**[00:28:19]** Also, sagst du ihm einfach, hier ist der Link,

**[00:28:20]** check das mal aus,

**[00:28:21]** also, du startest ein neues Repository dann dafür, oder?

**[00:28:24]** Genau, also, ich starte ein neues Repository

**[00:28:28]** Ich hab ein Skill, wo ich dann halt sag, so,

**[00:28:30]** create application quasi

**[00:28:33]** und dann quatschen wir erst mal so,

**[00:28:35]** hey, was will ich überhaupt, ne?

**[00:28:37]** Will ich eine Webseite bauen,

**[00:28:39]** will ich eine mobile App bauen?

**[00:28:43]** Aber jetzt mal zurück zu dem Skill.

**[00:28:44]** Also, der Skill liegt bei dir auf der Platte

**[00:28:48]** oder in einem Depot oder beides, oder?

**[00:28:52]** Liegt bei mir global in den Settings,

**[00:28:53]** sodass ich quasi immer darauf zugreifen kann.

**[00:28:55]** Also, das ist ein homefolder.cloud,

**[00:28:57]** so ein versteckten Cloud-Folder,

**[00:28:58]** da drin so ein Settings oder so Skills-Folder

**[00:29:01]** und da hast du den drin

**[00:29:02]** und das ist aber ein Git-Repository,

**[00:29:04]** was du auch mal pushst, oder was?

**[00:29:06]** Ja, das Setup, das muss ich mir noch irgendwie ordentlich aufbauen.

**[00:29:12]** Dadurch, dass ich halt auch oft in den Dev-Containern arbeite,

**[00:29:15]** ist es halt immer so ein Hassle,

**[00:29:18]** wie man mit diesen Skills umgeht.

**[00:29:22]** Und ja, theoretisch ist es am sinnvollsten

**[00:29:24]** so ein Repo zu haben, wo deine Skills drin sind,

**[00:29:30]** dass du die halt auch einfach als Sub-Repo

**[00:29:33]** irgendwo reinziehen kannst in irgendein Projekt.

**[00:29:35]** Aber da habe ich noch keinen richtig guten Flow.

**[00:29:39]** Also, ich habe das jetzt ausprobiert.

**[00:29:41]** Man kann ja in den Containern

**[00:29:43]** immer automatisch seine dotfiles installieren lassen

**[00:29:45]** und das sind ja auch nur dotfiles.

**[00:29:46]** Also, ich tue die jetzt in meinen .file-Repository rein.

**[00:29:49]** Das Einzige, was ich dann so ein bisschen so ist,

**[00:29:51]** vielleicht sind da dann irgendwie ziemlich private Skills drin.

**[00:29:54]** Aber ich glaube, man kann das auch private machen

**[00:29:58]** und dann halt mit Authentication sich die dotfiles runterziehen

**[00:30:01]** oder so was.

**[00:30:02]** Ja.

**[00:30:03]** Und dann hat man eben seinen persönlichen Skill-Dings da.

**[00:30:06]** Aber du hast das jetzt erst mal auf der Platte.

**[00:30:07]** Genau, ich habe es jetzt erst mal auf der Platte.

**[00:30:09]** Also, so starte ich meistens auch,

**[00:30:11]** dass ich auf meiner Platte starte, das Projekt aufsetze

**[00:30:14]** und danach halt das Repo aufziehe.

**[00:30:18]** Und dann pusht er halt alles

**[00:30:20]** und dann ziehe ich das meistens in den Dev-Container rein.

**[00:30:23]** Das ist dann auf einem Dedicated-Server einfach dann

**[00:30:27]** in dem Projekt.

**[00:30:29]** Aber dann verlierst du deine Skills oder kopierst du dann alles?

**[00:30:32]** Nee, dann kopiere ich quasi aus einem anderen Repo

**[00:30:36]** die Skills rüber.

**[00:30:38]** Also, nicht aus einem Repo,

**[00:30:40]** sondern aus meinem eigenen .files ziehe ich die Skills rüber.

**[00:30:44]** Du postest sie in den Container oder ins Repo rein.

**[00:30:48]** Ich meine, man kann die auch im Repo kommitten, die Skills.

**[00:30:51]** Genau.

**[00:30:52]** Also, was ich am Anfang gemacht habe,

**[00:30:53]** die Dev-Container habe ich erst mal auch lokal laufen lassen.

**[00:30:57]** Dadurch, dass dann mein System einfach abgeschirmt wird,

**[00:30:59]** habe ich dann quasi mein Cloud-Verzeichnis

**[00:31:04]** in das Volume reingezogen,

**[00:31:06]** sodass er dann darauf zugreifen konnte.

**[00:31:08]** Aber seitdem ich dann auf meinen Dedicated-Server umgezogen bin,

**[00:31:12]** geht das halt leider nicht mehr.

**[00:31:15]** Deswegen müsste ich da mal gucken, wie ich das am besten mache.

**[00:31:18]** Ja, also man kann, glaube ich,

**[00:31:19]** erst mal so als Workaround oder so als Praxisding,

**[00:31:23]** also man kann ja,

**[00:31:24]** wenn man jetzt zum Beispiel auf einem Dedicated-Server ist,

**[00:31:26]** da hat man SSH-Zugriff drauf,

**[00:31:27]** dann ist man da im Container oder so.

**[00:31:29]** Wenn man dann VS Code aufmacht,

**[00:31:30]** da kann man dann ein Drag-and-Drop in das Repository reinschmeißen.

**[00:31:33]** Ja, theoretisch.

**[00:31:34]** Du kannst ja in deinem konkreten Projekt-Repository

**[00:31:36]** auch nochmal eine .cloud-Folder haben

**[00:31:38]** und da halt einfach deine Skills so reinwerfen.

**[00:31:41]** Für mich ist halt dann das Dumme, wenn ich einen neuen Skill habe,

**[00:31:44]** dann ist der nicht automatisch in allen meinen Projekten,

**[00:31:46]** sondern ich muss den dann mit der Hand überall,

**[00:31:48]** oder ich hab dann in dem einen total veralteten Skill,

**[00:31:50]** den ich schon überarbeitet habe oder so.

**[00:31:52]** Und deswegen ist das mit den .files dann vielleicht ein bisschen besser,

**[00:31:55]** weil dann früher oder später ist der dann auch in allen diesen Containern drin.

**[00:31:58]** Aber das ist jetzt, sag ich mal, auch so eine Lodlösung.

**[00:32:00]** Wenn man so einen Container hat,

**[00:32:01]** dann kann man eben immer so einen .cloud-Folder, den man hat, da reintun

**[00:32:05]** oder ein paar Dateien dazu werfen, die man jetzt für das Projekt braucht.

**[00:32:09]** Genau.

**[00:32:11]** Und auch zu den Skills, die erstelle ich halt alle mit Cloud.

**[00:32:16]** Also da schreibe ich auch nicht alles per Hand,

**[00:32:19]** sondern dadurch, dass halt auch Cloud einen eigenen Skill-Builder-Skill

**[00:32:24]** zur Verfügung stellt, sind quasi alle Skills, die ich baue,

**[00:32:28]** auch mit Metaprompting quasi erstellt und bearbeite die dann halt auch so.

**[00:32:35]** Wenn ich merke, dass was nicht so funktioniert,

**[00:32:38]** wie ich das haben möchte, dann sage ich halt Cloud,

**[00:32:41]** hey, lass uns mal den Skill nochmal angucken und den bearbeiten.

**[00:32:45]** Okay, aber jetzt, es explodieren die Themen in meinem Kopf immer die ganze Zeit.

**[00:32:51]** Aber vielleicht ein paar Sachen schreibe ich auch auf,

**[00:32:53]** einfach für weitere Podcast-Folgen, die wir mal haben.

**[00:32:58]** Wir müssen auf jeden Fall dann irgendwann nochmal über die Permissions reden von Cloud.

**[00:33:01]** Also du lässt es ja offensichtlich auf deinem Host-System laufen,

**[00:33:05]** wo ich immer extreme Paranoia habe, dass da irgendwelche,

**[00:33:10]** diese Vergiftungen da stattfinden, Poisoning und dann der durchdreht

**[00:33:13]** und meine ganze Platte irgendwo löscht oder hinschickt oder so.

**[00:33:16]** Können wir dann nochmal, sprechen wir nochmal extra drüber, glaube ich.

**[00:33:20]** Prinzip was, was man in den Griff kriegen kann. Also für die Hörer, die jetzt sagen,

**[00:33:22]** oh, das Schwerste sparen Sie jetzt aber aus. Da erklären wir euch gerne alles im Detail. Wir

**[00:33:29]** arbeiten da viel dran und denken da viel drüber nach. Aber wir werden das einfach jetzt, wir

**[00:33:33]** wollen, ich will ja jetzt nicht abdriften hier, sondern mal ein bisschen konkret bleiben,

**[00:33:36]** dass man auch mal ein Erfolgserlebnis hat. Okay, also du hast diese Skills,

**[00:33:42]** die bearbeitest du mit Lod. Du hast auch mir mal erzählt, also erstens, das sind ja eigentlich nur

**[00:33:46]** Markdown-Dateien, die Skills.md oder Skill.md. Aber daneben kann man ja auch noch so Beispiele

**[00:33:52]** machen und irgendwelche Rules oder ich weiß nicht was. Und die Dateien selber, hast du mir gesagt,

**[00:33:58]** die sind, wenn man da so quasi Pseudo-XML-mäßig Sachen reinschreibt, dann kann die AI die noch

**[00:34:03]** besser verstehen. Richtig, genau. Also auch in der Cloud-Dokumentation gibt es den Hinweis so,

**[00:34:10]** dass XML-Tags, es gibt ein paar vorgefertigte XML-Tags, die Cloud oder Entropiq selber nutzen,

**[00:34:19]** aber prinzipiell kann man da auch Custom-XML-Tags einfach nutzen in den md-Files und dann bekommt

**[00:34:28]** Cloud ein besseres Verständnis vom Aufbau, von der Struktur, damit es weiß, wo der Entry-Point

**[00:34:35]** ist und wo es halt aufhört, also so eine Sektion. Genau, da würde ich es auf jeden Fall empfehlen,

**[00:34:43]** mit XML-Tags zu arbeiten. Und diese anderen Dateien, Examples und so weiter? Das kann halt

**[00:34:48]** alles Mögliche sein. Das kann von md-Files bis zu Skripten, bis ausführbare Skripte sein,

**[00:34:55]** vor allem für so Verifications. Also oft, wenn man dann ein Workflow von mir ist zum Beispiel,

**[00:35:07]** dass wir da auch irgendwie so ein Exempel haben, was man sich vorstellen kann, dass,

**[00:35:12]** wenn ich ein Feature entwickle, ich erstmal mit der KI spreche, hey, das und das habe ich vor,

**[00:35:17]** dafür habe ich auch einen Skill, der heißt Explorer Feature und mit dem schreibe ich dann

**[00:35:24]** erstmal, was ich halt machen möchte und danach fragt er mich erstmal hier 4, 5 Sachen und dann

**[00:35:30]** erstellt er für mich eine md-File beziehungsweise noch eine JSON-File, die ein State abbildet,

**[00:35:37]** welche Features wirklich implementiert wurden. Also das heißt, ich habe quasi so ein Epic-Feature

**[00:35:44]** und dadurch werden dann so kleine Sub-Tickets erstellt und so eine JSON, die ist quasi eine

**[00:35:52]** State-Machine von diesen kleinen Sub-Tickets, da steht dann quasi Ticket 001, passe die Translations

**[00:36:01]** an und dann ist es done oder nicht oder im Progress oder nicht und dann gibt es in den Skills einen

**[00:36:09]** Skript-Bereich, der mir dann quasi dieses JSON validiert, ob das richtig gebaut wurde.

**[00:36:15]** Nutzt du das denn viel, diese 40 Dateien oder arbeitest du hauptsächlich mit diesen Skills, md?

**[00:36:21]** Hauptsächlich mit den Skill-MDs, je nachdem, wie groß dieser Skill wird. Also wenn es halt

**[00:36:28]** dann wirklich in Richtung Validierung gehen sollte, dann nutze ich auf jeden Fall so Skript

**[00:36:34]** und Referenzen. Und damit hast du auch gute Erfahrungen gemacht. Ja, auf jeden Fall. Okay,

**[00:36:38]** jetzt mal zurück zu deinem Skill New Project, der hat im Prinzip einfach die Uhr von deinem

**[00:36:43]** Repository und geht da rein oder hast du das komplette Repository damit reingedampft als

**[00:36:49]** Example in den Skill oder so? Ne, ne, der hat bei mir Access auf mein GitHub und kann sich das

**[00:36:55]** dann einfach ziehen. Aber ist das nicht ein bisschen, also da muss er dann fummeln, was

**[00:37:01]** klont der das und muss das dann durch? Ja genau, also das ist halt schon ein bisschen Tooling,

**[00:37:05]** Calling des Todes, also das könnte man ihm auf jeden Fall vereinfachen. Prinzipiell kann er auch

**[00:37:13]** einfach über Websearch, also der klont sich das quasi zwischen, zieht sich dann quasi die Files

**[00:37:23]** rein, liest die Files und weiß dann Bescheid. Also ich gehe eher den anderen Weg. Ich habe

**[00:37:28]** so ein Template-Repository und dann sage ich halt Start from Template. Auf jeden Fall, ja. Und dann

**[00:37:33]** ziehe ich mir das runter und dann gehe ich da rein und sage, so pass mal auf mein Freund. Und

**[00:37:37]** da kann man ja dann auch eine Cloth-MD drin haben, die das Projekt irgendwie erklärt und

**[00:37:41]** Rhythmi und so. Und dann ist der eigentlich auch relativ schnell und dann fängst du halt an,

**[00:37:45]** da drin abzuändern. Also, was am Ende schneller ist, weiß ich nicht. Ja genau, ich glaube,

**[00:37:54]** das kommt halt immer auf die, wie viel verändert sich dein Boilerplate über die Zeit hinweg. Wenn

**[00:38:03]** du halt ein sehr sophisticated Setup hast und dein Template vielleicht nur einmal in drei Monaten

**[00:38:09]** anfasst oder so, dann ist es wahrscheinlich der sinnvollere Weg, das einfach in den Templates zu

**[00:38:14]** haben und das irgendwie auf der Platte zu haben oder direkt in den Skills zu haben. Und wenn man

**[00:38:20]** halt noch sehr viel an dem Boilerplate arbeitet, dann ist es wahrscheinlich sinnvoller, das nochmal

**[00:38:25]** in einem Git-Repo zu haben. Ich habe das ja auch im Git-Repo, aber du kannst ja GitHub-Repos als

**[00:38:31]** Template-Repository anlegen. Achso, ja okay. Dann kann ich sagen, ich gehe mal über GitHub,

**[00:38:37]** create a new repository, form Template, dann zack kriege ich einen Clone von dem, also einen

**[00:38:41]** shallow Clone von dem Template-Repository als neues Repository. Dann starte ich,

**[00:38:47]** dann gehe ich in Cloud Web und dann öffne ich, dann suche ich mir das Repository aus und dann

**[00:38:52]** sage ich ihm, was er machen soll. Und dann hat er halt im Prinzip, fängt er halt nicht bei Null

**[00:38:55]** an, sondern er ist halt schon in einer kompletten Applikation drin und ist halt quasi der neue

**[00:39:00]** Mitarbeiter, der jetzt den ersten Tag da ist. Aber es ist schon alles entschieden, was die

**[00:39:05]** Architektur angeht und so. Und es hat sich eigentlich auch bewährt. Also ich arbeite ja

**[00:39:10]** mehr in der Cloud als du und dann musst du ja eben nicht nochmal was clonen in einem zweiten

**[00:39:16]** Folder oder so. Und dann, beschreib mal dieses Template so ein bisschen. Was ist das für ein

**[00:39:24]** Stack? Also wenn ich zum Beispiel jetzt eine mobile App, also das letzte Projekt, was ich für

**[00:39:31]** meine Freundin da gemacht habe, das ist eine React Native Anwendung, nutze momentan sehr gerne

**[00:39:38]** Convex. Das ist quasi das charmantere Backend fürs schnelles Aufsetzen von so kleinen Projekten,

**[00:39:52]** dadurch dass man da so asynchrone Funktionen nutzen kann, was auch gleichzeitig eine Datenbank

**[00:40:01]** ist, Authentifizierung bietet und ja. Convex, ist das ein Software-as-a-Service-hosted?

**[00:40:10]** Genau, das ist sowas wie, ich sag mal sowas wie Superbase. Das kennen ja auch super viele. Das

**[00:40:17]** ist so quasi die Next Generation davon, weil es einfach ein attraktiveres Pricing hat. Und genau,

**[00:40:25]** dann nutze ich halt noch so, ja, das was man halt so kennt, Linting, Jest-Testing,

**[00:40:35]** Maestro als E2E-Testing. Und deine, also das heißt also der Code ist dann TypeScript. Genau,

**[00:40:41]** alles TypeScript. Und das Backend-as-a-Service im Prinzip. Genau, Backend-as-a-Service. Also

**[00:40:48]** für so kleine Tools nutze ich das halt super gerne. Sonst, dadurch dass ich halt aus einem

**[00:40:52]** Springboot oder eine Springboot-Vergangenheit habe und wenn da was Größeres aufgebaut werden

**[00:41:00]** soll, dann ist es meistens irgendwie so eine Springboot-Backend. Genau, wenn jetzt noch so

**[00:41:05]** eine Web-Komponente dazukommen würde zu der App, die du da für deine Freundin gebaut hast,

**[00:41:09]** dann würdest du das mit Java Springboot machen oder was denn? Ja, genau. Also genau. Und das

**[00:41:17]** finde ich nämlich ganz spannend. Also ich habe bis jetzt immer nur Web-Applikationen gebaut,

**[00:41:21]** weil ich Angst hatte vor dem Native-Tooling von Xcode und React Native und so. Auch in Containern

**[00:41:29]** ist das ja irgendwie, glaube ich, jetzt nicht so einfach irgendwie. Ja, das ist ein bisschen tricky.

**[00:41:34]** Aber das geht schon, meinst du? Und dann, also was ich dann in meinen Web-Applikationen habe,

**[00:41:39]** ist halt irgendwie Playwright oder irgendwie einfach so Jest-Tests mit Super-Tests oder

**[00:41:43]** ich weiß nicht. Also da kommt man ja immer ran an Web, so irgendwie, um dann da mal zu gucken,

**[00:41:47]** kann man den Knopf drücken und so weiter. Bei Native musst du diesen Emulator starten und so

**[00:41:53]** weiter. Aber du sagst, du hast damit gute Erfahrungen gemacht, da kann die AI auch

**[00:41:57]** rallen irgendwie. Ja, auf jeden Fall. Also, was ein bisschen schwieriger ist, halt auf jeden Fall

**[00:42:04]** in diesen Dev-Containern zu arbeiten. Da bietet einem Xcode halt ein bisschen, also ich mache

**[00:42:10]** nur bei Xcode React Native Setups, weil Xcode super viel, ich sag mal, Dev-Experience einbietet.

**[00:42:21]** Dadurch, dass du dann quasi über einen QR-Code dann auf dein eigenes Handy zugreifen kannst,

**[00:42:28]** ist es super charmant, dann einfach in der Entwicklung auf dem eigenen Handy irgendwie

**[00:42:31]** rumzurödeln. Aber dann diesen Emulator zu starten und so, das ist halt ein bisschen trickier. Aber

## Mobile Entwicklung mit AI-Unterstützung

**[00:42:38]** das riecht man auch hin. Da kriegt die AI das von alleine hin. Also jetzt stelle ich mir mal so

**[00:42:42]** Zuhörer vor, Zuhörerinnen vor, die vielleicht jetzt mehr so Backend-Entwickler sind oder so.

**[00:42:48]** Also ich habe das selber, habe ich React Native Apps entwickelt und so. Und das ist ein Horror,

**[00:42:55]** also vor allem auch auf Mac. Dieses Xcode, wenn das aufgeht, dann will ich schon einfach

**[00:43:00]** wegrennen von meinem Arbeitsplatz. Und dann da mit diesen ganzen, ach wie hießen die denn? Also

**[00:43:06]** es gibt da so Leute, Command-Line-Tools, auch dann fürs Deployment und so. Aber das kannst du

**[00:43:12]** der App geben, der AI geben und sagen, figure this out und die findet dann, was braucht man.

**[00:43:17]** Ja, also mittlerweile ist es ein bisschen charmanter geworden, vor allem auch durch

**[00:43:21]** Xcode React Native. Klar, man braucht, wenn man, ich sag mal, zu 99 Prozent entwickle ich eigentlich

**[00:43:30]** nur iOS-Apps. Theoretisch könnte ich auch mal wieder auf Swift umsteigen. Aber dadurch,

**[00:43:39]** dass ich aus der React-Welt komme und super viel Web gemacht habe in der Vergangenheit,

**[00:43:42]** ist React einfach so mein Frontend-Framework. Dadurch, dass die KI super Verständnis hat und

**[00:43:55]** auch Zugriff auf deinen Rechner zum Teil hat, mit Permissions hier und da nochmal den

**[00:44:02]** Wink mit dem Zaunfall nicht alles erlauben. Klar, also sobald du halt Xcode installiert hast,

**[00:44:09]** die CLI-Tools installiert hast, den Simulator installiert hast, kann die KI alles automatisiert

**[00:44:15]** starten. Und kann dann auch lesen, also kann auch den Emulator fernsteuern. Genau. Also um

**[00:44:23]** den Emulator zu steuern, nutze ich tatsächlich einen MCP-Server von Maestro. Das ist quasi so

**[00:44:29]** ein E2E-Playwright-Pawn-Dawg für mobile Anwendung. Und damit kann er dann ganz normal die App dann

**[00:44:40]** auch bedienen. Und angenommen, du hast jetzt zehn Agents laufen, die gleichzeitig was entwickeln,

**[00:44:44]** haben die auch zehn Emulatoren oder was? Das skalieren mit mobilen Apps ist ein bisschen

**[00:44:49]** schwieriger, ja. Also da müsstest du halt wirklich auf einem Mac irgendwo dir dann so

**[00:44:56]** Mac-Instanzen holen, so quasi so IC2-Instanzen und das darauf dann machen. Genau, also das wäre

**[00:45:05]** dann wahrscheinlich die, genau, dass man halt irgendwie in der Cloud mehrere isolierte Mac

**[00:45:10]** Virtual Machines startet und die das dann halt da machen. Wenn man es dann halt wirklich, ich meine,

**[00:45:16]** für so eine Hobby-App kann man ja auch mal ein bisschen länger erwarten, dass der dann

**[00:45:19]** eigentlich schon nacheinander macht oder sowas. Also meine Erfahrung ist auch oft mit der

**[00:45:23]** Parallelisierung, das alles zu planen, das dauert länger, als es dann dauert, die Sachen sequenziell

**[00:45:27]** zu implementieren. Also oft ist der mit fünf Sachen, die ich ihm sage, innerhalb von drei

**[00:45:31]** Minuten fertig. Und dann hätte ich mir sparen können, das zu parallelisieren und so. Und dann

**[00:45:37]** hast du noch Konflikte und dies und das und Abhängigkeiten nicht gesehen und so. Also man

**[00:45:41]** kann das doch übertreiben, finde ich, mit der Parallelisierung. Ja, absolut. Momentan habe ich

**[00:45:47]** auch wieder so ein bisschen den Drang, von diesem Workflow wegzugehen und einfach so mit der KI

**[00:45:53]** einfach zu sprechen, einfach über das Projekt zu sprechen, näher am Projekt zu sein. Fühlt

**[00:46:00]** sich momentan ein bisschen besser an. Aber ja, ich glaube, das ist so ein bisschen Work in Progress,

**[00:46:11]** einfach sich mit dieser Thematik auseinanderzusetzen und so ein Bauchgefühl zu entwickeln. Deswegen kann

**[00:46:17]** ich auch jedem nur empfehlen, der das noch nicht gemacht hat, einfach loszulegen und einfach ein

**[00:46:22]** Bauchgefühl zu bekommen, was kann die KI, was gibt mir die KI, um da so ein Verständnis irgendwie

**[00:46:30]** aufzubauen. Weil das ja schon irgendwo abstrakt ist und nicht in der Natur eines Entwicklers unbedingt

**[00:46:39]** Sachen wegzudelegieren, Aufgaben wegzudelegieren. Und ich glaube, das ist halt auch einfach ein Bereich,

## Neue Rollen, neue Verantwortlichkeiten

**[00:46:48]** der halb für viele neu ist. Ja, du wirst halt im Prinzip zum CTO oder sowas und bist halt nicht

**[00:46:57]** mehr nur Senior Developer, sondern du musst jetzt halt durchdenken, wie soll das Produkt aussehen

**[00:47:01]** und so weiter. Also du musst diese ganzen Rollen auch noch übernehmen oder die Entwicklerrolle

**[00:47:07]** hast du ja fast gar nicht mehr eigentlich. Du arbeitest ja zum Beispiel ganz anders. Also ich

**[00:47:16]** bin ja super viel mit der CLI unterwegs und du hast ja auch noch mal zwei andere Ansätze,

## Levins CLI Nutzung

**[00:47:22]** dass du viel mit den Web-Sessions machst. Genau, ich überlege gerade, wir haben jetzt den Podcast,

**[00:47:30]** der läuft jetzt schon, glaube ich, 48 Minuten. Ja gut, dann können wir noch ein bisschen rein

**[00:47:36]** drauflegen. Aber sonst müssen wir uns das auch mal für eine andere Folge aufbewahren, bevor wir da

**[00:47:40]** zu tief reingehen. Aber vielleicht so ganz high-levelig. Ja, also ich stufe das halt ab.

**[00:47:45]** Also ich arbeite auch viel mit der CLI, mit Code lokal. Also was heißt lokal? Also ich starte halt

**[00:47:55]** diese Dev-Server oder Dev-Container und dann komme ich da irgendwie rein mit einer SSH-Verbindung,

**[00:48:01]** sodass ich da einen Terminal starten kann. Meistens starte ich da drin halt noch so eine

**[00:48:04]** Screen-Tools. Zellige habe ich jetzt als Letztes da gesehen, damit wenn die Verbindung abbricht,

**[00:48:11]** ich dann nachher wieder da rankomme oder wenn ich keine Lust mehr habe oder von einem anderen

**[00:48:14]** Rechner dann mich wieder anhängen kann und so, damit eben die Konversation da steht und so. Und

**[00:48:19]** in Zellige kannst du halt mehrere Paints auch machen, da kannst du halt mehrere Git-Work-Trees

**[00:48:23]** und da überall Codes starten und mit denen halt reden und so, bis du halt irre wirst. Also wenn

**[00:48:28]** du dann da 40, 50 Leute hast, die mit dir reden wollen, dann wirst du natürlich auch immer

**[00:48:31]** bescheuert. Aber so das ist so das eine, das ist so die direkte Art mit Code zu arbeiten und das

**[00:48:38]** benutze ich schon auch viel, vor allem wenn ich halt sofort Feedback brauche. Also wenn ich eine

**[00:48:43]** Web-App entwickle, dann starte ich die oder Cloud startet die halt auf dem Dev-Server in

**[00:48:50]** diesem Container. Dann vorworte ich mir mit, wie es Code, die Ports irgendwie lokal, dass ich dann

**[00:48:54]** im Browser dann da was sehe. Also bei Astro oder so, wenn ich, meistens mache ich Astro-Apps,

**[00:48:59]** dann sehe ich halt den Astro-Dev-Server, der dann auch immer so Hot-Reload hat,

**[00:49:04]** wenn sich der Code ändert. Und das ist halt einfach dann, wenn ich da wirklich am Produkt

**[00:49:09]** arbeiten will mit der AI, dann ist das der schnellste Feedback-Cycle, den ich da haben

**[00:49:14]** kann. Und das ist dann auch manchmal einfach im Prinzip, das ist eigentlich das, was ich so

**[00:49:20]** Weibcoding nennen würde. Und das, was ich auch an Weibcoding, also was für mich der Inbegriff von

**[00:49:25]** Weibcoding im positiven Sinne ist halt, dass du hast halt eine CLI und du hast halt den Output so

**[00:49:31]** und mehr nicht. Und ich kann mit, wie es Code, kann ich auch noch die Dateien angucken. Das

**[00:49:35]** mache ich aber kaum. Und dann der nächste Schritt ist dann für mich, das Ding ist halt, das ist

**[00:49:43]** halt schon relativ heavyweight. Also da muss ich so das Repository irgendwie irgendwo reinziehen,

**[00:49:49]** die dependencies installieren, bauen, gucken, machen. Das ist schon anstrengend, auch irgendwo

**[00:49:55]** zu tracken, wo sind diese ganzen Sachen. Also ich habe jetzt bei GitHub irgendwie 150 Repositories

**[00:50:00]** und jeden Tag werden es drei mehr oder so, habe ich so das Gefühl. Und dann hat ja dieses Repository,

**[00:50:05]** das lebt ja auf irgendeinem, entweder lebt es auf meinem Mac-Studio, auf meinem Development-Server

**[00:50:10]** oder auf meinem Laptop. Also letztens hatte ich die Situation, dass ich gedacht habe,

**[00:50:13]** scheiße, ich habe das doch alles gemacht, jetzt ist doch alles schon fertig und so. Und dann,

**[00:50:17]** wo ist das denn? Und dann habe ich diese ganzen Container gescannt und geguckt und dann ist mir

**[00:50:20]** irgendwas eingefallen, ach, das hast du ja auf dem Laptop gemacht. Und dann habe ich es auf dem

**[00:50:22]** Laptop geholt und da war es dann halt so. Und das ist so ein bisschen unübersichtlich und dauert

## Claude Code Web

**[00:50:29]** halt auch lange, bis das mal aufgesetzt ist, die Ports weitergeleitet sind und so. Und dann,

**[00:50:33]** wenn ich jetzt an vielen Projekten halt nur eine kleine Änderung habe, dann nutze ich eigentlich

**[00:50:38]** für die Sachen, wo ich einfach mal schnell was machen will, nutze ich eben Cloud Code Web. Das

**[00:50:44]** ist also Cloud AI slash Code im Browser und das hatten sie früher nur im Browser. Jetzt haben sie

**[00:50:50]** es aber auch in die Desktop-App mit reingebracht. Da hat man jetzt oben so einen Kartenreiter Code

**[00:50:55]** und auf sogar, das ist jetzt noch nicht so lange, aber das finde ich mega geil, auf Mobile.

**[00:50:59]** Ja, habe ich letztens auch entdeckt. Richtig gut.

**[00:51:02]** Genau, also in Mobile haben sie jetzt auch ein Dings und links im Menü haben sie auch Code und

**[00:51:07]** dann wechselt ihr in diesen Code-Modus. Da wählt man dann sein Repository aus,

**[00:51:10]** den Branch, meistens nimmt man da halt Main und dann sagt man einfach, was man haben will.

**[00:51:14]** Das Problem an dem ist und an Code in letzter Zeit, in diesen ganzen Web-Geschichten und so,

**[00:51:18]** also die CLI, die ist auch slow geworden teilweise, finde ich. Aber diese Web-Geschichten,

**[00:51:23]** die sind richtiggehend buggy. Also da tippt man irgendwas ein, dann drückt man absenden,

**[00:51:27]** dann denkt man, okay, hat es gefressen, dann geht man ein anderes Fenster und da weiter,

**[00:51:30]** dann kommt man zurück und dann fehlt das da wieder, was man vorher geschickt hat und so.

**[00:51:35]** Und dann denkt man sich, aber da rödelt irgendwas, also man kann nicht eine neue Nachricht schicken,

**[00:51:40]** dann geht man wieder ein anderes Fenster und irgendwann kommt man zurück, nach einer halben

**[00:51:42]** Stunde ist dann die eigene Nachricht da plus das ganze Ergebnis. Aber zwischendurch hat man das

**[00:51:47]** Gefühl gehabt, das Ding ist abgestürzt oder sowas. Und manchmal bleibt er auch komplett

**[00:51:50]** hängen, dann muss er eine neue Session machen und so. Das war mal besser und das wird bestimmt

**[00:51:54]** auch wieder besser. Man merkt halt echt, dass Cloud, die hauen ja Features in drei Tagen raus.

**[00:51:59]** Also das ist alles Operation am offenen Herzen. Das ist schon interessant zu sehen,

**[00:52:03]** aber ich liebe es auch, weil die Leute einfach, die sagen einfach, ja, what the fuck,

**[00:52:08]** ist ein geiles neues Feature, raus damit. Und jetzt nicht irgendwie noch 100 QA-Sessions und

**[00:52:15]** so weiter. Und dann warten sie halt vielleicht auf Bug-Reports und so. Und wenn man sich halt

**[00:52:19]** mal Cloud-Status anguckt, ja, da ist kein Tag, wo nicht mindestens dreimal ein roter Alarm gekommen

**[00:52:25]** ist. Aber man kann schon so auch arbeiten. Und dann da arbeite ich, da verbessere ich halt immer

**[00:52:33]** weiter meinen Setup. Also zum Beispiel habe ich halt so eine, ich habe jetzt, die Tage hatte ich

**[00:52:39]** jetzt so die Situation, das hätte Frust, weil ich habe so ein, ich habe ja ein Haus hier auf dem

**[00:52:44]** Land und ich habe da ein Lebensmittelvorrat und da habe ich halt so Sachen gekauft, Lebensmittel

**[00:52:48]** Vorräte und die nie gegessen. Und da habe ich mich drüber geärgert und dann habe ich halt gedacht,

**[00:52:52]** okay, das kann so nicht funktionieren. Ich will jetzt einfach mal alles, was ich habe quasi

**[00:52:58]** katalogisieren, also ein Inventar machen. Und dann soll mir die AI immer Kochrezepte geben mit

**[00:53:03]** dem Fokus da drauf, die ältesten Sachen und die, wo ich von zu viel habe, dann zu verbrauchen. Ja,

**[00:53:10]** ist schon fertig. Hat zwei Stunden gedauert. Und da war jetzt das Problem, dass ich gesagt habe,

**[00:53:16]** wie kriege ich jetzt diese Information, was habe ich hier alles zu essen, da rein. Da kann man ja

**[00:53:21]** sagen, QA-Codescanner oder dies oder jenes. Und ich habe das aber dann so gemacht, dass ich eben

**[00:53:27]** ein Grundgerüst aufgesetzt habe und dann habe ich eben dieses Cloud-Code-Web gestartet. Oder doch,

**[00:53:36]** da habe ich diese Tastatur halt entdeckt. Diese Tastatur, wo ich dann reinsprechen kann und die

**[00:53:39]** dann durch die AI das zieht und dann aufbereitet und dann da reintun. Weil die normale Voice

**[00:53:43]** Dictation, die ist echt nicht gut genug. Also da kommt so viel Quark bei raus, wenn du englische

**[00:53:47]** Begriffe verwendest und so. Dann habe ich mich halt hingesetzt und immer so eine Kiste, das sind

**[00:53:51]** so Kisten in so IVA-Regalen. Dann habe ich mir eine Kiste raus, die ausgekippt und dann habe ich

**[00:53:56]** dieses Ding angemacht und gesagt, so, ich habe hier in der Hand 500 Gramm Aprikosen, 200 Gramm

**[00:54:02]** Pflaumen und so. Bei den Trockenfrüchten und so. Und wenn ich damit durch war, habe ich Abschicken

**[00:54:08]** gedrückt und dann macht er mir halt, dann checkt er das Repo aus, den Main-Branch, macht dann einen

**[00:54:15]** neuen Feature-Branch auf und dann guckt er sich an, was habe ich geschrieben. Das ist ja quasi

**[00:54:20]** Text, dann aber, also Speech tut er Text an. Ja, und dann hat er da so ein YAML-Datei, wo er diese

**[00:54:26]** ganzen Sachen drin hat und so. Und dann sage ich ihm halt so, also quasi diese Vorräte, daraus

**[00:54:31]** baut er dann eine Astro-Page, also HTML im Prinzip, dass ich mir das angucken kann mit der Liste von

**[00:54:36]** den Vorräten. So ein bisschen sortiert nach Dings und so. Da kannst du ihm dann sagen,

**[00:54:39]** mach das fancy oder nicht. Und dann im nächsten Schritt nimmt dann halt Claude, selber ist er

**[00:54:43]** auch ein AI, guckt sich das halt an und fängt dann halt an, Rezepte sich auszudenken. Und dann

**[00:54:47]** macht er mir halt immer so für 14 Tage Rezepte. Das sind auch einfach nur Webseiten da drin,

**[00:54:52]** so, die ich durchklickern kann. Und dann habe ich ihm gesagt, ja, optimier das auch so mit

**[00:54:55]** den CSS-Dateien, dass ich das auch ausdrucken kann und so. Und dann kann ich im Prinzip Anfang

**[00:55:00]** der Woche, kann ich mir halt dann da sieben Rezepte ausdrucken. Und dann kann ich dann eben

**[00:55:04]** auch sagen, also ich esse gern vegan, ich mag keine Milchprodukte, Käse ist okay, Eier sind

**[00:55:08]** in Ordnung und so. Und das ist für mich auch so ein Beispiel dafür, was man mit dem Ding eigentlich

**[00:55:13]** machen kann. Also ich hatte dann überlegt, ja, bauen wir dann irgendwie so ein CI-Skript,

**[00:55:19]** dass ich quasi nur die Rohdaten reintue. Und dann beim Build werden die Rezepte erzeugt,

**[00:55:24]** indem ich irgendwelche API-Calls an irgendeiner AI mache. Aber ich habe einfach gesagt, mach du

**[00:55:29]** doch mal was. Also quasi denk dir jetzt was aus hier und committe das dann. Und ich habe das jetzt

**[00:55:34]** noch nicht so viel gekocht, aber ich habe mir die mal angeguckt, die sehen ganz in Ordnung aus. Ich

**[00:55:38]** mache dann auch Fotos von, also auch alles dann über diese Cloud-Code-Web-Geschichte. Dann sage

**[00:55:46]** ich zum Beispiel, da kann man halt leider keine Dateien hochladen. Das ist so eine doofe Einschränkung,

**[00:55:51]** aber man kann Fotos hochladen. Das ist, glaube ich, eigentlich gedacht dafür, dass man irgendwie

**[00:55:55]** Architekturdiagramme malt und fotografiert und dann da reintut oder so. Aber ich fotografiere

**[00:56:00]** einfach aus Kochbüchern Rezepte, die mir gefallen und sage dann dem, so leg das mal als Favorite ab.

**[00:56:05]** Der liest halt dann dieses Foto, dieses Kochrezept und macht daraus eine Markdown-Datei und legt das

**[00:56:10]** unter den Kochrezepten dann ab. Also Astro hat ja, ich weiß nicht, ob du das weißt, du bist ja

**[00:56:14]** wahrscheinlich so in Astro drin. Astro hat halt, und das ist das Geile an Astro, warum ich das so

**[00:56:18]** liebe, die haben halt sogenannte Content Collections. Das heißt, die haben, also du kannst Markdown-Dateien

**[00:56:24]** ablegen, aber die haben halt so einen Layer, der die Markdown-Dateien dann in JavaScript quasi als

**[00:56:29]** Datenbank zur Verfügung stellt. Du musst auch Schemas mit Sot, Sot-Schemas festlegen. Das heißt,

**[00:56:36]** also die Markdown-Dateien, die scannt er erstmal und sagt, die Datei entspricht nicht meinem Schema

**[00:56:40]** und so. Und dann hast du halt, in den Markdown-Dateien kannst du halt einmal Text haben.

**[00:56:44]** Das ist halt gedacht für so Pages, wo du einfach nur so Fleece-Text Markdown wechselst, aber die

**[00:56:48]** haben halt alle noch Frontmatter oben. Und in den Frontmatter kannst du strukturierte Daten dann

**[00:56:52]** ablegen, noch irgendwie, weiß nicht, kannst du dann sagen, irgendwie kind, legume, legume and,

**[00:56:58]** weiß ich nicht, dairy product oder, oder auf Deutsch sagst du halt, was ist das hier, ist das Gemüse,

**[00:57:05]** ist das Obst oder so. Keine Ahnung, wofür man das brauchen würde, aber kannst du da halt machen.

**[00:57:10]** Oder du kannst halt ganz runtergehen auf JSON oder YAML, kannst du auch als, die Dateien kannst

**[00:57:14]** du da eben auch verwalten. Genau. Und insofern ist, das ist halt für mich das Entscheidende,

**[00:57:19]** dass halt die AI diese ganzen Daten sieht, dass die nicht in irgendeiner Datenbank drin sind,

**[00:57:23]** wo die dann da ran muss oder so, sondern es sind alles einfach nur Dateien auf der Platte und die

**[00:57:27]** AI fliegt da drüber und kann alles anfassen und sich angucken und so. Und du kannst dann auch sagen,

**[00:57:32]** hier, ich habe die Sprache gewechselt, du bist eine neue Freundin, es muss alles auf Spanisch sein.

**[00:57:36]** Ja. Ja, dann wird das alles übersetzt. Und das ist halt so. Und das, dafür benutze ich

**[00:57:44]** LoadCodeWeb oder dann habe ich irgendwelche Webseiten hier von der CDU in Nordstemmen oder

**[00:57:49]** von der, vom Kindergarten oder so. Und dann, wenn ich dann unterwegs bin oder so, dann spreche ich

**[00:57:53]** da halt rein, dass da irgendwas geändert werden soll, dass da ein neuer, oder schreibe mir mal

**[00:57:57]** einen Artikel über Sommerfest oder so. Ja, das Sommerfest war so und so, so viele Leute waren da,

**[00:58:02]** bla, bla, bla, bla, bla. Spreche ich da alles rein, bringe ich absenden und dann gehe ich

**[00:58:06]** einen Kaffee trinken und wenn ich zurückkomme, ist PR fertig mit dem schönen neuen Ding,

**[00:58:11]** mit dem schönen neuen Beitrag. Das Einzige, was halt schwierig ist, ist so Assets hochzuladen,

**[00:58:15]** Fotos und so. Hier muss ich dann über das GitHub-Interface, hinterlege ich die dann immer

**[00:58:20]** in so einem Uploads-Folder und sage, hol dir die da raus und verschiebe die und so. Oder PDF-Dateien

**[00:58:26]** zum Beispiel, die ich dann da überarbeiten will, genau. Und dafür benutze ich eben dieses

## Claude Code in GitHub

**[00:58:30]** LoadCodeWeb relativ viel. Und dann ist es halt so, und im Moment arbeite ich ja nicht im Projekt,

**[00:58:36]** sondern quasi mache so ein Sabbatical, um mir hier diese AI-Sachen anzugucken. Und wenn ich

**[00:58:44]** jetzt in einem Projekt wäre, dann würde ich vielleicht auch noch mehr diese GitHub-Integration

**[00:58:47]** nutzen. Also, dass man einfach Issues schreibt und die dann Clode-Assigned, weil das ist natürlich

**[00:58:53]** dann nochmal ein bisschen transparenter gegenüber dem Team. Also, diese LoadCodeWeb-Konversationen,

**[00:58:58]** die man da hat, die sehen andere Leute nicht. Das ist auch alles sehr egomäßig so. Diese ganze

**[00:59:04]** Code-Konversation, ich habe mal versucht, meinem Bruder so eine Team-Konversation aufzusetzen,

**[00:59:09]** wo wir beide gleichzeitig mit Code sprechen können. Das funktioniert nicht. Da habe ich

**[00:59:13]** keine Solution. Da habe ich auch wirklich viel Zeit rein investiert. Das ist im Prinzip noch

**[00:59:16]** eine Marktlücke. Vielleicht gibt es da auch irgendwelche technischen Probleme oder so,

**[00:59:21]** warum das nicht geht. Und wenn man eben dann über GitHub-Issues mit Code spricht,

**[00:59:26]** dann hat man natürlich eine mega geile Dokumentation davon. Da ist es ein bisschen

**[00:59:31]** fummelig, dass man da muss man immer ... Also, das wird ja dann, wenn man dann Add-Clode

**[00:59:34]** highlighted, dann wird eine GitHub-Action gestartet. Die muss man in seinem Repository

**[00:59:38]** einmal anlegen. Die hat defaultmäßig kaum Rechte. Du kannst zum Beispiel keine Websearch machen.

**[00:59:44]** Also, wenn ich dann so sage, so ja, suchen wir mal zehn Rezepte raus, dann sagt er, ich darf

**[00:59:48]** nicht ins Internet und so. Und dann drehe ich immer am Rad, weil ich mir denke, das ist doch

**[00:59:52]** hier irgendwie Container. Da muss man dann so ein bisschen die Permissions erhöhen und die Tools

**[00:59:56]** richtig auswählen und so. Und dann wird der aber auch zu einem mächtigen Mitarbeiter. Und das war

**[01:00:00]** eigentlich ursprünglich der Durchbruch für mich, warum ich gesagt habe, ich steige jetzt auf AI um

**[01:00:04]** und mein Job ist auch ... Also, man kann jetzt noch meiner Meinung nach absaugen als Developer

**[01:00:09]** bei Firmen, die es nicht gecheckt haben. Aber im Prinzip ist die Titanic am sinken und man ist da,

**[01:00:14]** der spielt da noch so Musik. Aber das ist nicht tragfähig. Und das habe ich in dem Moment für

**[01:00:22]** mich begriffen. Ich habe einfach, das war ja damals mit Solid noch oder so, aber da habe

**[01:00:26]** ich einfach Issues an Cloud Assigned, für die ich normalerweise da selber gearbeitet hätte. Und

**[01:00:30]** der hat die einfach ziemlich gut gemacht. Und das ist also auch nochmal so ein Workflow, den ich

**[01:00:36]** nutze. Der dritte im Prinzip. Und ich switche zwischen diesen ganzen Ebenen hin und her. Es

**[01:00:43]** gibt auch die Möglichkeit zu teleporten. Also, das hast du mir auch mal gesagt, dass man, wenn

**[01:00:48]** man in diesem Cloud Code Webmodus ist und sagt, ah, das ist jetzt hier zu fummelig geworden, ich

**[01:00:53]** brauche das jetzt lokal. Dann kann man sich das irgendwie runter teleporten. Das funktioniert mal

**[01:00:57]** so, mal so. Am Ende des Tages sage ich Cloud dann eigentlich meistens, komm, push das einfach. Und

**[01:01:02]** dann ziehst du mir woanders wieder das Branch runter. Und dann ist es auch okay.

**[01:01:04]** Ja, spannend. Vor allem auch das Thema Reviewbarkeit und Nachvollziehbarkeit wird

**[01:01:14]** einfach ein spannendes Thema, wie man damit umgehen wird. Ich glaube, der Ex-CEO von GitHub

**[01:01:21]** hatte jetzt eine neue Company gestartet. Jetzt vor zwei Tagen, glaube ich, haben sie ihr Funding

**[01:01:27]** bekommen von 60 Millionen, wo sie genau das Thema angehen. Ich weiß gerade nicht den Namen. Irgendwas

**[01:01:35]** mit E. Und dort wollen sie genau dieses Thema aufgreifen, dass der Kontext und dass die Historie

**[01:01:44]** von einem Agenten sichtbar ist in Git, sodass man halt nachvollziehen kann, was für Toolings

**[01:01:54]** aufgerufen worden sind und das dann quasi aus der Sicht auch nachvollziehbar machen kann und

**[01:02:00]** reviewbar machen kann. Also das ist, glaube ich, ein Riesenthema, das einfach als Entwickler

**[01:02:08]** organisatorisch neu aufzuziehen und da auch irgendwie neu zu denken.

**[01:02:12]** Also das mache ich jetzt auch bei den ganzen Projekten schon, dass ich da in die Klott im

**[01:02:19]** D reinschreibe, egal was du machst, du musst immer ein Change Set machen. Du musst immer

**[01:02:22]** im Change Log schreiben, was du gemacht hast und warum. Du musst die Dokumentation updaten. Und

**[01:02:28]** die Dokumentation ist auch nicht nur so Pille-Palle, sondern die erklärt eigentlich alles. Und manchmal

**[01:02:34]** muss man sagen, ist er da dann doch ein bisschen isoliert unterwegs? Und dann hat man so redundante

**[01:02:38]** Passagen in seinen Docs und so. Der hat das dann nicht auf dem Schirm, die komplett so zu

**[01:02:41]** überspannen. Aber wo man früher halt nie Bock drauf hatte als Developer, jetzt im Change Log

**[01:02:47]** irgendwelche Sachen da schreiben und so, das macht er jetzt halt alles sofort. Und das ist ja auch

**[01:02:52]** schon ein ganz toller Beitrag für die Nachvollziehbarkeit von dem, was da eigentlich

**[01:02:56]** historisch passiert ist. Ja, und der most valued Skill bei mir ist, den ich auch, also das ist ein

**[01:03:04]** No-Brainer, Conventional Commits einfach als Skill zu haben. Und dann haut er dir supergute

**[01:03:10]** Commit-Messages raus. Besser als jeder Entwickler je schreiben würde. Und auch super granular,

**[01:03:19]** wenn man es haben will. Ja, aber die, also mit Conventional Commits habe ich auch mal gearbeitet,

**[01:03:23]** halte ich mir gar nichts mehr von. Müssen wir da nochmal in Ruhe drüber sprechen. Also ich nutze

**[01:03:27]** jetzt Change Set, das ist glaube ich auch von Google oder irgendwas. Das ist einfach ganz nice,

**[01:03:34]** aber können wir da nochmal extra besprechen irgendwann. Das ist dann vielleicht auch ein

**[01:03:39]** bisschen zu nerdig für den einen oder anderen. Aber im Endeffekt, dann kannst du dir auch ein

**[01:03:45]** Skill dafür schreiben. Habe ich schon im Prinzip. Also das steht halt in der Cloud-MD drin, dass du

**[01:03:50]** das machen soll und dann, genau. Und das funktioniert super. Und das ist das ganze

**[01:03:55]** Housekeeping. Das ist halt einfach, die AI macht das halt alles. Das ist auch ein Riesenfortschritt

## Outro

**[01:04:00]** für die ganzen Projekte. Gut, okay. Ja, dann haben wir das jetzt erstmal glaube ich so ein

**[01:04:06]** bisschen überflogen. Ich denke mal, wir steigen dann in weiteren Podcasts dann tiefer in einzelne

**[01:04:14]** Themen ein. Wir wollen ja auch mal vielleicht so ein Video-Podcast machen, wo wir dann auch mal

**[01:04:20]** zeigen, was wir so machen. Genau. Und ich würde sagen, also wer das jetzt hier so hört,

**[01:04:26]** erstmal, also gleich weiter empfehlen natürlich, damit wir mal ein bisschen Publikum kriegen. Und

**[01:04:32]** das andere ist, schreibt uns doch bitte. Ja, also ihr habt hier irgendwo die Kontaktdaten

**[01:04:38]** und es gibt da auch eine Webseite dann dafür. Am liebsten natürlich bei GitHub. Da haben wir auch

**[01:04:45]** ein Diskussionsforum, wo ihr euch direkt melden könnt und so. Und wenn ihr noch kein GitHub

**[01:04:50]** Account habt, dann, also wir werden auch sicherlich mal einen Podcast dazu machen. Das sind ja so die

**[01:04:56]** Must-Have-Skills als AI-Developer. Und jetzt meiner Meinung nach schon als Teaser, also ohne

**[01:05:02]** Git und Markdown braucht man es nicht versuchen. Das wäre so meine Empfehlung. Und das sind da

**[01:05:10]** Sachen, die kann man schnell lernen. Aber das heißt also, wenn ihr euch einen GitHub-Account

**[01:05:14]** klickt, dann könnt ihr da auch mit diskutieren und so. Und dann würden wir viel dafür kriegen,

**[01:05:19]** was euch unter den Nägeln brennt. Und ihr könnt da vielleicht nochmal drauf eingehen. Genau,

**[01:05:24]** wir wollen auch dann vielleicht mal Gäste einladen oder so. Das wäre vielleicht auch eine

**[01:05:29]** coole Sache. Das wäre spannend, ja. Genau. Also, ja, und generell, also auch wenn ihr sagt,

**[01:05:34]** nee, hier, das Quatsch, was ihr erzählt, das gibt es doch schon zehnmal von anderen Leuten. Dann

**[01:05:41]** schickt uns das ruhig. Wir haben ja auch Besseres zu tun, als das Rad neu zu erfinden. Wir haben

**[01:05:46]** halt ein bisschen Research gemacht und nichts gefunden, was uns gefallen hat. Insofern sind wir

**[01:05:51]** da auch offen, immer was zu lernen. Ja, und ich weiß nicht, Michael, hast du noch? Vielleicht

**[01:05:56]** haben wir auch angenehme Stimmen und vielleicht kommt das auch so gut drüber. Deswegen, who knows?

**[01:06:01]** Ja, vielleicht kann man die mit der AI auch tauschen dann, wenn die einem nicht gefallen.

**[01:06:05]** Gut, okay, alles klar. Wenigstens da für heute war es das erste Mal als Einstieg. Und wir freuen

**[01:06:14]** uns dann schon auf die nächste Folge mit euch und wünschen euch was. Jo, danke euch.
