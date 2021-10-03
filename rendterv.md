# Számrendszer átalakító rendszerszerterv

## 1. A rendszer célja

A weboldal a megrendelő Macrohard Kft. alkalmazottai számára lehetőséget nyújt a munkájuk során felmerülő számrendszer-átváltások
egyszerű, gyors és megbízható végrehajtására. Mindezt biztosítják a lentebb részletezett technológiák segítségével implementált,
a megrendelő igényeihez igazított funkciók. Ezek segítségével a Macrohard Kft. alkalmazottai egy egyszerűen kezelhető és esztétikus, kliens-oldalon működő eszközt kapnak kézhez, ezzel is segítve és gyorsítva a mindennapi munkavégzésüket. 

## 2. A projekt terve

A weboldal HTML, CSS és a JavaScript technológiák révén fog megvalósulni.

A fejlesztők csapata négy személyből áll, mindenki saját felelőségekkel rendelkezik:
* Vas Ruben Levente - HTML
* Somogyi Viktória - CSS
* Görög Balázs - JavaScript
* Pintér Balázs - Tesztelés, integráció

A fejlesztők csapata a saját, általuk biztosított gépeken fogják végezni a fejlesztést.


### 2.1 Mérföldkövek

[01] Feladatok kiosztása, szerepek meghatározása.

[02] A weboldal kinézetének megtervezése.

[03] A JavaScript funkciók implementációja.

[04] A JavaScript funkciók integrációja az oldalhoz.

[05] Az oldal megfelelő mértékű tesztelése a kívánt platformokon.

### 2.2 Ütemterv

1: [01] Elérése, ez egy közös megbeszélés útján történik meg.

2: [02] Elérése, ez a HTML és a CSS fejlesztők együttműködése, közös megegyezése útján valósul meg.

3: [03] Elérése, ez a JavaScript fejlesztő egyedüli felelőssége.

4: [04] Elérése, ez a JavaScript, HTML és a CSS fejlesztők közös munkáján keresztül valósul meg, amit egy közös megbeszélés előz meg.

5  [05] Elérése, ami a Tesztelő felelőssége, megvalósítása meg a különböző webböngészőkön keresztüli teszteléssel valósul meg.

## 3. Modell az üzleti folyamatokhoz

### 3.1.1. Szereplők:
 * Kommunikációs Dolgozó

### 3.1.2. Erőforrások:
 * Bármilyen eszköz, amely képes JavaScript/HTML oldalakat megjeleníteni és lekezelni
 * Szervergép
 * Hálózati kapcsolat

### 3.1.3. Bemenetek:
 * Szám és számrendszer

### 3.1.4. Entitások:
 * A számrendszer átalakító oldal

### 3.1.5. Kimenet:
 * A kommunikációs dolgozó által kívánt szám a kívánt számrendszerben

### 3.1.6. Folyamat:

A kommunikációs dolgozó át kíván küldeni egy számot adott számrendszerben az ügyfélnek -> Leellenőrzi, hogy a kívánt számrendszer megegyezik-e a jelenlegivel.

Ha igen: Átküldi a számot, a kommunikáció gond nélkül folytatódik.

Ha nem: Beírja a weboldalba a kívánt számrendszert, a jelenlegi számrendszert, és magát a számot. -> Megnyomja az átváltás gombot -> Leolvassa a szám új alakját. -> átküldi az ügyfélnek, a kommunikáció gond nélkül folytatódik.

### 3.1.7: Folyamatábra:

![flowchart](link here)

### 3.1.8: Példa:

Az egyik kommunikációs dolgozó kap egy "1E240" hexadecimális számot egy ügyféltől, amit át kell váltson huszonhármas számrendszerbe. Megnyitja a weboldalt, amelyen a legutoljára elmentett számrendszer-párosa a kettesből tízes. Mivel nem egyeznek meg a kívánt és a jelenlegi számrendszerek, így ezeket átállítja az elvártnak megfelelően. Ezután beírja az átváltani kívánt számot, majd megnyomja a konvertálás gombot. Ekkor megtörténik az átváltás, a dolgozó eredményként visszakapja az "A38F" számot, amit aztán elküld az ügyfélnek.

## 4. Követelmények

Az előző dokumentumok követelményeinek magyarázata. Pl
## [01] Valami
    A weboldal xy-ja yx-el fog megvalósulni.


## 5. Funkcionális terv

### 5.1. Az elkészítendő rendszer tulajdonságai

Pl: Egy olyan weboldal amely:
    -cucc1
    -cucc2

### 5.2. Rendszerszereplők
Pl:
    -Weboldal
    -Szerver
    -Kliensoldali megjelenítő: + nagy rövid leírások

### 5.2. Rendszerhasználati esetek és lefutásaik

#### 5.2.1. Számrendszer-átalakítás

##### 5.2.1.1. A Funkcionalitás leírása

Pl: Legyen a weboldalin xy ami yx-et csinál és xxy-t ad vissza.

[Képernyőterv, felszámozva]()

##### 5.2.1.2. Példa lefutás/Használati eset

Életbeli példa arról hogy 5.2.1.1 hogy történik.


## 6. Fizikai környezet

A projekt megvalósítás szerint egy weboldal, ami azt jelenti hogy bármely webes felületet megjeleníteni tudó eszközre készül.
 * A kliens által biztosított eszközök:
    - Webszerver
    - Megjelenítésre képes asztali gép.
* Fejlesztők által használt eszközök, technológiák:
    - Git
    - Visual Studio Code
    - Microsoft Paint
    - yEd Graph Editor
* Tesztelt környezetek:
    - Microsoft Edge (Chromium)
    - Google Chrome
    - Mozilla Firefox
    - Opera


## 7. Absztrakt domain modell

A rendszer, a weboldal, kialakítását, megjelenítését a HTML és CSS technológiák határozzák meg, míg a funkcionalitást a beépített JavaScript szkript valósítja meg, aminek a bemenetét és kimenetét HTML formok valósítják meg.


![Domain modell gráf](/img/domainmodell.png)

## 8. Architekturális terv

Megbeszélés után úgy döntöttünk hogy nem készítjük el, mivel a weboldalnak csak egy rétegje van.



## 9. Adatbázisterv

A weboldal nem kezel adatbázist, ezért ennek az elkészítése szükségtelen.



## 10. Implementációs terv

Nem kerül elkészítésre, mivel a weboldalban szereplő osztályok kicsik, a kapcsolatok köztük triviálisak.


## 11. Teszt tervek

A projekt tesztelése két részből fog állni.
  #### 11.1 UI tesztelés
  Annak ellenőrzése, hogy a weboldal, és annak vizuális elemei megfelelően és esztétikusan jelennek-e meg a főbb böngészőkben és platformokon.

  #### 11.2 Funkcionális tesztelés
Annak ellenőrzése, hogy a program képes pontos átváltásra a megadott számrendszerek között.


## 12. Telepítési tervezet

A felhasználó letölti az alkalmazást, majd egy általa preferált böngészővel megnyitja a converter.html fájlt.

## 13. Karbantartási tervezet

Szükségtelen, mivel a weboldal természetéből eredendően nincs szükség karbantartásra, csak esetleges javítócsomagokra.
